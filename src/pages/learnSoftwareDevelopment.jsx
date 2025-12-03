import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import developmentStages from "./constants/learnSoftwareDevelopment";
import styles from "./styles";

const LearnSoftwareDevelopment = () => {
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

  return (
    <motion.div
      style={{ ...styles.softwareDevIntro, ...styles.responsiveContainer }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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

        <motion.div style={styles.stagesContainer}>
          {developmentStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              style={{
                ...styles.stageWrapper,
                zIndex: selectedStage === stage.id ? 100 : 10,

                width: selectedStage === stage.id ? "280px" : "120px",
                height: selectedStage === stage.id ? "200px" : "120px",
              }}
              variants={stageVariants}
              custom={index}
              onClick={() =>
                setSelectedStage(selectedStage === stage.id ? null : stage.id)
              }
              layout
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {selectedStage === stage.id ? (
                  <motion.div
                    key="card"
                    style={{
                      ...styles.stageCard,
                      backgroundColor: stage.color,
                      borderRadius: "12px",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={styles.cardContent}>
                      <h3 style={styles.cardTitle}>{stage.title}</h3>
                      <p style={styles.cardDescription}>{stage.description}</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="circle"
                    style={{
                      ...styles.stageCircle,
                      backgroundColor: stage.color,
                    }}
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity:
                        selectedStage && selectedStage !== stage.id ? 0.6 : 1,
                    }}
                    exit={{ opacity: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <span style={styles.circleTitle}>{stage.title}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

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
