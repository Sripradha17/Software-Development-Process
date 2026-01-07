/**
 * Traditional SDLC Analysis Phase Educational Page
 * 
 * Comprehensive learning module that teaches classical requirements analysis
 * methodologies in software development. This interactive page guides students
 * through systematic approaches to understanding and documenting requirements.
 * 
 * Learning Content Covered:
 * - Stakeholder identification and engagement strategies
 * - Requirements gathering techniques and best practices
 * - Current state analysis and documentation methods
 * - Gap analysis frameworks and methodologies
 * - Feasibility assessment across multiple dimensions
 * - Requirements prioritization using established frameworks
 * 
 * Interactive Components:
 * - Tabbed interface for different learning sections (intro, steps, quiz)
 * - Animated step-by-step breakdown of analysis activities
 * - Interactive quiz to test understanding of analysis concepts
 * - Process visualization showing analysis workflow
 * - Modal dialogs for detailed explanations of key concepts
 * 
 * Educational Flow:
 * 1. Introduction section with analysis overview and importance
 * 2. Detailed steps section with interactive exploration
 * 3. Assessment section with quiz to validate learning
 * 4. Process visualization to understand workflow integration
 * 
 * This foundation prepares students for AI-enhanced analysis approaches
 * taught in the corresponding AI-SDLC section.
 */

// Component imports for page functionality
import Menu from "../../components/Menu";                      // Navigation component for SDLC phases
import sdlcMenuItems from "../../constants/sdlc/menuItems";    // Traditional SDLC navigation configuration
import React, { useState } from "react";                        // React with state management for interactivity
import { motion, AnimatePresence } from "framer-motion";        // Animation library for smooth transitions and modal effects
import { Link, useNavigate } from "react-router-dom";          // React Router for navigation and linking

// Data imports for educational content
import { analysisSteps, analysisTypes, drawbacks } from "../../constants/sdlc/analysis"; // Analysis phase configuration and content
import { analysisQuiz } from "../../constants/quiz/analysisQuiz"; // Quiz questions for assessment

// Component imports for interactive features
import Quiz from "../../components/Quiz";                      // Interactive assessment component
import ProcessVisualization from "../../components/visualizations/ProcessVisualization"; // Workflow visualization component
import styles from "../../styles/index.js";                   // Styling configuration and theme
 
/**
 * Traditional Analysis Page Component
 * 
 * Main functional component that renders the traditional analysis educational experience.
 * Orchestrates interactive learning through tabbed content, modals, and animations.
 */
const AnalysisPage = () => {
  // === STATE MANAGEMENT FOR EDUCATIONAL INTERFACE ===
  // Controls different sections of the learning experience
  const [activeSection, setActiveSection] = useState("intro");     // Current active tab: 'intro', 'steps', 'quiz'
  
  // Modal system for detailed explanations and in-depth content
  const [modalOpen, setModalOpen] = useState(false);              // Controls modal visibility for detailed views
  const [modalData, setModalData] = useState(null);               // Stores data to display in modal dialogs
  
  // Interactive elements for enhanced learning engagement
  const [selectedDrawback, setSelectedDrawback] = useState(null);  // Currently selected analysis challenge or pitfall
  
  // Navigation system for educational flow management
  const navigate = useNavigate();                                  // React Router navigation for phase transitions

  // === ANIMATION CONFIGURATIONS FOR SMOOTH UX ===
  // Framer Motion variants for professional page transitions
  
  // Container animation: Controls overall page reveal with staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },                                       // Initial invisible state
    visible: {
      opacity: 1,                                              // Final fully visible state
      transition: { staggerChildren: 0.1 },                    // Children appear 0.1s apart for smooth flow
    },
  };

  // Individual item animation: Controls how each educational element appears
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },                            // Start 20px below and transparent
    visible: {
      y: 0,                                                    // Move to natural position
      opacity: 1,                                              // Fade in to full opacity
      transition: { duration: 0.3 },                          // Smooth 0.3s transition
    },
  };

  // Floating animation: Creates engaging hover effects for interactive elements
  const floatAnimation = {
    y: [0, -10, 0],                                             // Gentle up-down floating motion
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }, // Continuous smooth floating
  };

  // === MAIN COMPONENT RENDER ===
  // JSX structure with educational content and interactive learning elements
  return (
    <div style={styles.pageContainer}>                         {/* Main page container with full styling */}
      {/* === NAVIGATION MENU SECTION === */}
      {/* Fixed-position menu for easy navigation between SDLC phases */}
      <div style={{ position: "absolute", top: 20, right: 30, zIndex: 100 }}>
        <Menu items={sdlcMenuItems} title="Menu" />              {/* Traditional SDLC navigation menu */}
      </div>
      {/* === BACK TO HOME NAVIGATION === */}
      {/* Quick access link to return to main platform homepage */}
      <Link to="/" style={styles.backLink}>
        ← Back to Home                                           {/* Simple text link with arrow indicator */}
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
          🔍
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
          📊
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
                🔍✨
              </motion.div>

              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                {" "}
                Analysis Phase
              </motion.h1>

              <motion.p style={styles.subtitle} variants={itemVariants}>
                {" "}
                Understanding the Problem Before Building the Solution
              </motion.p>

              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is Analysis Phase?</h2>
                <p style={styles.cardText}>
                  The Analysis phase is the foundation of successful software development, where we 
                  deeply understand the problem domain, user needs, business context, and technical 
                  constraints. It's about asking the right questions to ensure you're building the{" "}
                  <em>right thing</em>, not just building things right.
                </p>
                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🎯</span>
                    <span>Uncovers hidden requirements and assumptions</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>💡</span>
                    <span>Identifies root causes, not just symptoms</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🔗</span>
                    <span>
                      Bridges communication between business and tech teams
                    </span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⚡</span>
                    <span>Prevents building solutions nobody needs</span>
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
                View Process Visualization →
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
              <ProcessVisualization stage="analysis" isAI={false} />
              
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
                {" "}
                Analysis Steps
              </motion.h1>

              <div style={styles.stepsGrid}>
                {analysisSteps.map((step, index) => (
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
                  💡 <strong>Remember:</strong> Analysis is like detective work
                  - you're gathering clues, interviewing witnesses
                  (stakeholders), and piecing together the full picture before
                  making your case (solution).
                </p>
              </motion.div>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("types")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Analysis Types →
              </motion.button>
            </motion.div>
          )}

          {/* ANALYSIS TYPES WITH STORIES */}
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
                {" "}
                Types of Analysis
              </motion.h1>

              <div style={styles.typesContainer}>
                {analysisTypes.map((type, index) => (
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
                      <h4 style={styles.storyTitle}>{type.story?.title}</h4>
                      <p style={styles.storyScenario}>{type.story?.scenario}</p>
                      <motion.button
                        style={{
                          ...styles.revealButton,
                          background: type.color,
                        }}
                        onClick={() => {
                          setModalData({
                            name: type.name,
                            failure: type.story?.failure,
                            fix: type.story?.fix,
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
                Common Pitfalls →
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
                Potential Challenges
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Even the best analysis has pitfalls. Here's how to overcome
                them:
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
                Need a Laugh? →
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

                <h2 style={styles.jokeTitle}>Analysis Humor Break!</h2>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: Why did the business analyst bring a ladder to work?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    A: To reach the high-level requirements! 🪜📋
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: How many requirements analysts does it take to change a
                    light bulb?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    A: First, we need to analyze the current lighting situation,
                    interview stakeholders about their illumination needs,
                    create a feasibility study for bulb replacement, and then...
                    wait, what was the question? 💡🤔
                  </motion.p>
                </div>

                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    A user tells an analyst: "I want it exactly like our
                    competitor's product, but completely different."
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    The analyst: "So... you want a unique copy? Got it! Let me
                    just add that to my collection of impossible requirements."
                    😅📝
                  </motion.p>
                </div>

                <motion.div
                  style={styles.wisdomBox}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                >
                  <p style={styles.wisdomText}>
                    💭{" "}
                    <em>
                      "If I had an hour to solve a problem, I'd spend 55 minutes
                      analyzing it and 5 minutes solving it."
                    </em>{" "}
                    - Albert Einstein
                  </p>
                  <p style={styles.wisdomExplanation}>
                    Thorough analysis isn't slowing you down - it's speeding you
                    up by ensuring you solve the right problem the first time!
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
                    onClick={() => navigate("/design")}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(69, 183, 209, 0.3)",
                        "0 10px 30px rgba(150, 206, 180, 0.4)",
                        "0 10px 30px rgba(69, 183, 209, 0.3)",
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
                    Next: Design 🎨✨
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
                <h2 style={styles.sectionTitle}>Test Your Knowledge</h2>
                <p style={styles.sectionSubtitle}>
                  Let's see how well you understand the Analysis phase concepts.
                </p>
                
                <Quiz questions={analysisQuiz} />
                
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
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/design")}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(69, 183, 209, 0.3)",
                        "0 10px 30px rgba(150, 206, 180, 0.4)",
                        "0 10px 30px rgba(69, 183, 209, 0.3)",
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
                    Next: Design 🎨✨
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
          {["🔍", "📊", "📝", "💡", "✨"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
};

export default AnalysisPage;
