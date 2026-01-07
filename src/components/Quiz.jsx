/**
 * Interactive Quiz Component
 * 
 * A comprehensive quiz interface that handles multiple-choice questions with:
 * - Real-time feedback after answer selection
 * - Color-coded correct/incorrect responses
 * - Detailed explanations for learning reinforcement
 * - Prevention of answer changes after selection
 * 
 * @param {Object} props - Component props
 * @param {Array} props.questions - Array of question objects with structure:
 *   - question: {string} The question text
 *   - options: {Array} Array of option objects with:
 *     - text: {string} Option display text
 *     - correct: {boolean} Whether this option is correct
 *     - explanation: {string} Feedback explanation text
 */

// React imports for component functionality
import React, { useState } from 'react';     // Core React with state management
import styles from '../styles/index.js';     // Centralized styling configuration

/**
 * Quiz Component
 * 
 * Renders an interactive quiz with immediate feedback and explanations.
 * Manages selection state and feedback visibility per question.
 */
const Quiz = ({ questions }) => {
  // State for tracking selected answers for each question (indexed by question index)
  const [selected, setSelected] = useState({});        // Stores selected option index for each question
  
  // State for controlling feedback visibility (prevents multiple submissions)
  const [showFeedback, setShowFeedback] = useState({}); // Boolean flags for showing feedback per question

  /**
   * Handles answer selection for a question
   * 
   * @param {number} qIdx - Index of the question being answered
   * @param {number} optIdx - Index of the selected option
   */
  const handleSelect = (qIdx, optIdx) => {
    // Update selected answer for this question
    setSelected({ ...selected, [qIdx]: optIdx });
    
    // Show feedback immediately after selection (prevents re-answering)
    setShowFeedback({ ...showFeedback, [qIdx]: true });
  };

  return (
    // Main quiz container with custom styling
    <div style={styles.quizContainer}>
      {/* Conditional rendering based on questions array validity */}
      {Array.isArray(questions) ? questions.map((q, qIdx) => (
        // Individual question block
        <div key={qIdx} style={styles.quizQuestionBlock}>
          {/* Question text display */}
          <div style={styles.quizQuestion}>{q.question}</div>
          
          {/* Options list for current question */}
          <ul style={styles.quizOptions}>
            {q.options.map((opt, optIdx) => (
              <li key={optIdx}>
                <button
                  // Dynamic styling based on selection state
                  style={selected[qIdx] === optIdx ? 
                    {...styles.quizOptionBtn, ...styles.quizOptionBtnSelected} :  // Selected option styling
                    styles.quizOptionBtn}                                          // Default option styling
                  onClick={() => handleSelect(qIdx, optIdx)}  // Handle option selection
                  disabled={showFeedback[qIdx]}               // Disable after feedback shown
                >
                  {opt.text}  {/* Option display text */}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Conditional feedback display after answer selection */}
          {showFeedback[qIdx] && (
            <div style={q.options[selected[qIdx]].correct 
              ? {...styles.quizFeedback, ...styles.quizFeedbackCorrect}      // Green styling for correct
              : {...styles.quizFeedback, ...styles.quizFeedbackIncorrect}}   // Red styling for incorrect
            >
              {/* Correct/Incorrect indicator with emoji */}
              {q.options[selected[qIdx]].correct ? '✅ Correct!' : '❌ Incorrect.'}
              
              {/* Detailed explanation for learning */}
              <div style={styles.quizExplanation}>
                {q.options[selected[qIdx]].explanation}
              </div>
            </div>
          )}
        </div>
      )) : (
        // Fallback message when no questions are available
        <div style={styles.quizQuestion}>No quiz questions available.</div>
      )}
    </div>
  );
};

export default Quiz;
