import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import aiDevelopmentStages from "../../constants/ai-sdlc/aiAugmentedSoftwareDevelopment";

import React, { useState } from "react";
import styles from "../../styles/index.js";
import Menu from "../../components/Menu";
import aiMenuItems from "../../constants/ai-sdlc/aiMenuItems";
const AiAugmentedSoftwareDevelopment = () => {
  const [selectedStage, setSelectedStage] = useState(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const stageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { y: 50, opacity: 0 },
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
