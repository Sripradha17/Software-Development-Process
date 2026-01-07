/**
 * Planning Phase Page Component
 * 
 * Comprehensive educational page covering the planning phase of the Software Development Life Cycle.
 * Provides in-depth coverage of project planning methodologies, tools, and best practices.
 * 
 * Educational Features:
 * - Interactive section navigation (intro, methodologies, tools, challenges, quiz)
 * - Detailed planning methodology explanations with real-world examples
 * - Modal-based detailed views for complex planning concepts
 * - Interactive quiz for knowledge assessment
 * - Process visualization components for better understanding
 * - Common planning pitfalls and how to avoid them
 * 
 * This page helps students understand the critical importance of proper planning
 * in software development and provides practical knowledge for real-world application.
 */

// UI component imports
import Menu from "../../components/Menu";                           // Navigation menu component
import sdlcMenuItems from "../../constants/sdlc/menuItems";        // SDLC-specific navigation items

// React core imports for component functionality
import React, { useState } from "react";                           // Core React with state management

// Animation library for enhanced user experience
import { motion, AnimatePresence } from "framer-motion";           // Advanced animation components

// Navigation and routing imports
import { Link, useNavigate } from "react-router-dom";               // Router components and navigation hook

// Planning-specific data and content imports
import { 
  planningSteps,      // Sequential steps in the planning process
  planningTypes,      // Different planning methodologies (Agile, Waterfall, etc.)
  drawbacks          // Common planning pitfalls and challenges
} from "../../constants/sdlc/planning";

import { planningQuiz } from "../../constants/quiz/planningQuiz"; // Quiz questions for knowledge assessment

// Interactive component imports
import Quiz from "../../components/Quiz";                                           // Quiz interface component
import ProcessVisualization from "../../components/visualizations/ProcessVisualization"; // Visual process diagrams

// Styling configuration
import styles from "../../styles/index.js";                        // Centralized styling system

/**
 * PlanningPage Component
 * 
 * Main component for the planning phase education module.
 * Manages section navigation, modal states, and interactive content presentation.
 */
const PlanningPage = () => {
  // State management for section navigation and interactive features
  const [activeSection, setActiveSection] = useState("intro");        // Currently active content section
  const [modalOpen, setModalOpen] = useState(false);                  // Controls modal visibility for detailed views
  const [modalData, setModalData] = useState(null);                   // Data to display in modal (methodology details, etc.)
  const [selectedDrawback, setSelectedDrawback] = useState(null);     // Currently selected planning drawback for detailed view
  
  const navigate = useNavigate();                                      // Navigation hook for programmatic routing

  // Animation configuration for smooth visual transitions and engaging user experience
  // These variants control how content appears, disappears, and transitions between states
  
  // Main container animation with staggered children for sequential element appearance
  const containerVariants = {
    hidden: { opacity: 0 },                                     // Initial invisible state
    visible: {
      opacity: 1,                                                // Final visible state
      transition: { staggerChildren: 0.1 },                     // Stagger child animations by 0.1s for smooth flow
    },
  };

  // Individual item animation for fade-in with slide-up effect
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },                             // Start 20px below and invisible
    visible: {
      y: 0,                                                      // End at normal position
      opacity: 1,                                                // End fully visible
      transition: { duration: 0.3 },                            // Smooth 0.3s transition
    },
  };

  // Floating animation for visual elements to add life and engagement
  const floatAnimation = {
    y: [0, -10, 0],                                             // Gentle up-and-down movement
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }, // Infinite smooth floating
  };

  return (
    // Main page container with centralized styling
    <div style={styles.pageContainer}>
      {/* Navigation menu positioned at top-right for easy access */}
      <div style={styles.absoluteTopRight}>
        <Menu items={sdlcMenuItems} title="Menu" />  {/* SDLC-specific navigation menu */}
      </div>
      
      {/* Home navigation link for quick return to landing page */}
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>
       

      {/* Floating navigation */}
      <div style={styles.floatingNav}>
        <motion.button
          style={activeSection === "intro" ? 
            {...styles.navItem, ...styles.navItemIntro} : 
            styles.navItem}
          onClick={() => setActiveSection("intro")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📋
        </motion.button>

        <motion.button
          style={activeSection === "visualization" ? 
            {...styles.navItem, ...styles.navItemActive} : 
            styles.navItem}
          onClick={() => setActiveSection("visualization")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📊
        </motion.button>

        <motion.button
          style={activeSection === "steps" ? 
            {...styles.navItem, ...styles.navItemSteps} : 
            styles.navItem}
          onClick={() => setActiveSection("steps")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎯
        </motion.button>

        <motion.button
          style={activeSection === "types" ? 
            {...styles.navItem, ...styles.navItemTypes} : 
            styles.navItem}
          onClick={() => setActiveSection("types")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📖
        </motion.button>

        <motion.button
          style={activeSection === "drawbacks" ? 
            {...styles.navItem, ...styles.navItemDrawbacks} : 
            styles.navItem}
          onClick={() => setActiveSection("drawbacks")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⚠
        </motion.button>

        <motion.button
          style={activeSection === "joke" ? 
            {...styles.navItem, ...styles.navItemJoke} : 
            styles.navItem}
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
                📋 ✨
              </motion.div>

              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                {" "}
                Planning in Software Development
              </motion.h1>

              <motion.p style={styles.subtitle} variants={itemVariants}>
                {" "}
                The Foundation of Every Successful Project
              </motion.p>

              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is Planning?</h2>

                <p style={styles.cardText}>
                  Planning is the <strong>strategic process</strong>
                  of defining what needs to be built, how it will be built, who
                  will build it, and when it will be completed. It's the roadmap
                  that transforms vague ideas into actionable tasks.
                </p>

                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🎯 </span>
                    <span>Sets clear objectives and success metrics</span>
                  </div>

                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🗺 </span>
                    <span>
                      Creates a shared understanding among team members
                    </span>
                  </div>

                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⏰ </span>
                    <span>Helps estimate effort and manage expectations</span>
                  </div>

                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>💰 </span>
                    <span>Prevents costly mistakes and rework</span>
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
              <ProcessVisualization stage="planning" isAI={false} />
              
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
                6 Essential Planning Steps
              </motion.h1>
              <div style={styles.stepsGrid}>
                {planningSteps.map((step, index) => (
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
                  💡 <strong>Remember:</strong> Planning is iterative! You'll
                  often loop back to refine objectives as you gather more
                  information. Think of it as a spiral, not a straight line.
                </p>
              </motion.div>

              <motion.button
                style={styles.nextButton}
                onClick={() => setActiveSection("types")}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Planning Types →
              </motion.button>
            </motion.div>
          )}

          {/* PLANNING TYPES WITH STORIES */}
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
                Planning Approaches: Tales of Success & Failure
              </motion.h1>

              <div style={styles.typesContainer}>
                {planningTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    style={styles.typeCard}
                    variants={itemVariants}
                    custom={index}
                  >
                    <div
                      style={styles.typeHeaderWithBg(type.color)}
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
                Major Drawbacks & Their Resolutions
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Even the best planning has pitfalls. Here's how to overcome
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
                <h2 style={styles.jokeTitle}>Planning Humor Break!</h2>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: Why do programmers always confuse Halloween and
                    Christmas?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    A: Because Oct 31 == Dec 25! 🎃 🎄
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Q: How many software developers does it take to plan a
                    project?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    A: None. It's a hardware problem... the stakeholders keep
                    changing their minds! 😅
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    A project manager, a developer, and a tester walk into a
                    bar...
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    The project manager says "We need to plan this round!"
                    <br />
                    The developer says "But we haven't defined the
                    requirements!"
                    <br /> The tester says "I already found 3 bugs in your
                    planning." 🍺 🐛
                  </motion.p>
                </div>
                <motion.div
                  style={styles.wisdomBox}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                >
                  <p style={styles.wisdomText}>
                    💭 <em>"Plans are nothing; planning is everything."</em> -
                    Dwight D. Eisenhower
                  </p>
                  <p style={styles.wisdomExplanation}>
                    The value isn't in the document - it's in the thinking,
                    discussions, and shared understanding you build while
                    planning!
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
                    onClick={() => navigate("/analysis")}
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
                    Next: Analysis 🔍 ✨
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
                  animate={floatAnimation}
                >
                  🧠
                </motion.div>
                <h2 style={styles.sectionTitle}>Test Your Knowledge!</h2>
                <p style={styles.sectionSubtitle}>
                  Let's see how well you understand the Planning phase concepts.
                </p>
                
                <Quiz questions={planningQuiz} />
                
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
                    onClick={() => navigate("/analysis")}
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
                    Next: Analysis 🔍 ✨
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
          {["📋 ", "🎯 ", "📝 ", "💡 ", "✨ "][i % 5]}
        </motion.div>
      ))}
    </div>
  );
};
export default PlanningPage;
