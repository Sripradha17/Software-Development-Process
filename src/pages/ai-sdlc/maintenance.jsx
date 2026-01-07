 /**
 * AI-Enhanced Maintenance Phase Educational Page
 * 
 * Comprehensive learning module that demonstrates how artificial intelligence
 * revolutionizes software maintenance through predictive analytics, automated
 * optimization, and intelligent issue resolution.
 * 
 * AI Maintenance Concepts Covered:
 * - Predictive maintenance using advanced system health analytics
 * - Automated performance optimization and intelligent tuning
 * - AI-powered bug triage and intelligent priority assignment
 * - Smart user feedback analysis and automated feature prioritization
 * - Intelligent dependency management and proactive vulnerability detection
 * - Automated documentation updates based on real-time code changes
 * 
 * Interactive Learning Components:
 * - Tabbed interface for exploring different AI maintenance aspects
 * - Animated demonstrations of predictive maintenance workflows
 * - Interactive quiz to validate AI maintenance methodology understanding
 * - Process visualization showing intelligent maintenance pipeline
 * - Real-world examples of AI operations tools and automation platforms
 * 
 * Educational Philosophy:
 * - Shows how AI transforms reactive maintenance to proactive optimization
 * - Demonstrates intelligent system health monitoring and self-healing capabilities
 * - Teaches AI-assisted decision making for maintenance prioritization
 * - Illustrates evolution from manual maintenance to predictive system care
 * 
 * Key Learning Concepts:
 * - AI enables systems to self-monitor, self-optimize, and self-heal
 * - Machine learning identifies patterns that predict system failures
 * - Intelligent automation reduces maintenance overhead and improves reliability
 * - AI-powered analytics provide actionable insights for continuous improvement
 * 
 * This page shows students how AI changes maintenance from costly, time-consuming
 * reactive work to efficient, predictive system optimization that enhances
 * user experience while reducing operational costs.
 */

// Essential component and navigation imports
import Menu from "../../components/Menu";                      // Navigation component for AI-SDLC phase management
import aiMenuItems from "../../constants/ai-sdlc/aiMenuItems";  // AI-enhanced navigation structure

// React functionality and routing imports
import React, { useState } from "react";                        // React with state hooks for interactive functionality
import { motion, AnimatePresence } from "framer-motion";        // Animation library for smooth transitions and effects
import { Link, useNavigate } from "react-router-dom";          // React Router for navigation between AI-enhanced phases
import { aiMaintenanceSteps, aiMaintenanceTypes, aiMaintenanceDrawbacks } from "../../constants/ai-sdlc/aiMaintenance";
import { aiMaintenanceQuiz } from "../../constants/quiz/aiMaintenanceQuiz";
import Quiz from "../../components/Quiz";
import ProcessVisualization from "../../components/visualizations/ProcessVisualization";
import styles from "../../styles/index.js";
 

const AIMaintenancePage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [selectedDrawback, setSelectedDrawback] = useState(null);
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
          🛠️
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
          🧰
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
                🤖🛠️
              </motion.div>

              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                Maintenance Phase with AI
              </motion.h1>

              <motion.p style={styles.subtitle} variants={itemVariants}>
                Maintain, optimize, and secure your software with artificial intelligence
              </motion.p>

              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is AI-Augmented Maintenance?</h2>
                <p style={styles.cardText}>
                  AI-augmented maintenance uses machine learning to monitor systems, detect bugs, optimize performance, and manage technical debt. It helps teams keep software running smoothly, securely, and efficiently.
                </p>
                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🤖</span>
                    <span>Automates bug detection and fixes</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>📊</span>
                    <span>Monitors health and predicts issues</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⚡</span>
                    <span>Optimizes performance proactively</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🧠</span>
                    <span>Manages technical debt and security</span>
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
                Explore AI Maintenance Steps →
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
                6 Essential AI Maintenance Steps
              </motion.h1>

              <div style={styles.stepsGrid}>
                {aiMaintenanceSteps.map((step, index) => (
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
                  💡 <strong>Tip:</strong> Use AI to automate routine maintenance, but always review critical changes manually.
                </p>
              </motion.div>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("types")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See AI Maintenance Types →
              </motion.button>
            </motion.div>
          )}

          {/* MAINTENANCE TYPES WITH STORIES */}
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
                AI Maintenance Approaches: Successes & Pitfalls
              </motion.h1>

              <div style={styles.typesContainer}>
                {aiMaintenanceTypes.map((type, index) => (
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
                Major AI Maintenance Drawbacks & Their Resolutions
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Even the smartest AI can stumble. Here’s how to avoid common maintenance pitfalls:
              </motion.p>
              <div style={styles.drawbacksGrid}>
                {aiMaintenanceDrawbacks.map((drawback, index) => (
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

                <h2 style={styles.jokeTitle}>AI Maintenance Humor Break!</h2>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: Why did the AI maintenance bot never panic?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    A: Because it always had a patch ready! 🤖🩹
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: How does AI fix bugs?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    A: With predictive debugging and infinite optimism! 🐞🤖
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    A manager asks the AI: "Can you guarantee zero bugs?"
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    AI: "I can guarantee zero panic!" 😅🤖
                  </motion.p>
                </div>

                <motion.div
                  style={styles.wisdomBox}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                >
                  <p style={styles.wisdomText}>
                    💭 <em>"AI is a maintenance partner, not a replacement for human insight."</em>
                  </p>
                  <p style={styles.wisdomExplanation}>
                    Use AI to automate and accelerate maintenance, but always keep humans in the loop!
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
                    onClick={() => navigate("/ai-review")}
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
                    Next: Review 🤖✨
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
                  Let's see how well you understand AI-Augmented Maintenance concepts.
                </p>
                
                <Quiz questions={aiMaintenanceQuiz} />
                
                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => setActiveSection("intro")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏠 Back to Start
                  </motion.button>
                </div>
                
                <div style={styles.completionSection}>
                  <motion.div
                    style={styles.congratsMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 style={styles.congratsTitle}>🎉 Congratulations!</h3>
                    <p style={styles.congratsText}>
                      You've completed all stages of the AI-Augmented Software Development Process!
                      Now put your knowledge to the test with interactive AI-enhanced project simulations.
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
                      style={styles.simulationButton}
                      onClick={() => navigate("/simulation/ai-sdlc")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 6px 25px rgba(26, 188, 156, 0.3)",
                          "0 6px 25px rgba(22, 160, 133, 0.5)",
                          "0 6px 25px rgba(26, 188, 156, 0.3)",
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
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        🤖 Try AI-Enhanced Simulations
                      </motion.span>
                    </motion.button>
                  </div>
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
          {["🤖", "🛠️", "🧰", "💡", "✨"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
};

export default AIMaintenancePage;
