/**
 * Simulation Hub Component
 * 
 * Central hub for accessing and selecting simulation scenarios.
 * Provides an organized interface for choosing between different types of
 * software development simulations including:
 * - Traditional SDLC simulations with classic methodologies
 * - AI-augmented SDLC simulations with modern AI integration
 * 
 * Features include:
 * - Type-based filtering of simulation scenarios
 * - Animated scenario cards with hover effects
 * - Progress tracking and difficulty indicators
 * - Navigation integration with URL parameter management
 * - Responsive grid layout for optimal viewing
 */

// React core imports for component functionality
import React, { useState, useEffect, useMemo } from "react"; // Core React hooks for state, effects, and memoization

// Animation library for smooth visual transitions
import { motion } from "framer-motion";                      // Animation components for enhanced UX

// React Router imports for navigation and URL management
import { Link, useNavigate, useParams } from "react-router-dom"; // Navigation components and parameter handling

// Simulation configuration and data imports
import { 
  getAllSimulationScenarios,  // Function to fetch all available simulation scenarios
  SIMULATION_TYPES,           // Constants defining simulation types (SDLC, AI_SDLC)
  simulationNavItems          // Navigation configuration for different simulation types
} from "../constants/simulation/simulationConstants";

// UI component imports
import Menu from "./Menu";                                    // Navigation menu component
import sdlcMenuItems from "../constants/sdlc/menuItems";     // Traditional SDLC navigation items
import aiMenuItems from "../constants/ai-sdlc/aiMenuItems";  // AI-augmented SDLC navigation items
import styles from "../styles/index.js";                     // Centralized styling system

/**
 * SimulationHub Component
 * 
 * Main component for simulation selection and navigation.
 * Manages simulation type filtering and URL synchronization.
 */
const SimulationHub = () => {
  // Extract simulation type from URL parameters
  const { type } = useParams();                                 // Get 'type' parameter from current URL
  
  // State for managing currently selected simulation type
  const [selectedType, setSelectedType] = useState(type || SIMULATION_TYPES.SDLC); // Default to SDLC if no type specified
  
  // Navigation hook for programmatic routing
  const navigate = useNavigate();                               // Hook for navigation control

  /**
   * Effect hook for URL parameter synchronization
   * 
   * Keeps the selected simulation type in sync with the URL parameter.
   * Handles navigation updates when type changes or when no type is specified.
   */
  useEffect(() => {
    // Validate and set simulation type from URL parameter
    if (type && (type === SIMULATION_TYPES.SDLC || type === SIMULATION_TYPES.AI_SDLC)) {
      setSelectedType(type);                        // Update state with valid type from URL
    } else if (!type) {
      // Default to SDLC type and update URL if no type specified
      navigate(`/simulation/${SIMULATION_TYPES.SDLC}`, { replace: true });
    }
  }, [type, navigate]);                             // Re-run when type or navigate function changes
  
  /**
   * Memoized scenarios computation
   * 
   * Efficiently computes and caches the list of scenarios for the selected type.
   * Only recalculates when selectedType changes to optimize performance.
   */
  const scenarios = useMemo(() => {
    const scenarioList = getAllSimulationScenarios(selectedType);
    console.log('Selected type:', selectedType, 'Scenarios count:', scenarioList?.length); // Debug logging
    return scenarioList;
  }, [selectedType]);                               // Dependency: recalculate when selectedType changes
  
  // Get navigation configuration for current simulation type
  const navInfo = simulationNavItems[selectedType];  // Navigation items specific to current type

  // Animation configuration for smooth visual transitions
  // These variants define how elements appear and animate
  
  // Container animation with staggered children for sequential appearance
  const containerVariants = {
    hidden: { opacity: 0 },                          // Initial invisible state
    visible: {
      opacity: 1,                                     // Final visible state
      transition: { staggerChildren: 0.1 }            // Stagger child animations by 0.1s
    }
  };

  // Individual item animation for fade-in with slide up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },                   // Start invisible and 30px below
    visible: { opacity: 1, y: 0 }                    // End visible at normal position
  };

  // Card animation with scale effect for interactive feedback
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },              // Start invisible and smaller
    visible: { 
      opacity: 1,                                     // End visible
      scale: 1,                                       // End at normal size
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const handleScenarioStart = (scenarioId) => {
    navigate(`/simulation/${selectedType}/${scenarioId}`);
  };

  const handleTypeChange = (newType) => {
    console.log('Type change requested:', newType, 'Current type:', selectedType);
    setSelectedType(newType);
    navigate(`/simulation/${newType}`);
  };

  return (
    <div style={styles.simulationHubContainer}>
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 100 }}>
        <Menu items={selectedType === SIMULATION_TYPES.AI_SDLC ? aiMenuItems : sdlcMenuItems} title="Menu" />
      </div>
      <motion.div
        key={selectedType}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 style={styles.simulationHubTitle}>🎯 Project Simulation Hub</h1>
          <p style={styles.simulationHubSubtitle}>
            Experience real-world software development challenges through interactive scenarios.
            Make decisions at each phase and see how they impact your project's success.
          </p>
        </motion.div>

        <motion.div style={styles.simulationTypeSelector} variants={itemVariants}>
          {Object.entries(SIMULATION_TYPES).map(([key, value]) => (
            <motion.button
              key={value}
              style={{
                ...styles.simulationTypeButton,
                ...(selectedType === value ? styles.simulationTypeButtonActive : {})
              }}
              onClick={() => handleTypeChange(value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {simulationNavItems[value].icon} {simulationNavItems[value].title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          key={selectedType} 
          style={styles.simulationGrid} 
          variants={itemVariants}
        >
          {scenarios && scenarios.length > 0 ? (
            scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                style={{
                  ...styles.simulationCard,
                  borderLeft: `5px solid ${scenario.color}`,
                  ...(scenario.type === 'ai-sdlc' ? styles.aiEnhancedCard : {})
                }}
                variants={cardVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              >
                {scenario.type === 'ai-sdlc' && (
                  <div style={styles.aiEnhancedBadge}>🤖 AI</div>
                )}
                <div style={styles.simulationCardIcon}>{scenario.icon}</div>
                <h3 style={styles.simulationCardTitle}>
                  {scenario.title}
                </h3>
                <p style={styles.simulationCardDescription}>
                  {scenario.description}
                </p>

                <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center' }}>
                  💰 ${scenario.initialContext.budget.toLocaleString()} | 
                  ⏰ {scenario.initialContext.timeline} months | 
                  👥 {scenario.initialContext.teamSize} team members
                  {scenario.initialContext.aiEfficiency !== undefined && (
                    <> | 🤖 AI Enhanced</>
                  )}
                </div>

                <motion.button
                  style={{
                    ...styles.simulationStartButton,
                    background: scenario.color
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleScenarioStart(scenario.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Simulation →
                </motion.button>
              </motion.div>
            ))
          ) : (
            <div style={{ 
              textAlign: 'center', 
              color: 'white', 
              fontSize: '1.2rem',
              padding: '2rem'
            }}>
              Loading scenarios for {selectedType}...
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Back to Home Button */}
      <div style={{ position: 'fixed', top: '20px', left: '20px' }}>
        <Link to="/" style={{
          ...styles.homeButton,
          textDecoration: 'none',
          display: 'inline-block'
        }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SimulationHub;