import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const SimulationResults = ({ 
  scenario, 
  finalOutcome, 
  decisionHistory, 
  gameContext, 
  onRestart, 
  onReturnToHub 
}) => {
  const navigate = useNavigate();
  const { type } = useParams();

  const handleQuizNavigation = () => {
    navigate(`/drag-drop-quiz/${type}`);
  };

  const handleCaseStudyNavigation = () => {
    navigate(`/case-studies/${type}`);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getOutcomeColor = (score) => {
    if (score >= 85) return '#2ecc71';
    if (score >= 70) return '#f39c12';
    if (score >= 50) return '#e67e22';
    return '#e74c3c';
  };

  const getMetricIcon = (metric) => {
    const icons = {
      budget: '💰',
      timeline: '⏰',
      userSatisfaction: '😊',
      security: '🔒',
      performance: '⚡',
      reputation: '⭐'
    };
    return icons[metric] || '📊';
  };

  return (
    <div style={resultsStyles.container}>
      <motion.div
        style={resultsStyles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Final Outcome Header */}
        <motion.div 
          style={{
            ...resultsStyles.outcomeHeader,
            borderColor: getOutcomeColor(finalOutcome.success)
          }}
          variants={itemVariants}
        >
          <div style={resultsStyles.outcomeTitle}>
            <h1 style={{ color: getOutcomeColor(finalOutcome.success) }}>
              {finalOutcome.title}
            </h1>
            <div style={resultsStyles.outcomeScore}>
              Success Score: {Math.round(finalOutcome.success)}%
            </div>
          </div>
          <p style={resultsStyles.outcomeDescription}>
            {finalOutcome.description}
          </p>
        </motion.div>

        {/* Project Summary */}
        <motion.div style={resultsStyles.summarySection} variants={itemVariants}>
          <h2 style={resultsStyles.sectionTitle}>Project Summary</h2>
          <div style={resultsStyles.summaryGrid}>
            <div style={resultsStyles.summaryCard}>
              <h3>📊 Final Metrics</h3>
              <div style={resultsStyles.metricsDisplay}>
                {Object.entries(gameContext).map(([key, value]) => {
                  if (key === 'teamSize') return null;
                  return (
                    <div key={key} style={resultsStyles.metricRow}>
                      <span style={resultsStyles.metricIcon}>
                        {getMetricIcon(key)}
                      </span>
                      <span style={resultsStyles.metricName}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <span style={resultsStyles.metricValue}>
                        {key === 'budget' 
                          ? `$${value.toLocaleString()}` 
                          : key === 'timeline' 
                          ? `${value} months` 
                          : `${value}%`
                        }
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div style={resultsStyles.summaryCard}>
              <h3>📈 Budget & Timeline</h3>
              <div style={resultsStyles.varianceDisplay}>
                <div style={resultsStyles.varianceItem}>
                  <span>Budget Variance:</span>
                  <span style={{ 
                    color: finalOutcome.budgetVariance <= 0 ? '#2ecc71' : '#e74c3c' 
                  }}>
                    {finalOutcome.budgetVariance > 0 ? '+' : ''}
                    {Math.round(finalOutcome.budgetVariance)}%
                  </span>
                </div>
                <div style={resultsStyles.varianceItem}>
                  <span>Timeline Variance:</span>
                  <span style={{ 
                    color: finalOutcome.timelineVariance <= 0 ? '#2ecc71' : '#e74c3c' 
                  }}>
                    {finalOutcome.timelineVariance > 0 ? '+' : ''}
                    {Math.round(finalOutcome.timelineVariance)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decision Journey */}
        <motion.div style={resultsStyles.journeySection} variants={itemVariants}>
          <h2 style={resultsStyles.sectionTitle}>Your Decision Journey</h2>
          <div style={resultsStyles.timelineContainer}>
            {decisionHistory.map((decision, index) => (
              <motion.div
                key={index}
                style={resultsStyles.timelineItem}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={resultsStyles.timelineMarker}>
                  {index + 1}
                </div>
                <div style={resultsStyles.timelineContent}>
                  <h4 style={resultsStyles.timelineTitle}>
                    {decision.phaseTitle}
                  </h4>
                  <p style={resultsStyles.timelineDecision}>
                    <strong>Decision:</strong> {decision.decisionTitle}
                  </p>
                  <p style={resultsStyles.timelineOutcome}>
                    {decision.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lessons Learned */}
        <motion.div style={resultsStyles.lessonsSection} variants={itemVariants}>
          <h2 style={resultsStyles.sectionTitle}>Key Lessons Learned</h2>
          <div style={resultsStyles.lessonsList}>
            {(finalOutcome.lessons || []).map((lesson, index) => (
              <motion.div
                key={index}
                style={resultsStyles.lessonItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span style={resultsStyles.lessonBullet}>💡</span>
                <span style={resultsStyles.lessonText}>{lesson}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div style={resultsStyles.actionSection} variants={itemVariants}>
          <motion.button
            style={resultsStyles.restartButton}
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔄 Try Again with Different Choices
          </motion.button>
          <motion.button
            style={resultsStyles.hubButton}
            onClick={onReturnToHub}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎯 Choose Different Scenario
          </motion.button>
          <motion.button
            style={resultsStyles.quizButton}
            onClick={handleQuizNavigation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🧩 Test Your Knowledge - Drag & Drop Quiz
          </motion.button>
          <motion.button
            style={resultsStyles.caseStudyButton}
            onClick={handleCaseStudyNavigation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📚 Explore Real-World Case Studies
          </motion.button>
        </motion.div>

        {/* Achievement Badge (for high scores) */}
        {finalOutcome.success >= 85 && (
          <motion.div
            style={resultsStyles.achievementBadge}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
          >
            <div style={resultsStyles.badgeContent}>
              <div style={resultsStyles.badgeIcon}>🏆</div>
              <div style={resultsStyles.badgeText}>
                <div>Outstanding Project Management!</div>
                <div style={resultsStyles.badgeSubtext}>Industry Leader Achievement</div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const resultsStyles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    background: 'linear-gradient(135deg, #0c131b 0%, #1f2a38 50%, #3c4f5e 100%)'
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  outcomeHeader: {
    background: 'rgba(44, 62, 80, 0.95)',
    borderRadius: '12px',
    padding: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    border: '3px solid',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(15px)'
  },
  outcomeTitle: {
    marginBottom: '1rem'
  },
  outcomeScore: {
    fontSize: '1.2rem',
    color: '#bdc3c7',
    marginTop: '0.5rem'
  },
  outcomeDescription: {
    fontSize: '1.1rem',
    color: '#ecf0f1',
    lineHeight: 1.6
  },
  summarySection: {
    marginBottom: '2rem'
  },
  sectionTitle: {
    color: '#1ABC9C',
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    fontWeight: '600',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem'
  },
  summaryCard: {
    background: 'rgba(44, 62, 80, 0.95)',
    borderRadius: '12px',
    padding: '1.25rem',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  metricsDisplay: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  metricRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 0'
  },
  metricIcon: {
    fontSize: '1.2rem',
    width: '1.5rem'
  },
  metricName: {
    flex: 1,
    color: '#bdc3c7'
  },
  metricValue: {
    fontWeight: '600',
    color: '#16A085'
  },
  varianceDisplay: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  varianceItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 0'
  },
  journeySection: {
    marginBottom: '2rem'
  },
  timelineContainer: {
    background: 'rgba(44, 62, 80, 0.95)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  timelineItem: {
    display: 'flex',
    marginBottom: '2rem',
    position: 'relative'
  },
  timelineMarker: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    marginRight: '1.5rem',
    flexShrink: 0
  },
  timelineContent: {
    flex: 1
  },
  timelineTitle: {
    color: '#16A085',
    marginBottom: '0.5rem',
    fontWeight: '600'
  },
  timelineDecision: {
    color: '#ecf0f1',
    marginBottom: '0.5rem'
  },
  timelineOutcome: {
    color: '#bdc3c7',
    fontStyle: 'italic',
    lineHeight: 1.5
  },
  lessonsSection: {
    marginBottom: '2rem'
  },
  lessonsList: {
    background: 'rgba(44, 62, 80, 0.95)',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: '0 8px 32px rgba(26, 188, 156, 0.1)',
    border: '1px solid rgba(26, 188, 156, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  lessonItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
    padding: '1rem',
    background: 'rgba(26, 188, 156, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(26, 188, 156, 0.2)'
  },
  lessonBullet: {
    fontSize: '1.2rem',
    flexShrink: 0
  },
  lessonText: {
    color: '#ecf0f1',
    lineHeight: 1.5
  },
  actionSection: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '2rem'
  },
  restartButton: {
    background: 'linear-gradient(135deg, #1ABC9C 0%, #16A085 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(26, 188, 156, 0.3)'
  },
  hubButton: {
    background: 'linear-gradient(135deg, #4bb1b4ff 0%, #325fa1ff 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(75, 177, 180, 0.3)'
  },
  quizButton: {
    background: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(155, 89, 182, 0.3)'
  },
  caseStudyButton: {
    background: 'linear-gradient(135deg, #E67E22 0%, #D35400 100%)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(230, 126, 34, 0.3)'
  },
  achievementBadge: {
    background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
    borderRadius: '12px',
    padding: '1.5rem',
    textAlign: 'center',
    border: '3px solid #f39c12',
    boxShadow: '0 10px 30px rgba(243, 156, 18, 0.3)'
  },
  badgeContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },
  badgeIcon: {
    fontSize: '3rem'
  },
  badgeText: {
    color: '#795548',
    fontWeight: '600'
  },
  badgeSubtext: {
    fontSize: '0.9rem',
    opacity: 0.8,
    marginTop: '0.25rem'
  }
};

export default SimulationResults;