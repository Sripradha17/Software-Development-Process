import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { reviewSteps, reviewTypes, drawbacks } from "./constants/review";
import styles from "./styles";

const ReviewPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedDrawback, setSelectedDrawback] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  // Helper for navigation items
  const navItems = [
    { key: "intro", icon: "📊" },
    { key: "steps", icon: "🔄" },
    { key: "types", icon: "📖" },
    { key: "drawbacks", icon: "⚠" },
    { key: "joke", icon: "😄" },
  ];

  return (
    <div style={styles.pageContainer}>
      <Link to="/maintenance" style={styles.backLink}>
        ← Back to Maintenance
      </Link>
      {/* Floating navigation */}
      <div style={styles.floatingNav}>
        {navItems.map((item) => (
          <motion.button
            key={item.key}
            style={{
              ...styles.navItem,
              ...(activeSection === item.key && styles.navItemActive),
            }}
            onClick={() => setActiveSection(item.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
          </motion.button>
        ))}
      </div>
      <div style={styles.contentContainer}>
        <AnimatePresence mode="wait">
          {/* INTRO SECTION */}
          {activeSection === "intro" && (
            <motion.div
              key="intro"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div style={styles.heroIcon} animate={floatAnimation}>
                📝 ✨
              </motion.div>
              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                Review in Software Development
              </motion.h1>
              <motion.p style={styles.subtitle} variants={itemVariants}>
                Learning and Continuous Improvement
              </motion.p>
              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is Review?</h2>
                <p style={styles.cardText}>
                  Review is the <strong>quality assurance process</strong> of
                  verifying that software works as expected, meets requirements,
                  and is free from defects. It involves executing code with
                  various inputs to identify bugs, validate functionality, and
                  ensure the product delivers value to users reliably and
                  safely.
                </p>
                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🐞</span>
                    <span>Identifies bugs before they reach users</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🔄</span>
                    <span>Validates functionality meets requirements</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⚡</span>
                    <span>Ensures performance and scalability</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🛡️</span>
                    <span>Builds confidence in code changes</span>
                  </div>
                </div>
              </motion.div>
              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("steps")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Key Steps →
              </motion.button>
            </motion.div>
          )}
          {/* STEPS SECTION */}
          {activeSection === "steps" && (
            <motion.div
              key="steps"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.h1 style={styles.sectionTitle} variants={itemVariants}>
                6 Essential Review Steps
              </motion.h1>
              <div style={styles.stepsGrid}>
                {reviewSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    style={{
                      ...styles.stepCard,
                      borderLeft: `5px solid ${step.color}`,
                    }}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    custom={index}
                  >
                    <div style={styles.stepNumber}>{step.id}</div>
                    <div style={styles.stepIcon}>{step.icon}</div>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    <p style={styles.stepDescription}>{step.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div style={styles.stepFlow} variants={itemVariants}>
                <p style={styles.flowText}>
                  💡 <strong>Remember:</strong> Review is not just about finding
                  bugs—it's about building confidence. Good review catches
                  issues early when they're cheap to fix, validates that
                  features work as intended, and gives you the confidence to
                  ship with pride.
                </p>
              </motion.div>
              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("types")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Review Approaches →
              </motion.button>
            </motion.div>
          )}
          {/* TYPES SECTION */}
          {activeSection === "types" && (
            <motion.div
              key="types"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.h1 style={styles.sectionTitle} variants={itemVariants}>
                Review Approaches: Maximizing Learning
              </motion.h1>
              <div style={styles.typesContainer}>
                {reviewTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    style={styles.typeCard}
                    variants={itemVariants}
                    custom={index}
                  >
                    <div
                      style={{ ...styles.typeHeader, background: type.color }}
                    >
                      <span style={styles.typeEmoji}>{type.emoji}</span>
                      <h3 style={styles.typeName}>{type.name}</h3>
                    </div>
                    <div style={styles.typeContent}>
                      <h4 style={styles.storyTitle}>{type.story.title}</h4>
                      <p style={styles.storyScenario}>{type.story.scenario}</p>
                      <motion.button
                        style={{
                          ...styles.revealButton,
                          background: type.color,
                        }}
                        onClick={() => {
                          setModalData(type);
                          setModalOpen(true);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        🔍 What Went Wrong?
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("drawbacks")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Common Pitfalls →
              </motion.button>
              {/* Modal for What Went Wrong? */}
              <AnimatePresence>
                {modalOpen && (
                  <motion.div
                    style={styles.modalOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      style={{
                        ...styles.modalContainer,
                        background: modalData?.color || "#4bb1b4ff",
                      }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <button
                        style={{
                          ...styles.modalCloseBtn,
                          color: modalData?.color || "#4bb1b4ff",
                        }}
                        onClick={() => setModalOpen(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <h3 style={styles.modalTitle}>
                        {modalData?.name} – What Went Wrong?
                      </h3>
                      <div style={styles.modalFailure}>
                        <h5 style={styles.modalFailureTitle}>The Failure:</h5>
                        <p style={styles.modalFailureText}>
                          {modalData?.story.failure}
                        </p>
                      </div>
                      <div style={styles.modalFix}>
                        <h5 style={styles.modalFixTitle}>The Fix:</h5>
                        <p style={styles.modalFixText}>
                          {modalData?.story.fix}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {/* DRAWBACKS SECTION */}
          {activeSection === "drawbacks" && (
            <motion.div
              key="drawbacks"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.h1 style={styles.sectionTitle} variants={itemVariants}>
                Common Review Pitfalls
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Review is crucial, but many teams struggle with it. Here are
                common challenges and their solutions.
              </motion.p>
              <div style={styles.drawbacksGrid}>
                {drawbacks.map((drawback, index) => (
                  <motion.div
                    key={drawback.id}
                    style={styles.drawbackTypeCard}
                    variants={itemVariants}
                    custom={index}
                  >
                    <div style={styles.drawbackTypeHeader}>
                      <span style={styles.drawbackTypeEmoji}>
                        {drawback.icon}
                      </span>
                      <h3 style={styles.drawbackTypeName}>{drawback.title}</h3>
                    </div>
                    <div style={styles.drawbackTypeContent}>
                      <h4 style={styles.drawbackTypeTitle}>The Problem</h4>
                      <p style={styles.drawbackTypeScenario}>
                        {drawback.problem}
                      </p>
                      <motion.button
                        style={styles.drawbackRevealButton}
                        onClick={() =>
                          setSelectedDrawback(
                            selectedDrawback === drawback.id
                              ? null
                              : drawback.id
                          )
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {selectedDrawback === drawback.id
                          ? "Hide Solution"
                          : "💡 Show Solution"}
                      </motion.button>
                      <AnimatePresence>
                        {selectedDrawback === drawback.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <div style={styles.drawbackFailureBox}>
                              <h5 style={styles.drawbackFailureTitle}>
                                The Failure:
                              </h5>
                              <p style={styles.drawbackFailureText}>
                                {drawback.problem}
                              </p>
                            </div>
                            <div style={styles.drawbackFixBox}>
                              <h5 style={styles.drawbackFixTitle}>The Fix:</h5>
                              <p style={styles.drawbackFixText}>
                                {drawback.resolution}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("joke")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take a Break with Some Humor →
              </motion.button>
            </motion.div>
          )}
          {/* JOKE SECTION */}
          {activeSection === "joke" && (
            <motion.div
              key="joke"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <motion.div style={styles.jokeContainer} variants={itemVariants}>
                <motion.div
                  style={styles.jokeIcon}
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  😄
                </motion.div>
                <h2 style={styles.jokeTitle}>Code Review Humor Break!</h2>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Why did the developer love code reviews?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Because it’s the only time their bugs get constructive
                    feedback!
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    How many reviewers does it take to change a lightbulb?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    None. They just suggest better ways to do it and open a
                    ticket.
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Why did the code reviewer bring a ladder to work?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    To help raise the code quality!
                  </motion.p>
                </div>
                <motion.div
                  style={styles.wisdomBox}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p style={styles.wisdomText}>
                    💡 Review Wisdom: "Code review is not about finding
                    mistakes, it's about learning and improving together."
                  </p>
                  <p style={styles.wisdomExplanation}>
                    Share knowledge, ask questions, and celebrate improvements!
                  </p>
                </motion.div>
                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏠 Home
                  </motion.button>
                  <motion.button
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 6px 25px rgba(102, 126, 234, 0.3)",
                        "0 6px 25px rgba(118, 75, 162, 0.5)",
                        "0 6px 25px rgba(102, 126, 234, 0.3)",
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    Complete! 🎉
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Background particles */}
      {/* Background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {["📊", "🔄", "🔍", "🐞", "🛡️", "⚡"][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewPage;
