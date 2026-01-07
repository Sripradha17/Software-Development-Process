/**
 * Interactive Simulation Engine Component
 * 
 * A comprehensive simulation system that guides users through software development scenarios.
 * Features include:
 * - Multi-phase decision-making scenarios
 * - Real-time context tracking (budget, timeline, quality metrics)
 * - Animated transitions between phases
 * - Dynamic outcome calculation based on decisions
 * - Comprehensive decision history tracking
 * - Restart and navigation functionality
 * 
 * The simulation engine supports both traditional SDLC and AI-augmented workflows,
 * providing immersive learning experiences with realistic project challenges.
 */

// React core imports for component functionality
import React, { useState, useEffect } from "react";         // Core React hooks for state and lifecycle management

// Animation library for smooth transitions and visual feedback
import { motion, AnimatePresence } from "framer-motion";    // Advanced animation components and utilities

// React Router imports for navigation and URL parameter handling
import { Link, useParams, useNavigate } from "react-router-dom"; // Navigation components and hooks

// Simulation configuration and business logic imports
import { 
  getAllSimulationScenarios,    // Fetches all available simulation scenarios
  getCalculationFunction,       // Gets outcome calculation function for scenario type
  SIMULATION_TYPES             // Constants defining available simulation types
} from "../constants/simulation/simulationConstants";

// Interactive component imports for simulation functionality
import DecisionChoice from "./DecisionChoice";           // Renders individual decision options with consequences
import OutcomeTracker from "./OutcomeTracker";           // Displays real-time context metrics (budget, timeline, etc.)
import SimulationResults from "./SimulationResults";     // Shows final simulation outcomes and analysis
import Menu from "./Menu";                               // Navigation menu component

// Menu configuration imports
import sdlcMenuItems from "../constants/sdlc/menuItems";         // Traditional SDLC navigation items
import aiMenuItems from "../constants/ai-sdlc/aiMenuItems";       // AI-augmented SDLC navigation items

// Styling configuration
import styles from "../styles/index.js";                          // Centralized styling system

/**
 * Main Simulation Engine Component
 * 
 * Orchestrates the entire simulation experience from scenario loading to final results.
 * Manages complex state including phase progression, decision tracking, and outcome calculation.
 */
const SimulationEngine = () => {
  // Extract URL parameters for scenario identification
  const { type, scenarioId } = useParams();    // Get simulation type and specific scenario ID from URL
  const navigate = useNavigate();               // Navigation hook for programmatic routing
  
  // Load and validate current scenario data
  const allScenarios = getAllSimulationScenarios();                    // Fetch all available scenarios
  const scenario = allScenarios.find(s => s.id === scenarioId);        // Find current scenario by ID
  const calculationFunction = getCalculationFunction(scenario?.type);   // Get appropriate outcome calculator
  
  // Core simulation state management
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);        // Current phase in the simulation (0-based index)
  const [gameContext, setGameContext] = useState(scenario?.initialContext || {}); // Dynamic metrics (budget, timeline, quality, etc.)
  const [decisionHistory, setDecisionHistory] = useState([]);           // Complete record of user decisions and their impacts
  const [isComplete, setIsComplete] = useState(false);                  // Flag indicating simulation completion
  const [finalOutcome, setFinalOutcome] = useState(null);               // Final calculated results and analysis
  const [showPhaseIntro, setShowPhaseIntro] = useState(true);           // Controls display of phase introduction content

  // Animation configuration for smooth transitions and visual feedback
  // These variants define how elements appear, animate, and disappear
  
  // Container animation for staggered child element animations
  const containerVariants = {
    hidden: { opacity: 0 },                           // Initial invisible state
    visible: {
      opacity: 1,                                      // Final visible state
      transition: { staggerChildren: 0.1 }            // Stagger child animations by 0.1s
    }
  };

  // Individual item animation for fade-in with slide up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },                    // Start invisible and 20px below
    visible: { opacity: 1, y: 0 }                     // End visible at normal position
  };

  // Slide transition for phase changes (horizontal sliding effect)
  const slideVariants = {
    enter: { x: 300, opacity: 0 },                    // Enter from right side, invisible
    center: { x: 0, opacity: 1 },                     // Center position, fully visible
    exit: { x: -300, opacity: 0 }                     // Exit to left side, invisible
  };

  /**
   * Effect hook for scenario initialization and validation
   * 
   * Handles:
   * - Scenario existence validation
   * - State reset when scenario changes
   * - Navigation to scenario selection if scenario not found
   */
  useEffect(() => {
    // Redirect to simulation hub if scenario doesn't exist
    if (!scenario) {
      navigate('/simulation');
      return;
    }
    
    // Reset all simulation state when scenario changes (ensures clean start)
    setCurrentPhaseIndex(0);                          // Start at first phase
    setGameContext(scenario.initialContext);          // Reset metrics to initial values
    setDecisionHistory([]);                           // Clear previous decision history
    setIsComplete(false);                             // Mark as not completed
    setFinalOutcome(null);                            // Clear any previous final outcome
    setShowPhaseIntro(true);                          // Show phase introduction for new scenario
  }, [scenarioId, scenario, navigate]);               // Re-run effect when these dependencies change

  /**
   * Handles user decision selection and applies consequences
   * 
   * This is the core simulation logic that:
   * 1. Updates game context based on decision consequences
   * 2. Records decision in history for final analysis
   * 3. Progresses to next phase or completes simulation
   * 
   * @param {Object} decision - Selected decision object with consequences
   */
  const handleDecision = (decision) => {
    const currentPhase = scenario.phases[currentPhaseIndex];
    
    // Apply decision consequences to game context (budget, timeline, quality metrics)
    const newContext = { ...gameContext };
    Object.keys(decision.consequences).forEach(key => {
      // Skip special consequence keys and only update numeric context values
      if (key !== 'nextPhase' && key !== 'outcome' && newContext.hasOwnProperty(key)) {
        // Clamp values between 0 and 100 to maintain valid ranges
        newContext[key] = Math.max(0, Math.min(100, newContext[key] + decision.consequences[key]));
      }
    });

    // Create comprehensive decision record for history tracking
    const newDecision = {
      phaseId: currentPhase.id,                        // Identify which phase this decision was made in
      phaseTitle: currentPhase.title,                  // Human-readable phase name
      decisionId: decision.id,                         // Unique decision identifier
      decisionTitle: decision.title,                   // Human-readable decision description
      consequences: decision.consequences,             // Full consequence data for analysis
      outcome: decision.consequences.outcome           // Immediate outcome description
    };

    // Update state with new context and decision history
    const newHistory = [...decisionHistory, newDecision];
    
    setGameContext(newContext);                        // Apply context changes
    setDecisionHistory(newHistory);                    // Record decision

    // Determine next step: continue to next phase or complete simulation
    if (currentPhaseIndex < scenario.phases.length - 1) {
      // Move to next phase
      setCurrentPhaseIndex(currentPhaseIndex + 1);
      setShowPhaseIntro(true);                         // Show introduction for new phase
    } else {
      // All phases completed - calculate final outcome
      const outcome = calculationFunction(newContext, decisionHistory);
      setFinalOutcome(outcome);                        // Store calculated results
      setIsComplete(true);                             // Mark simulation as complete
    }
  };

  /**
   * Resets the simulation to initial state
   * Allows users to retry the scenario with different decisions
   */
  const restartSimulation = () => {
    setCurrentPhaseIndex(0);                          // Return to first phase
    setGameContext(scenario.initialContext);          // Reset all metrics
    setDecisionHistory([]);                           // Clear decision history
    setIsComplete(false);                             // Mark as not completed
    setFinalOutcome(null);                            // Clear final outcome
    setShowPhaseIntro(true);                          // Show first phase intro
  };

  /**
   * Navigates back to the main simulation selection hub
   */
  const goToScenarioSelect = () => {
    navigate('/simulation');
  };

  if (!scenario) {
    return (
      <div style={styles.container}>
        <div style={styles.loadingContainer}>
          <h2>Scenario not found</h2>
          <Link to="/simulation" style={styles.button}>
            Return to Simulation Hub
          </Link>
        </div>
      </div>
    );
  }

  const currentPhase = scenario.phases[currentPhaseIndex];

  return (
    <div style={styles.simulationEngineContainer}>
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 100 }}>
        <Menu items={scenario?.type === SIMULATION_TYPES.AI_SDLC ? aiMenuItems : sdlcMenuItems} title="Menu" />
      </div>
      <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 100 }}>
        <Link to="/" style={{
          ...styles.homeButton,
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          ← Back to Home
        </Link>
      </div>
      <motion.div
        style={styles.simulationEngineHeader}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 style={styles.simulationEngineTitle}>
            {scenario.icon} {scenario.title}
            {scenario.type === 'ai-sdlc' && (
              <span style={styles.aiIndicator}>🤖 AI Enhanced</span>
            )}
          </h1>
          <p style={styles.simulationEnginePhase}>
            Phase {currentPhaseIndex + 1} of {scenario.phases.length}: {currentPhase.title}
          </p>
        </motion.div>

      </motion.div>

      <div style={styles.simulationEngineContent}>
        <div style={{flex: 2}}>
          <AnimatePresence mode="wait">
        {isComplete && finalOutcome ? (
          <SimulationResults
            key="results"
            scenario={scenario}
            finalOutcome={finalOutcome}
            decisionHistory={decisionHistory}
            gameContext={gameContext}
            onRestart={restartSimulation}
            onReturnToHub={goToScenarioSelect}
          />
        ) : showPhaseIntro ? (
          <motion.div
            key="phase-intro"
            style={styles.phaseIntroContainer}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div style={styles.phaseIntroContent}>
              <h2 style={styles.phaseTitle}>
                Phase {currentPhaseIndex + 1}: {currentPhase.title}
              </h2>
              <div style={styles.phaseScenario}>
                <p>{currentPhase.scenario}</p>
              </div>
              {currentPhase.currentStatus && (
                <div style={styles.currentStatus}>
                  <div style={styles.statusImage}>{currentPhase.currentStatus.image}</div>
                  <p>{currentPhase.currentStatus.description}</p>
                </div>
              )}
              <motion.button
                style={styles.proceedButton}
                onClick={() => setShowPhaseIntro(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Make Your Decision →
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <DecisionChoice
            key="decision"
            phase={currentPhase}
            decisions={currentPhase.decisions}
            onDecision={handleDecision}
            gameContext={gameContext}
            phaseNumber={currentPhaseIndex + 1}
          />
        )}
          </AnimatePresence>
        </div>
        
        <div style={{flex: 1}}>
          <OutcomeTracker 
            context={gameContext}
            initialContext={scenario.initialContext}
            currentPhase={currentPhaseIndex}
            totalPhases={scenario.phases.length}
          />
        </div>
      </div>
    </div>
  );
};

export default SimulationEngine;