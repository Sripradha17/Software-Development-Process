/**
 * Traditional Software Development Learning Hub
 * 
 * Central learning hub for traditional Software Development Life Cycle (SDLC) education.
 * This page provides comprehensive access to all traditional SDLC phases and
 * related learning materials.
 * 
 * Key Features:
 * - Interactive stage overview with detailed phase descriptions
 * - Visual stage progression showing the traditional SDLC workflow
 * - Navigation to individual phase pages with comprehensive content
 * - Animated stage cards with hover effects and engagement features
 * - Educational content emphasizing fundamental software development principles
 * - Integration with quizzes, simulations, and case studies
 * 
 * The page serves as the foundation for students learning classical
 * software development methodologies before progressing to advanced
 * or AI-augmented approaches.
 */

// React core imports for component functionality
import React, { useState, useEffect } from "react";        // Core React hooks for state and lifecycle management

// Animation library for smooth visual transitions
import { motion, AnimatePresence } from "framer-motion";   // Advanced animation components for enhanced UX

// React Router imports for navigation and routing
import { useNavigate, Link } from "react-router-dom";      // Navigation components and programmatic routing

// Styling and configuration imports
import styles from "../../styles/index.js";               // Centralized styling system
import developmentStages from "../../constants/sdlc/learnSoftwareDevelopment"; // Traditional SDLC stage definitions

// UI component imports
import Menu from "../../components/Menu";                  // Navigation menu component
import sdlcMenuItems from "../../constants/sdlc/menuItems"; // Traditional SDLC navigation items

/**
 * LearnSoftwareDevelopment Component
 * 
 * Main hub page for traditional SDLC learning experiences.
 * Provides overview and navigation to classic development phases.
 */
const LearnSoftwareDevelopment = () => {
  // State management for interactive stage selection and presentation
  const [selectedStage, setSelectedStage] = useState(null); // Currently selected/highlighted stage
  const [exploredStages, setExploredStages] = useState(new Set()); // Stages the visitor has opened this session
  const navigate = useNavigate();                           // Navigation hook for programmatic routing

  const handleSelectStage = (stage) => {
    setSelectedStage(stage);
    setExploredStages((prev) => new Set(prev).add(stage.id));
  };

  // Animation configuration for engaging visual presentation
  // These variants create professional, smooth transitions that enhance the educational experience
  
  // Main container animation with staggered children for organized content appearance
  const containerVariants = {
    hidden: { opacity: 0 },                                  // Initial invisible state
    visible: {
      opacity: 1,                                             // Final visible state
      transition: { duration: 0.8, staggerChildren: 0.2 },   // Smooth entrance with staggered children animation
    },
  };

  // Page title animation with slide-down effect for strong visual impact
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },                          // Start above viewport, invisible
    visible: {
      y: 0,                                                   // End at normal position
      opacity: 1,                                             // End visible
      transition: { duration: 0.8, ease: "easeOut" },        // Smooth easing for professional presentation
    },
  };

  // Description text animation with slide-up effect for content revelation
  const descriptionVariants = {
    hidden: { y: 30, opacity: 0 },                           // Start below viewport, invisible
    visible: {
      y: 0,                                                   // End at normal position
      opacity: 1,                                             // End visible
      transition: { duration: 0.6, delay: 0.3 },             // Delayed entrance for sequential presentation
    },
  };

  // Stage card animation with scale effect for interactive engagement
  const stageVariants = {
    hidden: { scale: 0, opacity: 0 },                        // Start small and invisible
    visible: {
      scale: 1,                                               // End at normal size
      opacity: 1,                                             // End visible
      transition: { duration: 0.5, ease: "easeOut" },        // Smooth scale animation for engagement
    },
  };

  // Button animation with slide-up effect for action emphasis
  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },                           // Start below viewport, invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 1 },
    },

    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const backgroundParticles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      style={{
        ...styles.backgroundParticle,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ));

  // Use shared SDLC menu items that include simulation
  const menuItems = sdlcMenuItems;
  return (
    <motion.div
      style={{...styles.softwareDevIntro, ...styles.responsiveContainer}}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div style={styles.absoluteTopRight}>
        <Menu items={menuItems} title="Menu" />
      </div>
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>
      {backgroundParticles}
      <div style={styles.contentWrapper}>
        <motion.h1 style={styles.mainTitle} variants={titleVariants}>
          Intro to Software Development
        </motion.h1>

        <motion.div
          style={styles.descriptionSection}
          variants={descriptionVariants}
        >
          <p style={styles.mainDescription}>
            Software development is a systematic process of creating, designing,
            deploying, and supporting software applications. It involves a
            series of interconnected phases that transform an idea into a
            functional software product. Each stage plays a crucial role in
            ensuring the final product meets user requirements and maintains
            high quality standards.
          </p>
        </motion.div>

        <motion.p
          variants={descriptionVariants}
          style={{
            color: "rgba(255, 255, 255, 0.75)",
            fontSize: "0.95rem",
            marginBottom: "1.5rem",
          }}
        >
          {exploredStages.size === 0
            ? "Tap a stage to learn what happens in it."
            : `You've explored ${exploredStages.size} of ${developmentStages.length} stages.`}
        </motion.p>

        <motion.div style={styles.stagesContainer}>
          {developmentStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              style={{
                ...styles.stageWrapper,
                zIndex: 10,
                width: "120px",
                height: "120px",
              }}
              variants={stageVariants}
              custom={index}
              onClick={() => handleSelectStage(stage)}
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                key="circle"
                style={{
                  ...styles.stageCircle,
                  backgroundColor: stage.color,
                  outline: exploredStages.has(stage.id)
                    ? "2px solid rgba(255, 255, 255, 0.8)"
                    : "none",
                  outlineOffset: "3px",
                }}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    selectedStage && selectedStage.id !== stage.id ? 0.6 : 1,
                }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <span style={styles.circleTitle}>{stage.title}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal below the circles */}
        <AnimatePresence>
          {selectedStage && (
            <motion.div
              key="modal"
              style={styles.modalBelowContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
            >
              <motion.div
                style={styles.modalContainer}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  style={styles.modalCloseBtn}
                  onClick={() => setSelectedStage(null)}
                  aria-label="Close"
                >
                  ×
                </button>
                <h3 style={styles.cardTitle}>{selectedStage.title}</h3>
                <p style={styles.cardDescription}>
                  {selectedStage.description}
                </p>
                <motion.button
                  style={{
                    marginTop: "1.5rem",
                    padding: "0.65rem 1.4rem",
                    borderRadius: "999px",
                    border: "1px solid #38b2ac",
                    background: "linear-gradient(135deg, #38b2ac, #2c7a7b)",
                    color: "#e2e8f0",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/${selectedStage.id}`)}
                >
                  Go to {selectedStage.title} →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          style={styles.storyButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/story")}
        >
          <motion.span
            style={styles.storyButtonSpan}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Let me tell you a story
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};
export default LearnSoftwareDevelopment;
