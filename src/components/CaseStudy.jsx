import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import sdlcMenuItems from '../constants/sdlc/menuItems';
import aiMenuItems from '../constants/ai-sdlc/aiMenuItems';
import { sdlcCaseStudies, caseStudyConfig } from '../constants/caseStudy/sdlcCaseStudies';
import { aiSdlcCaseStudies, aiCaseStudyConfig } from '../constants/caseStudy/aiSdlcCaseStudies';
import styles from '../styles/index';

const CaseStudy = () => {
  const { type, caseId } = useParams(); // 'sdlc' or 'ai-sdlc', and case study ID
  const navigate = useNavigate();
  
  // Select case study data based on type
  const caseStudies = type === 'ai-sdlc' ? aiSdlcCaseStudies : sdlcCaseStudies;
  const config = type === 'ai-sdlc' ? aiCaseStudyConfig : caseStudyConfig;
  const menuItems = type === 'ai-sdlc' ? aiMenuItems : sdlcMenuItems;
  
  // Find the specific case study
  const caseStudy = caseStudies.find(cs => cs.id === caseId);
  
  // Component state
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [caseStudyCompleted, setCaseStudyCompleted] = useState(false);

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

  // If case study not found, show error
  if (!caseStudy) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.absoluteTopRight}>
          <Menu items={menuItems} title="Menu" />
        </div>
        <Link to="/" style={styles.backLink}>
          ← Back to Home
        </Link>
        <div style={styles.errorContainer}>
          <h1>Case Study Not Found</h1>
          <p>The requested case study could not be found.</p>
        </div>
      </div>
    );
  }

  const currentStage = caseStudy.stages[currentStageIndex];

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = currentStage.options.find(opt => opt.id === selectedAnswer)?.isCorrect || false;
    
    // Store user answer
    const newUserAnswers = {
      ...userAnswers,
      [currentStageIndex]: {
        questionId: currentStage.id,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect,
        stage: currentStage.title
      }
    };
    
    setUserAnswers(newUserAnswers);
    setShowExplanation(true);
  };

  const handleNextStage = () => {
    if (currentStageIndex < caseStudy.stages.length - 1) {
      setCurrentStageIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Case study completed
      completeCaseStudy();
    }
  };

  const completeCaseStudy = () => {
    // Calculate final score
    let correctAnswers = 0;
    Object.values(userAnswers).forEach(answer => {
      if (answer.isCorrect) correctAnswers++;
    });
    
    const finalScore = correctAnswers / caseStudy.stages.length;
    setScore(finalScore);
    setCaseStudyCompleted(true);
    setShowResults(true);
  };

  const resetCaseStudy = () => {
    setCurrentStageIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUserAnswers({});
    setShowResults(false);
    setCaseStudyCompleted(false);
    setScore(0);
  };

  // Results screen
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
          style={styles.caseStudyResultsContainer}
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
              {score >= config.passingScore ? '🏆' : '📚'}
            </motion.div>
            
            <motion.h1 
              style={styles.resultTitle} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Case Study Complete!
            </motion.h1>

            <motion.h2 
              style={styles.caseStudyTitle} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              {caseStudy.title}
            </motion.h2>
            
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
                {score >= config.passingScore ? 'Excellent Decision Making!' : 'Keep Learning!'}
              </div>
            </motion.div>

            <motion.div 
              style={styles.resultsSummary} 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <p>You made correct decisions in {Math.round(score * caseStudy.stages.length)} out of {caseStudy.stages.length} SDLC stages.</p>
              {score >= config.passingScore ? (
                <p style={styles.passText}>
                  Great job! You demonstrate strong understanding of {type === 'ai-sdlc' ? 'AI-enhanced ' : ''}software development processes.
                </p>
              ) : (
                <p style={styles.failText}>
                  Consider reviewing the {type === 'ai-sdlc' ? 'AI-enhanced ' : ''}SDLC principles and trying again.
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
              {config.allowRetry && (
                <motion.button
                  style={styles.retryButton}
                  onClick={resetCaseStudy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Again
                </motion.button>
              )}
              
              <motion.button
                style={styles.continueButton}
                onClick={() => navigate(`/case-studies/${type}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Other Case Studies
              </motion.button>

              <motion.button
                style={styles.continueButton}
                onClick={() => navigate(type === 'ai-sdlc' ? '/ai-augmented-software-development' : '/learn-software-development')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Learning
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Main case study interface
  return (
    <div style={styles.pageContainer}>
      <div style={styles.absoluteTopRight}>
        <Menu items={menuItems} title="Menu" />
      </div>
      
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>

      <motion.div 
        style={styles.caseStudyContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Case Study Header */}
        <motion.div style={styles.caseStudyHeader} variants={itemVariants}>
          <div style={styles.caseStudyProgress}>
            <div style={styles.progressText}>
              Stage {currentStageIndex + 1} of {caseStudy.stages.length}: {currentStage.title}
            </div>
            <div style={styles.progressBar}>
              <motion.div 
                style={{
                  ...styles.progressFill,
                  width: `${((currentStageIndex + 1) / caseStudy.stages.length) * 100}%`
                }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentStageIndex + 1) / caseStudy.stages.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div style={styles.caseStudyInfo}>
            <h1 style={styles.caseStudyMainTitle}>{caseStudy.title}</h1>
            <p style={styles.caseStudyDescription}>{caseStudy.description}</p>
          </div>
        </motion.div>

        {/* Stage Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageIndex}
            style={styles.stageContainer}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div style={styles.stageContent}>
              <h2 style={styles.stageTitle}>{currentStage.title}</h2>
              
              <div style={styles.contextSection}>
                <h3 style={styles.sectionTitle}>Context</h3>
                <p style={styles.contextText}>{currentStage.context}</p>
              </div>

              <div style={styles.situationSection}>
                <h3 style={styles.sectionTitle}>Situation</h3>
                <p style={styles.situationText}>{currentStage.situation}</p>
              </div>

              <div style={styles.questionSection}>
                <h3 style={styles.sectionTitle}>Decision Required</h3>
                <p style={styles.questionText}>{currentStage.question}</p>

                <div style={styles.optionsContainer}>
                  {currentStage.options.map((option) => (
                    <motion.div
                      key={option.id}
                      style={{
                        ...styles.optionItem,
                        ...(selectedAnswer === option.id ? styles.selectedOption : {}),
                        ...(showExplanation && option.isCorrect ? styles.correctOption : {}),
                        ...(showExplanation && selectedAnswer === option.id && !option.isCorrect ? styles.incorrectOption : {})
                      }}
                      onClick={() => !showExplanation && handleAnswerSelect(option.id)}
                      whileHover={!showExplanation ? { scale: 1.02 } : {}}
                      whileTap={!showExplanation ? { scale: 0.98 } : {}}
                    >
                      <span style={styles.optionLabel}>{option.id.toUpperCase()}</span>
                      <span style={styles.optionText}>{option.text}</span>
                      {showExplanation && option.isCorrect && (
                        <span style={styles.correctIcon}>✓</span>
                      )}
                      {showExplanation && selectedAnswer === option.id && !option.isCorrect && (
                        <span style={styles.incorrectIcon}>✗</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {showExplanation && (
                <motion.div
                  style={styles.explanationSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 style={styles.sectionTitle}>Explanation</h3>
                  <p style={styles.explanationText}>{currentStage.explanation}</p>
                  
                  <div style={styles.bestPracticesSection}>
                    <h4 style={styles.bestPracticesTitle}>Best Practices:</h4>
                    <ul style={styles.bestPracticesList}>
                      {currentStage.bestPractices.map((practice, index) => (
                        <li key={index} style={styles.bestPracticeItem}>
                          <span style={{color: '#9B59B6', fontWeight: 'bold', marginRight: '0.5rem'}}>•</span>
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <motion.div style={styles.stageActions} variants={itemVariants}>
              {!showExplanation ? (
                <motion.button
                  style={styles.submitButton}
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  whileHover={selectedAnswer ? { scale: 1.05 } : {}}
                  whileTap={selectedAnswer ? { scale: 0.95 } : {}}
                >
                  Submit Decision
                </motion.button>
              ) : (
                <motion.button
                  style={styles.nextButton}
                  onClick={handleNextStage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentStageIndex === caseStudy.stages.length - 1 ? 'Complete Case Study' : 'Next Stage'}
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CaseStudy;