import React, { useState } from 'react';
import styles from '../styles/index.js';

const Quiz = ({ questions }) => {
  const [selected, setSelected] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  const handleSelect = (qIdx, optIdx) => {
    setSelected({ ...selected, [qIdx]: optIdx });
    setShowFeedback({ ...showFeedback, [qIdx]: true });
  };

  return (
    <div style={styles.quizContainer}>
      {questions.map((q, qIdx) => (
        <div key={qIdx} style={styles.quizQuestionBlock}>
          <div style={styles.quizQuestion}>{q.question}</div>
          <ul style={styles.quizOptions}>
            {q.options.map((opt, optIdx) => (
              <li key={optIdx}>
                <button
                  style={selected[qIdx] === optIdx ? 
                    {...styles.quizOptionBtn, ...styles.quizOptionBtnSelected} : 
                    styles.quizOptionBtn}
                  onClick={() => handleSelect(qIdx, optIdx)}
                  disabled={showFeedback[qIdx]}
                >
                  {opt.text}
                </button>
              </li>
            ))}
          </ul>
          {showFeedback[qIdx] && (
            <div style={q.options[selected[qIdx]].correct 
              ? {...styles.quizFeedback, ...styles.quizFeedbackCorrect}
              : {...styles.quizFeedback, ...styles.quizFeedbackIncorrect}}>
              {q.options[selected[qIdx]].correct ? '✅ Correct!' : '❌ Incorrect.'}
              <div style={styles.quizExplanation}>{q.options[selected[qIdx]].explanation}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
