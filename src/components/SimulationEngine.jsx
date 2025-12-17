import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllSimulationScenarios, getCalculationFunction, SIMULATION_TYPES } from "../constants/simulation/simulationConstants";
import DecisionChoice from "./DecisionChoice";
import OutcomeTracker from "./OutcomeTracker";
import SimulationResults from "./SimulationResults";
import Menu from "./Menu";
import sdlcMenuItems from "../constants/sdlc/menuItems";
import aiMenuItems from "../constants/ai-sdlc/aiMenuItems";
import styles from "../styles/index.js";

const SimulationEngine = () => {
  const { type, scenarioId } = useParams();
  const navigate = useNavigate();
  
  // Find the current scenario from all scenarios
  const allScenarios = getAllSimulationScenarios();
  const scenario = allScenarios.find(s => s.id === scenarioId);
  const calculationFunction = getCalculationFunction(scenario?.type);
  
  // Simulation state
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [gameContext, setGameContext] = useState(scenario?.initialContext || {});
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [finalOutcome, setFinalOutcome] = useState(null);
  const [showPhaseIntro, setShowPhaseIntro] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  useEffect(() => {
    if (!scenario) {
      navigate('/simulation');
      return;
    }
    
    // Reset simulation state when scenario changes
    setCurrentPhaseIndex(0);
    setGameContext(scenario.initialContext);
    setDecisionHistory([]);
    setIsComplete(false);
    setFinalOutcome(null);
    setShowPhaseIntro(true);
  }, [scenarioId, scenario, navigate]);

  const handleDecision = (decision) => {
    const currentPhase = scenario.phases[currentPhaseIndex];
    
    // Apply consequences to game context
    const newContext = { ...gameContext };
    Object.keys(decision.consequences).forEach(key => {
      if (key !== 'nextPhase' && key !== 'outcome' && newContext.hasOwnProperty(key)) {
        newContext[key] = Math.max(0, Math.min(100, newContext[key] + decision.consequences[key]));
      }
    });

    // Update decision history
    const newDecision = {
      phaseId: currentPhase.id,
      phaseTitle: currentPhase.title,
      decisionId: decision.id,
      decisionTitle: decision.title,
      consequences: decision.consequences,
      outcome: decision.consequences.outcome
    };

    const newHistory = [...decisionHistory, newDecision];
    
    setGameContext(newContext);
    setDecisionHistory(newHistory);

    // Move to next phase or complete simulation
    if (currentPhaseIndex < scenario.phases.length - 1) {
      setCurrentPhaseIndex(currentPhaseIndex + 1);
      setShowPhaseIntro(true);
    } else {
      // Simulation complete
      const outcome = calculationFunction(newContext, decisionHistory);
      setFinalOutcome(outcome);
      setIsComplete(true);
    }
  };

  const restartSimulation = () => {
    setCurrentPhaseIndex(0);
    setGameContext(scenario.initialContext);
    setDecisionHistory([]);
    setIsComplete(false);
    setFinalOutcome(null);
    setShowPhaseIntro(true);
  };

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