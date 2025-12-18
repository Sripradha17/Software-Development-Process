import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { sdlcDragDropQuiz, aiSdlcDragDropQuiz, quizConfig } from '../constants/quiz/dragDropQuizData';
import Menu from './Menu';
import sdlcMenuItems from '../constants/sdlc/menuItems';
import aiMenuItems from '../constants/ai-sdlc/aiMenuItems';
import styles from '../styles/index';

// Sortable Item Component for ordering tasks
const SortableItem = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

// Droppable Target Component for matching tasks
const DroppableTarget = ({ id, children, isOver, correctMatch }) => {
  return (
    <div style={{
      ...styles.dropTarget,
      ...(isOver ? styles.dropTargetActive : {}),
      ...(correctMatch ? styles.dropTargetCorrect : {})
    }}>
      {children}
    </div>
  );
};

// Draggable Item Component for matching tasks
const DraggableItem = ({ id, children, isDragging }) => {
  return (
    <div style={{
      ...styles.draggableItem,
      ...(isDragging ? styles.draggableItemDragging : {})
    }}>
      {children}
    </div>
  );
};

const DragDropQuiz = () => {
  const { type } = useParams(); // 'sdlc' or 'ai-sdlc'
  const navigate = useNavigate();
  
  // Select quiz data based on type
  const quizData = type === 'ai-sdlc' ? aiSdlcDragDropQuiz : sdlcDragDropQuiz;
  const menuItems = type === 'ai-sdlc' ? aiMenuItems : sdlcMenuItems;
  
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(quizConfig.timePerQuestion);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Drag and drop state
  const [activeId, setActiveId] = useState(null);
  const [matchedItems, setMatchedItems] = useState({});
  const [orderedItems, setOrderedItems] = useState([]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const currentQuestion = quizData[currentQuestionIndex];

  // Initialize ordered items for ordering questions
  useEffect(() => {
    if (currentQuestion?.type === 'order') {
      setOrderedItems(currentQuestion.items.map(item => item.id));
    }
  }, [currentQuestionIndex, currentQuestion]);

  // Timer effect
  useEffect(() => {
    if (!quizCompleted && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !quizCompleted) {
      handleNextQuestion();
    }
  }, [timeRemaining, quizCompleted]);

  // Reset timer for new question
  useEffect(() => {
    setTimeRemaining(quizConfig.timePerQuestion);
  }, [currentQuestionIndex]);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event) => {
    // Handle drag over events if needed
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    if (currentQuestion.type === 'match') {
      // Handle matching questions
      if (active.id !== over.id) {
        setMatchedItems(prev => ({
          ...prev,
          [over.id]: active.id
        }));
      }
    } else if (currentQuestion.type === 'order') {
      // Handle ordering questions
      if (active.id !== over.id) {
        setOrderedItems((items) => {
          const oldIndex = items.indexOf(active.id);
          const newIndex = items.indexOf(over.id);
          return arrayMove(items, oldIndex, newIndex);
        });
      }
    }
  };

  const calculateQuestionScore = () => {
    if (currentQuestion.type === 'match') {
      let correctMatches = 0;
      const totalMatches = currentQuestion.targets.length;
      
      currentQuestion.targets.forEach(target => {
        if (matchedItems[target.id] === target.correctMatch) {
          correctMatches++;
        }
      });
      
      return correctMatches / totalMatches;
    } else if (currentQuestion.type === 'order') {
      let correctPositions = 0;
      const totalItems = currentQuestion.items.length;
      
      orderedItems.forEach((itemId, index) => {
        const item = currentQuestion.items.find(i => i.id === itemId);
        if (item && item.correctOrder === index + 1) {
          correctPositions++;
        }
      });
      
      return correctPositions / totalItems;
    }
    return 0;
  };

  const handleNextQuestion = () => {
    const questionScore = calculateQuestionScore();
    
    // Store user answer
    const answer = currentQuestion.type === 'match' ? 
      { ...matchedItems } : 
      [...orderedItems];
    
    const newUserAnswers = {
      ...userAnswers,
      [currentQuestionIndex]: {
        answer,
        score: questionScore,
        type: currentQuestion.type
      }
    };

    setUserAnswers(newUserAnswers);

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setMatchedItems({});
      setOrderedItems([]);
    } else {
      // Quiz completed - calculate final score with all answers including current
      completeQuiz(newUserAnswers);
    }
  };

  const completeQuiz = (allUserAnswers) => {
    let totalScore = 0;
    
    // Calculate total score from all questions
    Object.values(allUserAnswers).forEach(answer => {
      totalScore += answer.score;
    });
    
    const finalScore = totalScore / quizData.length;
    setScore(finalScore);
    setQuizCompleted(true);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setMatchedItems({});
    setOrderedItems([]);
    setShowResults(false);
    setQuizCompleted(false);
    setScore(0);
    setTimeRemaining(quizConfig.timePerQuestion);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (showResults) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.absoluteTopRight}>
          <Menu items={menuItems} title="Menu" />
        </div>
        
        <Link to="/" style={styles.backLink}>
          ← Back to Home
        </Link>

        <motion.div 
          style={styles.quizResultsContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            style={styles.resultsCard} 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              style={styles.resultIcon} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {score >= quizConfig.passingScore ? '🎉' : '📚'}
            </motion.div>
            
            <motion.h1 
              style={styles.resultTitle} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Quiz Complete!
            </motion.h1>
            
            <motion.div 
              style={styles.scoreDisplay} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <div style={styles.scoreNumber}>
                {Math.round(score * 100)}%
              </div>
              <div style={styles.scoreText}>
                {score >= quizConfig.passingScore ? 'Excellent Work!' : 'Keep Learning!'}
              </div>
            </motion.div>

            <motion.div 
              style={styles.resultsSummary} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <p>You answered {Math.round(score * quizData.length)} out of {quizData.length} questions correctly.</p>
              {score >= quizConfig.passingScore ? (
                <p style={styles.passText}>
                  Great job! You have a solid understanding of the concepts.
                </p>
              ) : (
                <p style={styles.failText}>
                  Consider reviewing the material and trying again.
                </p>
              )}
            </motion.div>

            <motion.div 
              style={styles.resultActions} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              {quizConfig.allowRetry && (
                <motion.button
                  style={styles.retryButton}
                  onClick={resetQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              )}
              
              <motion.button
                style={styles.continueButton}
                onClick={() => navigate(type === 'ai-sdlc' ? '/ai-augmented-software-development' : '/learn-software-development')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Learning
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.absoluteTopRight}>
        <Menu items={menuItems} title="Menu" />
      </div>
      
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>

      <motion.div 
        style={styles.quizContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Quiz Header */}
        <motion.div style={styles.quizHeader} variants={itemVariants}>
          <div style={styles.quizProgress}>
            <div style={styles.progressText}>
              Question {currentQuestionIndex + 1} of {quizData.length}
            </div>
            <div style={styles.progressBar}>
              <motion.div 
                style={{
                  ...styles.progressFill,
                  width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          <div style={styles.quizTimer}>
            <span style={timeRemaining <= 30 ? styles.timerWarning : styles.timerNormal}>
              ⏱️ {formatTime(timeRemaining)}
            </span>
          </div>
        </motion.div>

        {/* Question Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            style={styles.questionContainer}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h2 style={styles.questionTitle}>{currentQuestion.question}</h2>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
            >
              {currentQuestion.type === 'match' ? (
                // Matching Question Layout
                <div style={styles.matchingContainer}>
                  <div style={styles.draggableItems}>
                    <h3 style={styles.sectionTitle}>Drag these items:</h3>
                    {currentQuestion.items.map((item) => (
                      <DraggableItem
                        key={item.id}
                        id={item.id}
                        isDragging={activeId === item.id}
                      >
                        <div
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData('text/plain', item.id);
                            setActiveId(item.id);
                          }}
                          onDragEnd={() => setActiveId(null)}
                        >
                          {item.text}
                        </div>
                      </DraggableItem>
                    ))}
                  </div>

                  <div style={styles.dropTargets}>
                    <h3 style={styles.sectionTitle}>Drop them here:</h3>
                    {currentQuestion.targets.map((target) => (
                      <DroppableTarget
                        key={target.id}
                        id={target.id}
                        isOver={false}
                        correctMatch={matchedItems[target.id]}
                      >
                        <div
                          onDrop={(e) => {
                            e.preventDefault();
                            const draggedId = e.dataTransfer.getData('text/plain');
                            setMatchedItems(prev => ({
                              ...prev,
                              [target.id]: draggedId
                            }));
                            setActiveId(null);
                          }}
                          onDragOver={(e) => e.preventDefault()}
                        >
                          <div style={styles.targetText}>{target.text}</div>
                          {matchedItems[target.id] && (
                            <div style={styles.matchedItem}>
                              {currentQuestion.items.find(item => item.id === matchedItems[target.id])?.text}
                            </div>
                          )}
                        </div>
                      </DroppableTarget>
                    ))}
                  </div>
                </div>
              ) : (
                // Ordering Question Layout
                <div style={styles.orderingContainer}>
                  <h3 style={styles.sectionTitle}>Drag to reorder these items:</h3>
                  <SortableContext items={orderedItems} strategy={verticalListSortingStrategy}>
                    {orderedItems.map((itemId, index) => {
                      const item = currentQuestion.items.find(i => i.id === itemId);
                      return (
                        <SortableItem key={itemId} id={itemId}>
                          <div style={styles.orderItem}>
                            <span style={styles.orderNumber}>{index + 1}</span>
                            <span style={styles.orderText}>{item?.text}</span>
                            <span style={styles.dragHandle}>⋮⋮</span>
                          </div>
                        </SortableItem>
                      );
                    })}
                  </SortableContext>
                </div>
              )}

              <DragOverlay>
                {activeId ? (
                  <div style={styles.dragOverlay}>
                    {currentQuestion.type === 'match' 
                      ? currentQuestion.items.find(item => item.id === activeId)?.text
                      : currentQuestion.items.find(item => item.id === activeId)?.text
                    }
                  </div>
                ) : null}
              </DragOverlay>
            </DndContext>

            {/* Navigation Buttons */}
            <motion.div style={styles.quizNavigation} variants={itemVariants}>
              <motion.button
                style={styles.nextButton}
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={
                  currentQuestion.type === 'match' 
                    ? Object.keys(matchedItems).length === 0
                    : orderedItems.length === 0
                }
              >
                {currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DragDropQuiz;