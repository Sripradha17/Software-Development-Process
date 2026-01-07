/**
 * Decision Choice Component
 * 
 * Interactive decision-making interface for simulation scenarios.
 * Allows users to choose between different options during simulation phases,
 * with features including:
 * - Multiple decision options with detailed descriptions
 * - Impact preview on hover showing consequence summaries
 * - Two-step decision process (select then confirm) to prevent accidental choices
 * - Animated consequence visualization with detailed impact breakdown
 * - Context-aware decision presentation based on current game state
 * - Visual feedback and confirmation flow for better user experience
 * 
 * This component is central to the simulation learning experience,
 * helping students understand the consequences of different choices
 * in software development scenarios.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.phase - Current simulation phase information
 * @param {Array} props.decisions - Available decision options for this phase
 * @param {Function} props.onDecision - Callback when user confirms a decision
 * @param {Object} props.gameContext - Current simulation context (budget, timeline, etc.)
 * @param {number} props.phaseNumber - Current phase number for display
 */

// React core imports for component functionality
import React, { useState } from "react";            // Core React with state management

// Animation library for smooth transitions and visual feedback
import { motion, AnimatePresence } from "framer-motion"; // Advanced animation components

// Styling configuration
import styles from "../styles/index.js";             // Centralized styling system

/**
 * DecisionChoice Component
 * 
 * Manages the decision-making flow during simulation phases.
 * Provides interactive choice selection with consequence preview.
 */
const DecisionChoice = ({ phase, decisions, onDecision, gameContext, phaseNumber }) => {
  // State management for decision selection and confirmation flow
  const [selectedDecision, setSelectedDecision] = useState(null);    // Currently selected decision option
  const [showConsequences, setShowConsequences] = useState(false);   // Flag to show consequence details
  const [hoveredDecision, setHoveredDecision] = useState(null);      // Decision being hovered for preview

  // Animation configuration for smooth decision selection flow
  // These variants define how decision options and consequences appear
  
  // Main container animation with staggered decision options
  const containerVariants = {
    hidden: { opacity: 0 },                          // Initial invisible state
    visible: {
      opacity: 1,                                     // Final visible state
      transition: { staggerChildren: 0.15 }           // Stagger decision option animations
    }
  };

  // Individual decision option animation with slide-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },                   // Start invisible and below final position
    visible: { opacity: 1, y: 0 }                    // End visible at normal position
  };

  // Consequence panel animation with spring effect for engagement
  const consequenceVariants = {
    hidden: { opacity: 0, scale: 0.8 },              // Start invisible and smaller
    visible: { 
      opacity: 1,                                     // End visible
      scale: 1,                                       // End at normal size
      transition: { type: "spring", stiffness: 300, damping: 20 } // Spring animation for smooth appearance
    },
    exit: { opacity: 0, scale: 0.8 }                 // Exit animation when hiding consequences
  };

  /**
   * Handles decision selection (first step of two-step process)
   * 
   * @param {Object} decision - Selected decision object with consequences
   */
  const handleDecisionSelect = (decision) => {
    setSelectedDecision(decision);                    // Store selected decision
    setShowConsequences(true);                        // Show consequence preview
  };

  /**
   * Handles decision confirmation (second step - final commit)
   * Calls parent callback to apply decision and proceed with simulation
   */
  const handleConfirmDecision = () => {
    if (selectedDecision) {
      onDecision(selectedDecision);                   // Apply decision and continue simulation
    }
  };

  /**
   * Handles returning to decision selection (cancel confirmation)
   * Allows users to change their mind before final commitment
   */
  const handleBackToChoices = () => {
    setSelectedDecision(null);                        // Clear selected decision
    setShowConsequences(false);                       // Hide consequence panel
  };

  /**
   * Calculate impact preview for hover effect
   * Provides quick preview of decision consequences on hover
   * 
   * @param {Object} consequences - Decision consequences object
   * @returns {Array} Array of impact summaries for display
   */
  const getImpactPreview = (consequences) => {
    const impacts = [];
    Object.keys(consequences).forEach(key => {
      if (key !== 'nextPhase' && key !== 'outcome' && gameContext.hasOwnProperty(key)) {
        const change = consequences[key];
        if (change !== 0) {
          impacts.push({
            metric: key.charAt(0).toUpperCase() + key.slice(1),
            change: change,
            color: change > 0 ? '#27ae60' : '#e74c3c'
          });
        }
      }
    });
    return impacts;
  };

  const getMetricIcon = (metric) => {
    const icons = {
      Budget: '💰',
      Timeline: '⏰',
      UserSatisfaction: '😊',
      Security: '🔒',
      Performance: '⚡',
      Reputation: '⭐'
    };
    return icons[metric] || '📊';
  };

  return (
    <div style={styles.decisionChoiceContainer}>
      <AnimatePresence mode="wait">
        {!showConsequences ? (
          <motion.div
            key="choices"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div variants={itemVariants}>
              <h2 style={styles.phaseTitle}>Phase {phaseNumber}: {phase.title}</h2>
              <p style={styles.simulationEnginePhase}>What's your approach?</p>
            </motion.div>

            <div style={styles.decisionsGrid}>
              {decisions.map((decision, index) => {
                const impactPreview = getImpactPreview(decision.consequences);
                const isHovered = hoveredDecision === decision.id;

                return (
                  <motion.div
                    key={decision.id}
                    style={{
                      ...styles.decisionCard,
                      transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                      boxShadow: isHovered 
                        ? '0 15px 35px rgba(0,0,0,0.1)' 
                        : '0 5px 15px rgba(0,0,0,0.08)'
                    }}
                    variants={itemVariants}
                    custom={index}
                    onClick={() => handleDecisionSelect(decision)}
                    onMouseEnter={() => setHoveredDecision(decision.id)}
                    onMouseLeave={() => setHoveredDecision(null)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div style={styles.decisionHeader}>
                      <h3 style={styles.decisionTitle}>{decision.title}</h3>
                    </div>
                    
                    <p style={styles.decisionDescription}>
                      {decision.description}
                    </p>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          style={styles.impactPreview}
                          variants={consequenceVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <h4 style={styles.impactTitle}>Expected Impact:</h4>
                          <div style={styles.impactList}>
                            {impactPreview.map((impact, idx) => (
                              <div key={idx} style={styles.impactItem}>
                                <span style={styles.impactIcon}>
                                  {getMetricIcon(impact.metric)}
                                </span>
                                <span style={styles.impactText}>
                                  {impact.metric}
                                </span>
                                <span 
                                  style={{
                                    ...styles.impactChange,
                                    color: impact.color
                                  }}
                                >
                                  {impact.change > 0 ? '+' : ''}{impact.change}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="consequences"
            style={styles.consequencesContainer}
            variants={consequenceVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div style={styles.selectedDecision}>
              <h2 style={styles.selectedTitle}>Your Choice</h2>
              <div style={styles.selectedCard}>
                <h3>{selectedDecision.title}</h3>
                <p>{selectedDecision.description}</p>
              </div>
            </div>

            <div style={styles.outcomeSection}>
              <h3 style={styles.outcomeTitle}>Immediate Outcome</h3>
              <div style={styles.outcomeText}>
                {selectedDecision.consequences.outcome}
              </div>
            </div>

            <div style={styles.metricsChanges}>
              <h3 style={styles.metricsTitle}>Project Impact</h3>
              <div style={styles.metricsGrid}>
                {getImpactPreview(selectedDecision.consequences).map((impact, index) => (
                  <motion.div
                    key={index}
                    style={styles.metricChange}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span style={styles.metricIcon}>
                      {getMetricIcon(impact.metric)}
                    </span>
                    <div style={styles.metricDetails}>
                      <span style={styles.metricName}>{impact.metric}</span>
                      <span 
                        style={{
                          ...styles.metricValue,
                          color: impact.color
                        }}
                      >
                        {impact.change > 0 ? '+' : ''}{impact.change}
                      </span>
                    </div>
                    <div 
                      style={{
                        ...styles.metricBar,
                        background: impact.color
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={styles.actionButtons}>
              <motion.button
                style={styles.backButton}
                onClick={handleBackToChoices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Choose Different Option
              </motion.button>
              <motion.button
                style={styles.confirmButton}
                onClick={handleConfirmDecision}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Confirm Decision →
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DecisionChoice;