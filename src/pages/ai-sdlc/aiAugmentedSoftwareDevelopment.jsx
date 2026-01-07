/**
 * AI-Augmented Software Development Hub Page
 * 
 * Central learning hub for AI-enhanced software development processes.
 * This page introduces students to modern development workflows that
 * integrate artificial intelligence tools and methodologies.
 * 
 * Key Features:
 * - Interactive stage selection with detailed AI enhancement information
 * - Visual comparison between traditional and AI-augmented approaches
 * - Navigation to specific AI-SDLC phase pages
 * - Animated stage cards with hover effects and detailed descriptions
 * - Comprehensive overview of AI tools and their applications in each phase
 * 
 * The page serves as the main entry point for students interested in
 * learning about cutting-edge, AI-powered development practices that
 * are transforming the software industry.
 */

// Animation library for smooth visual transitions and interactive effects
import { motion, AnimatePresence } from "framer-motion";    // Advanced animation components for enhanced UX

// React Router imports for navigation between pages
import { Link, useNavigate } from "react-router-dom";       // Navigation components and programmatic routing

// AI-SDLC configuration data import
import aiDevelopmentStages from "../../constants/ai-sdlc/aiAugmentedSoftwareDevelopment"; // AI-enhanced stage definitions

// React core imports for component functionality
import React, { useState } from "react";                   // Core React with state management

// Styling and UI component imports
import styles from "../../styles/index.js";                // Centralized styling system
import Menu from "../../components/Menu";                   // Navigation menu component
import aiMenuItems from "../../constants/ai-sdlc/aiMenuItems"; // AI-specific navigation items

/**
 * AiAugmentedSoftwareDevelopment Component
 * 
 * Main hub page for AI-augmented SDLC learning experiences.
 * Provides overview and navigation to AI-enhanced development phases.
 */
const AiAugmentedSoftwareDevelopment = () => {
  // State management for interactive stage selection
  const [selectedStage, setSelectedStage] = useState(null); // Currently selected/highlighted stage
  const navigate = useNavigate();                           // Navigation hook for programmatic routing

  // Animation configuration for engaging visual presentation
  // These variants create smooth, professional transitions that enhance the learning experience
  
  // Main container animation with staggered children for sequential appearance
  const containerVariants = {
    hidden: { opacity: 0 },                                  // Initial invisible state
    visible: {
      opacity: 1,                                             // Final visible state
      transition: { duration: 0.8, staggerChildren: 0.2 },   // Smooth entrance with staggered children
    },
  };

  // Page title animation with slide-down effect for dramatic entrance
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },                          // Start above viewport, invisible
    visible: {
      y: 0,                                                   // End at normal position
      opacity: 1,                                             // End visible
      transition: { duration: 0.8, ease: "easeOut" },        // Smooth easing for professional feel
    },
  };

  // Description text animation with slide-up effect for content reveal
  const descriptionVariants = {
    hidden: { y: 30, opacity: 0 },                           // Start below viewport, invisible
    visible: {
      y: 0,                                                   // End at normal position
      opacity: 1,                                             // End visible
      transition: { duration: 0.6, delay: 0.3 },             // Delayed entrance after title
    },
  };

  // Stage card animation with scale effect for engaging presentation
  const stageVariants = {
    hidden: { scale: 0, opacity: 0 },                        // Start small and invisible
    visible: {
      scale: 1,                                               // End at normal size
      opacity: 1,                                             // End visible
      transition: { duration: 0.5, ease: "easeOut" },        // Smooth scale animation
    },
  };

  // Button animation with slide-up effect for call-to-action emphasis
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

  // AI SDLC menu items
  const menuItems = aiMenuItems;

  return (
    <motion.div
      style={{ ...styles.softwareDevIntro, ...styles.responsiveContainer }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 100 }}>
        <Menu items={menuItems} title="Menu" />
      </div>
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>
      {backgroundParticles}
      <div style={styles.contentWrapper}>
        <motion.h1 style={styles.mainTitle} variants={titleVariants}>
          AI Augmented Software Development
        </motion.h1>
        <motion.div
          style={styles.descriptionSection}
          variants={descriptionVariants}
        >
          <p style={styles.mainDescription}>
            AI-augmented software development integrates artificial intelligence
            tools and techniques into the traditional software development
            lifecycle. It enhances productivity, automates repetitive tasks, and
            provides intelligent insights throughout each stage, from planning
            to maintenance.
          </p>
        </motion.div>
        <motion.div style={styles.stagesContainer}>
          {aiDevelopmentStages.map((stage, index) => (
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
              onClick={() => setSelectedStage(stage)}
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                key="circle"
                style={{
                  ...styles.stageCircle,
                  backgroundColor: stage.color,
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          style={styles.storyButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/ai-augmented-story")}
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
export default AiAugmentedSoftwareDevelopment;
