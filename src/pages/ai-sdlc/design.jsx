/**
 * AI-Enhanced Design Phase Educational Page
 * 
 * This advanced learning module demonstrates how artificial intelligence revolutionizes
 * system design through intelligent automation, optimization algorithms, and pattern
 * recognition capabilities that enhance traditional design methodologies.
 * 
 * Educational Components:
 * - Interactive design methodology exploration with AI examples
 * - Detailed demonstrations of AI-powered architecture suggestions
 * - Examples of automated database optimization and API design
 * - Smart UI/UX prototyping with accessibility enhancement
 * - Comprehensive assessment through quizzes and process visualization
 * 
 * AI Design Capabilities Demonstrated:
 * 🏧 AI-driven architecture suggestions based on performance patterns
 * 📊 Automated database schema optimization using usage analytics
 * 🔌 AI-powered API design with auto-documentation generation
 * 🎨 Smart UI/UX prototyping with accessibility optimization
 * 🔒 Predictive security analysis during design phase
 * ⚡ Automated design validation and optimization recommendations
 * 
 * Learning Progression:
 * 1. Introduction to AI-enhanced design concepts and benefits
 * 2. Interactive exploration of AI design tools and methodologies
 * 3. Hands-on assessment to validate design understanding
 * 4. Visual workflow showing AI integration in design process
 * 
 * This page showcases how AI transforms design from manual, experience-based
 * decisions to data-driven, optimized solutions while preserving human creativity.
 */

// === COMPONENT IMPORTS ===
// Navigation and menu system for seamless AI-SDLC phase transitions
import Menu from "../../components/Menu";                      // Dynamic navigation component with AI focus
import aiMenuItems from "../../constants/ai-sdlc/aiMenuItems";  // AI-enhanced navigation structure

// === REACT ECOSYSTEM IMPORTS ===
// Core React functionality for modern component development
import React, { useState } from "react";                        // React hooks for state management
import { motion, AnimatePresence } from "framer-motion";        // Advanced animation library for smooth UX
import { Link, useNavigate } from "react-router-dom";          // React Router for seamless navigation

// === EDUCATIONAL DATA IMPORTS ===
// AI design methodology content and configuration
import { aiDesignSteps, aiDesignTypes, aiDesignDrawbacks } from "../../constants/ai-sdlc/aiDesign"; // AI design process data
import { aiDesignQuiz } from "../../constants/quiz/aiDesignQuiz"; // Assessment questions for AI design concepts

// === INTERACTIVE LEARNING COMPONENTS ===
// Specialized components for enhanced educational experience
import Quiz from "../../components/Quiz";                      // Interactive assessment engine
import ProcessVisualization from "../../components/visualizations/ProcessVisualization"; // Design workflow visualization
import styles from "../../styles/index.js";                   // Comprehensive design system
 
/**
 * AI Design Page Component
 * 
 * Advanced functional component that orchestrates the AI design learning experience
 * with interactive elements, animations, and comprehensive educational content.
 */
const AIDesignPage = () => {
  // === STATE MANAGEMENT FOR INTERACTIVE LEARNING ===
  // Educational section control for tabbed learning experience
  const [activeSection, setActiveSection] = useState("intro");     // Active tab: 'intro', 'steps', 'quiz', 'visualization'
  
  // Modal system for detailed explanations and examples
  const [modalOpen, setModalOpen] = useState(false);              // Modal visibility state
  const [modalData, setModalData] = useState(null);               // Content to display in modal
  
  // Interactive learning elements for enhanced engagement
  const [selectedDrawback, setSelectedDrawback] = useState(null);  // Currently selected AI design challenge
  
  // Navigation system for seamless educational flow
  const navigate = useNavigate();                                  // Programmatic navigation function

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

  return (
    <div style={styles.pageContainer}>
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 100 }}>
        <Menu items={aiMenuItems} title="Menu" />
      </div>
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>
       

      {/* Floating navigation */}
      <div style={styles.floatingNav}>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "intro" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("intro")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🤖
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "visualization" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("visualization")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📊
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "steps" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("steps")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Steps"
        >
          🏗️
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "types" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("types")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Types"
        >
          📖
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "drawbacks" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("drawbacks")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Drawbacks"
        >
          ⚠️
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "joke" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("joke")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          😄
        </motion.button>

        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "quiz" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("quiz")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Quiz"
        >
          🧠
        </motion.button>
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
                🤖✨
              </motion.div>

              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                AI-Augmented Design
              </motion.h1>

              <motion.p style={styles.subtitle} variants={itemVariants}>
                Creative software design supercharged by artificial intelligence
              </motion.p>

              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is AI-Augmented Design?</h2>
                <p style={styles.cardText}>
                  AI-augmented design leverages machine learning to optimize architecture, automate database modeling, generate APIs, and create user-centric UI/UX. It helps teams design smarter, faster, and with fewer errors.
                </p>
                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🤖</span>
                    <span>Suggests optimal system structures and user flows</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>📊</span>
                    <span>Automates wireframes, diagrams, and documentation</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⚡</span>
                    <span>Identifies security risks and design flaws early</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🧠</span>
                    <span>Continuously improves design with user feedback</span>
                  </div>
                </div>
              </motion.div>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("visualization")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View AI Process Visualization →
              </motion.button>
            </motion.div>
          )}

          {/* VISUALIZATION SECTION */}
          {activeSection === "visualization" && (
            <motion.div
              key="visualization"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              <ProcessVisualization stage="design" isAI={true} />
              
              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("steps")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore AI Design Steps →
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
                6 Essential AI Design Steps
              </motion.h1>

              <div style={styles.stepsGrid}>
                {aiDesignSteps.map((step, index) => (
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
                  💡 <strong>Tip:</strong> Use AI to iterate and validate your designs with real user data and feedback.
                </p>
              </motion.div>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("types")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See AI Design Types →
              </motion.button>
            </motion.div>
          )}

          {/* DESIGN TYPES WITH STORIES */}
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
                AI Design Approaches: Successes & Pitfalls
              </motion.h1>

              <div style={styles.typesContainer}>
                {aiDesignTypes.map((type, index) => (
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
                          setModalData({
                            name: type.name,
                            failure: type.story.failure,
                            fix: type.story.fix,
                            color: type.color,
                          });
                          setModalOpen(true);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {"🔍 What Went Wrong?"}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                          {modalData?.failure}
                        </p>
                      </div>
                      <div style={styles.modalFix}>
                        <h5 style={styles.modalFixTitle}>The Fix:</h5>
                        <p style={styles.modalFixText}>{modalData?.fix}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("drawbacks")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Common AI Pitfalls →
              </motion.button>
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
                Major AI Design Drawbacks & Their Resolutions
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Even the smartest AI can stumble. Here’s how to avoid common design pitfalls:
              </motion.p>
              <div style={styles.drawbacksGrid}>
                {aiDesignDrawbacks.map((drawback, index) => (
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
                Need an AI Laugh? →
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
                  😂
                </motion.div>

                <h2 style={styles.jokeTitle}>AI Design Humor Break!</h2>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: Why did the AI designer always win awards?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    A: Because their designs were always optimized for user delight! 🤖🎨
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: How many AI architects does it take to scale a system?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    A: None. The AI just auto-scales everything! 🏗️🤖
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    A stakeholder tells an AI designer: "I want a UI that's unique but instantly familiar."
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    The designer: "So... you want creative conformity? Got it! I'll just add that to my paradoxical design goals." 😅🤖
                  </motion.p>
                </div>

                <motion.div
                  style={styles.wisdomBox}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                >
                  <p style={styles.wisdomText}>
                    💭 <em>"AI is a design partner, not a replacement for human creativity."</em>
                  </p>
                  <p style={styles.wisdomExplanation}>
                    Use AI to enhance your design process, but always keep humans in the loop!
                  </p>
                </motion.div>

                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => setActiveSection("intro")}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏠 Back to Start
                  </motion.button>
                  
                  <motion.button
                    style={styles.actionButton}
                    onClick={() => setActiveSection("quiz")}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Test Knowledge 🧠
                  </motion.button>

                  <motion.button
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/ai-implementation")}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(78, 205, 196, 0.3)",
                        "0 10px 30px rgba(69, 183, 209, 0.4)",
                        "0 10px 30px rgba(78, 205, 196, 0.3)",
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
                    Next: Implementation 🤖✨
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* QUIZ SECTION */}
          {activeSection === "quiz" && (
            <motion.div
              key="quiz"
              style={styles.section}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div style={styles.cardContainer} variants={itemVariants}>
                <motion.div
                  style={{
                    fontSize: "clamp(4rem, 8vw, 8rem)",
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  🧠
                </motion.div>
                <h2 style={styles.sectionTitle}>Test Your Knowledge!</h2>
                <p style={styles.sectionSubtitle}>
                  Let's see how well you understand AI-Augmented Design concepts.
                </p>
                
                <Quiz questions={aiDesignQuiz} />
                
                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => setActiveSection("intro")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏠 Back to Start
                  </motion.button>
                  <motion.button
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/ai-implementation")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(150, 206, 180, 0.3)",
                        "0 10px 30px rgba(255, 234, 167, 0.4)",
                        "0 10px 30px rgba(150, 206, 180, 0.3)",
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
                    Next: Implementation 🤖✨
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {["🤖", "🏗️", "📝", "💡", "✨"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
};

export default AIDesignPage;
