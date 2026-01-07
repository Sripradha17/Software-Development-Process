/**
 * Interactive Case Study Component
 * 
 * Provides immersive, real-world software development case studies with:
 * - Multi-stage interactive scenarios based on actual industry projects
 * - Progressive revelation of challenges and solutions
 * - Multiple-choice questions testing understanding at each stage
 * - Comprehensive scoring and performance tracking
 * - Detailed explanations and learning outcomes
 * - Support for both traditional and AI-augmented development approaches
 * 
 * Case studies help bridge the gap between theoretical knowledge and
 * practical application in real software development environments.
 */

// React core imports for component functionality
import React, { useState, useEffect } from 'react';         // Core React hooks for state and lifecycle management

// Animation library for smooth transitions and visual feedback
import { motion, AnimatePresence } from 'framer-motion';    // Advanced animation components for enhanced UX

// React Router imports for navigation and parameter handling
import { Link, useParams, useNavigate } from 'react-router-dom'; // Navigation components and URL parameter access

// UI component imports
import Menu from './Menu';                                           // Navigation menu component
import sdlcMenuItems from '../constants/sdlc/menuItems';            // Traditional SDLC navigation items
import aiMenuItems from '../constants/ai-sdlc/aiMenuItems';         // AI-augmented SDLC navigation items

// Case study data imports
import { sdlcCaseStudies, caseStudyConfig } from '../constants/caseStudy/sdlcCaseStudies';       // Traditional SDLC case studies
import { aiSdlcCaseStudies, aiCaseStudyConfig } from '../constants/caseStudy/aiSdlcCaseStudies'; // AI-augmented case studies

// Styling configuration
import styles from '../styles/index';                               // Centralized styling system

/**
 * CaseStudy Component
 * 
 * Main component for interactive case study experiences.
 * Manages progression through case study stages, tracks user responses,
 * and provides comprehensive feedback and scoring.
 */
const CaseStudy = () => {
  // Extract case study type and ID from URL parameters
  const { type, caseId } = useParams();     // 'sdlc' or 'ai-sdlc' type, and specific case study ID
  const navigate = useNavigate();           // Navigation hook for programmatic routing
  
  // Select appropriate data sources based on case study type
  const caseStudies = type === 'ai-sdlc' ? aiSdlcCaseStudies : sdlcCaseStudies;    // Case study data array
  const config = type === 'ai-sdlc' ? aiCaseStudyConfig : caseStudyConfig;         // Configuration settings
  const menuItems = type === 'ai-sdlc' ? aiMenuItems : sdlcMenuItems;              // Navigation menu items
  
  // Find the specific case study by ID
  const caseStudy = caseStudies.find(cs => cs.id === caseId);                      // Current case study object
  
  // Component state management for interactive case study experience
  const [currentStageIndex, setCurrentStageIndex] = useState(0);       // Current stage in the case study progression
  const [selectedAnswer, setSelectedAnswer] = useState(null);          // Currently selected answer option
  const [showExplanation, setShowExplanation] = useState(false);       // Flag to show/hide answer explanation
  const [userAnswers, setUserAnswers] = useState({});                  // Record of all user answers by stage
  const [showResults, setShowResults] = useState(false);               // Flag to display final results summary
  const [score, setScore] = useState(0);                               // Calculated score based on correct answers
  const [caseStudyCompleted, setCaseStudyCompleted] = useState(false); // Completion status flag

  // Animation configuration for smooth transitions and visual feedback
  // These variants define how elements appear, animate, and transition
  
  // Main container animation with staggered children for sequential appearance
  const containerVariants = {
    hidden: { opacity: 0 },                          // Initial invisible state
    visible: {
      opacity: 1,                                     // Final visible state
      transition: {
        duration: 0.3,                                // Total animation duration
        staggerChildren: 0.2,                        // Delay between child animations
        delayChildren: 0.1                           // Initial delay before starting child animations
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