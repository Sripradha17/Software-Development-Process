import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { planningSteps, planningTypes, drawbacks } from "./constants/planning";
import styles from "./styles";

const PlanningPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [selectedStory, setSelectedStory] = useState(null);
  const [showFailure, setShowFailure] = useState(false);
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
      <Link to="/story" style={styles.backLink}>
        ← Back to Story
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
          📋
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "steps" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("steps")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎯
        </motion.button>
        <motion.button
          style={{
            ...styles.navItem,
            ...(activeSection === "types" && styles.navItemActive),
          }}
          onClick={() => setActiveSection("types")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
                📋✨
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
                  Planning is the <strong>strategic process</strong> of defining
                  what needs to be built, how it will be built, who will build
                  it, and when it will be completed. It's the roadmap that
                  transforms vague ideas into actionable tasks.
                </p>

                <div style={styles.keyPoints}>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🎯</span>
                    <span>Sets clear objectives and success metrics</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>🗺️</span>
                    <span>
                      Creates a shared understanding among team members
                    </span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>⏰</span>
                    <span>Helps estimate effort and manage expectations</span>
                  </div>
                  <div style={styles.keyPoint}>
                    <span style={styles.keyPointIcon}>💰</span>
                    <span>Prevents costly mistakes and rework</span>
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
                          background:
                            selectedStory === type.id ? "#FF6B6B" : type.color,
                        }}
                        onClick={() => {
                          setSelectedStory(
                            selectedStory === type.id ? null : type.id
                          );
                          setShowFailure(true);
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {selectedStory === type.id
                          ? "Hide Details"
                          : "🔍 What Went Wrong?"}
                      </motion.button>

                      <AnimatePresence>
                        {selectedStory === type.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div style={styles.failureBox}>
                              <h5 style={styles.failureTitle}>The Failure:</h5>
                              <p style={styles.failureText}>
                                {type.story.failure}
                              </p>
                            </div>

                            <div style={styles.fixBox}>
                              <h5 style={styles.fixTitle}>The Fix:</h5>
                              <p style={styles.fixText}>{type.story.fix}</p>
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
                {" "}
                Major Drawbacks & Their Resolutions
              </motion.h1>

              <motion.p style={styles.drawbackIntro} variants={itemVariants}>
                {" "}
                Even the best planning has pitfalls. Here's how to overcome
                them:
              </motion.p>

              <div style={styles.drawbacksGrid}>
                {drawbacks.map((drawback, index) => (
                  <motion.div
                    key={drawback.id}
                    style={{
                      ...styles.drawbackCard,
                      cursor: "pointer",
                      background:
                        selectedDrawback === drawback.id
                          ? `linear-gradient(135deg, ${drawback.color}20, ${drawback.color}40)`
                          : "rgba(255, 255, 255, 0.95)",
                    }}
                    variants={itemVariants}
                    custom={index}
                    onClick={() =>
                      setSelectedDrawback(
                        selectedDrawback === drawback.id ? null : drawback.id
                      )
                    }
                    whileHover={{ scale: 1.02, y: -3 }}
                  >
                    <div style={styles.drawbackIcon}>{drawback.icon}</div>
                    <h3 style={styles.drawbackTitle}>{drawback.title}</h3>
                    <p style={styles.drawbackProblem}>{drawback.problem}</p>

                    <AnimatePresence>
                      {selectedDrawback === drawback.id && (
                        <motion.div
                          style={styles.resolutionBox}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <h4 style={styles.resolutionTitle}>💡 Resolution:</h4>
                          <p style={styles.resolutionText}>
                            {drawback.resolution}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div style={styles.tapHint}>
                      {selectedDrawback === drawback.id
                        ? "👆 Tap to close"
                        : "👆 Tap for solution"}
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
                    A: Because Oct 31 == Dec 25! 🎃🎄
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
                    planning." 🍺🐛
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
                    Next: Analysis 🔍✨
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
          {["📋", "🎯", "📝", "💡", "✨"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
};

export default PlanningPage;
