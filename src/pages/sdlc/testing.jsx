/**
 * Traditional SDLC Testing Phase Educational Page
 * 
 * Comprehensive learning module that teaches classical software testing
 * methodologies and quality assurance practices. This interactive page guides
 * students through systematic approaches to ensuring software quality and reliability.
 * 
 * Testing Concepts Covered:
 * - Test planning and strategy development
 * - Test case design and documentation methodologies
 * - Manual testing execution and defect tracking processes
 * - Integration testing and system testing approaches
 * - User acceptance testing coordination and management
 * - Performance testing basics and quality metrics
 * 
 * Interactive Learning Features:
 * - Tabbed interface for exploring different testing aspects
 * - Animated step-by-step breakdown of testing activities
 * - Interactive quiz to validate testing methodology understanding
 * - Process visualization showing testing workflow integration
 * - Real-world testing scenario examples and case studies
 * 
 * Educational Approach:
 * - Builds fundamental testing skills and quality assurance mindset
 * - Emphasizes systematic approach to software quality validation
 * - Teaches different types of testing and their specific purposes
 * - Provides foundation for understanding modern testing evolution
 * 
 * Testing Methodologies Covered:
 * - Black box and white box testing techniques
 * - Functional and non-functional testing approaches
 * - Manual testing processes and comprehensive documentation
 * - Defect lifecycle management and bug tracking systems
 * - Test reporting and quality metrics analysis
 * 
 * This foundation prepares students for AI-enhanced testing approaches
 * and modern quality assurance practices.
 */

// Core component and navigation system imports
import Menu from "../../components/Menu";                      // Navigation component for SDLC phase transitions
import sdlcMenuItems from "../../constants/sdlc/menuItems";    // Traditional SDLC navigation configuration
import React, { useState } from "react";                        // React with state management for interactive elements
import { motion, AnimatePresence } from "framer-motion";        // Animation library for smooth transitions and modal effects
import { Link, useNavigate } from "react-router-dom";          // React Router for navigation between development phases
import { testingSteps, testingTypes, drawbacks } from "../../constants/sdlc/testing";
import { testingQuiz } from "../../constants/quiz/testingQuiz";
import Quiz from "../../components/Quiz";
import ProcessVisualization from "../../components/visualizations/ProcessVisualization";
import styles from "../../styles/index.js";
 

const TestingPage = () => {
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
      <div style={styles.absoluteTopRight}>
        <Menu items={sdlcMenuItems} title="Menu" />
      </div>
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>
       

      {/* Floating navigation */}
      <div style={styles.floatingNav} className="floating-nav">
        <motion.button
          style={activeSection === "intro" ? 
            {...styles.navItem, ...styles.navItemIntro} : 
            styles.navItem}
          onClick={() => setActiveSection("intro")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Intro
          
        </motion.button>
        <motion.button
          style={activeSection === "visualization" ? 
            {...styles.navItem, ...styles.navItemActive} : 
            styles.navItem}
          onClick={() => setActiveSection("visualization")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Visualization
          
        </motion.button>
        <motion.button
          style={activeSection === "steps" ? 
            {...styles.navItem, ...styles.navItemSteps} : 
            styles.navItem}
          onClick={() => setActiveSection("steps")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Steps
          
        </motion.button>
        <motion.button
          style={activeSection === "types" ? 
            {...styles.navItem, ...styles.navItemTypes} : 
            styles.navItem}
          onClick={() => setActiveSection("types")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Types
          
        </motion.button>
        <motion.button
          style={activeSection === "drawbacks" ? 
            {...styles.navItem, ...styles.navItemDrawbacks} : 
            styles.navItem}
          onClick={() => setActiveSection("drawbacks")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Drawbacks
          
        </motion.button>
        <motion.button
          style={activeSection === "joke" ? 
            {...styles.navItem, ...styles.navItemJoke} : 
            styles.navItem}
          onClick={() => setActiveSection("joke")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
        Joke
          
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
          
        Quiz
          
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
                 
              </motion.div>

              <motion.h1 style={styles.mainTitle} variants={itemVariants}>
                Testing in Software Development
              </motion.h1>

              <motion.p style={styles.subtitle} variants={itemVariants}>
                Ensuring Quality and Reliability
              </motion.p>

              <motion.div style={styles.introCard} variants={itemVariants}>
                <h2 style={styles.cardTitle}>What is Testing?</h2>

                <p style={styles.cardText}>
                  Testing is the <strong>quality assurance process</strong> of
                  verifying that software works as expected, meets requirements,
                  and is free from defects. It involves executing code with
                  various inputs to identify bugs, validate functionality, and
                  ensure the product delivers value to users reliably and
                  safely.
                </p>

                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}></span>
                    <span>Identifies bugs before they reach users</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}></span>
                    <span>Validates functionality meets requirements</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}></span>
                    <span>Ensures performance and scalability</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}></span>
                    <span>Builds confidence in code changes</span>
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
              <ProcessVisualization stage="testing" isAI={false} />
              
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
                6 Essential Testing Steps
              </motion.h1>
              <div style={styles.stepsGrid}>
                {testingSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    style={styles.stepCardWithBorder(step.color)}
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
                   <strong>Remember:</strong> Testing is not just about
                  finding bugs—it's about building confidence. Good testing
                  catches issues early when they're cheap to fix, validates that
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
                See Testing Approaches →
              </motion.button>
            </motion.div>
          )}

          {/* TESTING TYPES WITH STORIES */}
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
                Testing Approaches: Critical Lessons
              </motion.h1>

              <div style={styles.typesContainer}>
                {testingTypes.map((type, index) => (
                  <motion.div
                    key={type.id}
                    style={styles.typeCard}
                    variants={itemVariants}
                    custom={index}
                  >
                    <div style={styles.typeHeaderWithBg(type.color)}>
                      <span style={styles.typeEmoji}>{type.emoji}</span>
                      <h3 style={styles.typeName}>{type.name}</h3>
                    </div>
                    <div style={styles.typeContent}>
                      <h4 style={styles.storyTitle}>{type.story.title}</h4>
                      <p style={styles.storyScenario}>{type.story.scenario}</p>
                      <motion.button
                        style={styles.revealButtonWithBg(type.color)}
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
                        {" What Went Wrong?"}
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
                Common Testing Pitfalls
              </motion.h1>
              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                Testing is crucial, but many teams struggle with it. Here are
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
                          : " Show Solution"}
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
                <div style={styles.jokeIcon} />
                <h2 style={styles.jokeTitle}>Testing Humor Break!</h2>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    QA Engineer walks into a bar. Orders a beer. Orders 0 beers.
                    Orders 99999999999 beers. Orders a lizard. Orders -1 beers.
                    Orders a ueicbksjdhd...
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    First real customer walks in and asks where the bathroom is.
                    The bar bursts into flames! 
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    Why did the developer quit their job at the circus?
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Too many test cases to juggle! 
                  </motion.p>
                </div>
                <div style={styles.jokeBox}>
                  <p style={styles.jokeSetup}>
                    "99 little bugs in the code, 99 little bugs. Take one down,
                    patch it around..."
                  </p>
                  <motion.p
                    style={styles.jokePunchline}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    "127 little bugs in the code!" 
                  </motion.p>
                </div>
                <motion.div
                  style={styles.wisdomBox}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p style={styles.wisdomText}>
                     Testing Wisdom: "If debugging is the process of removing
                    bugs, then programming must be the process of putting them
                    in."
                  </p>
                  <p style={styles.wisdomExplanation}>
                    Write tests first, code second. Prevention is better than
                    cure!
                  </p>
                </motion.div>
                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                     Home
                  </motion.button>
                  
                  <motion.button
                    style={styles.actionButton}
                    onClick={() => setActiveSection("quiz")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Test Knowledge 
                  </motion.button>
                  
                  <motion.button
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/deployment")}
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
                    Next: Deployment  
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
                    width: "72px",
                    height: "7px",
                    margin: "0 auto 2rem",
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #38b2ac, #319795)",
                  }}
                  animate={{ opacity: [0.7, 1, 0.7], boxShadow: ["0 0 10px rgba(56,178,172,0.5)", "0 0 24px rgba(56,178,172,0.9)", "0 0 10px rgba(56,178,172,0.5)"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  />
                <h2 style={styles.sectionTitle}>Test Your Knowledge!</h2>
                <p style={styles.sectionSubtitle}>
                  Let's see how well you understand the Testing phase concepts.
                </p>
                
                <Quiz questions={testingQuiz} />
                
                <div style={styles.buttonGroup}>
                  <motion.button
                    style={styles.homeButton}
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                     Home
                  </motion.button>
                  <motion.button
                    style={styles.nextPhaseButton}
                    onClick={() => navigate("/deployment")}
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
                    Next: Deployment  
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
          {[" ", " ", " ", "", "", ""][i]}
        </motion.div>
      ))}
    </div>
  );
};
export default TestingPage;
