import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllSimulationScenarios, SIMULATION_TYPES, simulationNavItems } from "../constants/simulation/simulationConstants";
import Menu from "./Menu";
import sdlcMenuItems from "../constants/sdlc/menuItems";
import aiMenuItems from "../constants/ai-sdlc/aiMenuItems";
import styles from "../styles/index.js";

const SimulationHub = () => {
  const { type } = useParams();
  const [selectedType, setSelectedType] = useState(type || SIMULATION_TYPES.SDLC);
  const navigate = useNavigate();

  // Sync selectedType with URL parameter
  useEffect(() => {
    if (type && (type === SIMULATION_TYPES.SDLC || type === SIMULATION_TYPES.AI_SDLC)) {
      setSelectedType(type);
    } else if (!type) {
      // If no type in URL, default to SDLC and update URL
      navigate(`/simulation/${SIMULATION_TYPES.SDLC}`, { replace: true });
    }
  }, [type, navigate]);
  
  const scenarios = useMemo(() => {
    const scenarioList = getAllSimulationScenarios(selectedType);
    console.log('Selected type:', selectedType, 'Scenarios count:', scenarioList?.length);
    return scenarioList;
  }, [selectedType]);
  
  const navInfo = simulationNavItems[selectedType];

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
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