import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import chapters from "../../constants/sdlc/story";
import Menu from "../../components/Menu";
import sdlcMenuItems from "../../constants/sdlc/menuItems";
import styles from "../../styles/index.js";

const DevelopmentProcessStory = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (isAutoPlay && currentChapter < chapters.length - 1) {
      interval = setInterval(() => {
        setCurrentChapter((prev) => {
          if (prev < chapters.length - 1) {
            return prev + 1;
          } else {
            setIsAutoPlay(false);
            return prev;
          }
        });
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentChapter, chapters.length]);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const goToChapter = (index) => {
    setCurrentChapter(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.05 },
    },
  };

  const chapterVariants = {
    enter: { opacity: 0, scale: 0.95, y: 20 },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const storyLineVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.05, duration: 0.2, ease: "easeOut" },
    }),
  };

  const illustrationVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 },
    },
  };

  const introVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  if (showIntro) {
    return (
      <div style={styles.storyContainer}>
        <div style={styles.absoluteTopRightHighZ}>
          <Menu items={sdlcMenuItems} title="Menu" />
        </div>
        <Link to="/learn-software-development" style={styles.backLink}>
          ← Back
        </Link>
        <AnimatePresence>
          {" "}
          <motion.div
            style={styles.introWrapper}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {" "}
            <motion.div style={styles.introContent} animate={floatingAnimation}>
              <motion.div style={styles.introIcon}>☕</motion.div>
              <motion.h1 style={styles.introTitle}>
                Sarah's Coffee Shop App
              </motion.h1>
              <motion.p style={styles.introSubtitle}>
                A Story About the Development Process
              </motion.p>
              <motion.p style={styles.introDescription}>
                Join us on a journey as we follow Sarah and Alex through the
                complete software development process, from vision to reality.
              </motion.p>
              <motion.button
                style={styles.startButton}
                onClick={() => setShowIntro(false)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={pulseAnimation}
              >
                Begin the Story
              </motion.button>
            </motion.div>{" "}
            {/* Floating coffee beans */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  ...styles.floatingBean,
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                ☕
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  const chapter = chapters[currentChapter];

  return (
    <div style={styles.storyContainerWithBg(chapter.gradient)}>
      <div style={styles.absoluteTopRightHighZ}>
        <Menu items={sdlcMenuItems} title="Menu" />
      </div>
      <Link to="/learn-software-development" style={styles.backLink}>
        ← Back
      </Link>

      {/* Progress bar */}
      <div style={styles.progressContainer}>
        <motion.div
          style={styles.progressBarWithBg(chapter.color)}
          initial={{ width: 0 }}
          animate={{
            width: `${((currentChapter + 1) / chapters.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Chapter navigation dots */}
      <div style={styles.dotsContainer}>
        {chapters.map((ch, index) => (
          <motion.button
            key={ch.id}
            style={{
              ...styles.dot,
              backgroundColor:
                index === currentChapter
                  ? chapter.color
                  : "rgba(255, 255, 255, 0.3)",
              width: index === currentChapter ? "12px" : "8px",
              height: index === currentChapter ? "12px" : "8px",
            }}
            onClick={() => goToChapter(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${ch.title}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait" custom={currentChapter}>
        <motion.div
          key={currentChapter}
          style={styles.chapterContainer}
          variants={chapterVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.div
            style={styles.chapterContent}
            variants={containerVariants}
          >
            {/* Chapter Icon */}
            <motion.div
              style={styles.chapterIcon}
              variants={illustrationVariants}
            >
              {chapter.icon}
            </motion.div>

            {/* Chapter Title */}
            <motion.h2 style={styles.chapterTitle} variants={titleVariants}>
              {chapter.title}
            </motion.h2>

            <motion.h3 style={styles.chapterSubtitle} variants={titleVariants}>
              {chapter.subtitle}
            </motion.h3>

            {/* Story Content */}
            <div style={styles.storyContent}>
              {chapter.story.map((line, index) => (
                <motion.p
                  key={index}
                  style={
                    line.startsWith("•") ? styles.storyLineBullet :
                    line.startsWith('"') ? styles.storyLineQuote :
                    styles.storyLine
                  }
                  custom={index}
                  variants={storyLineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Illustration */}
            <motion.div
              style={styles.illustration}
              variants={illustrationVariants}
            >
              {chapter.illustration}
            </motion.div>

            {/* Show "Let's Go Plan" button on the last chapter */}
            {currentChapter === chapters.length - 1 && (
              <motion.div
                style={styles.planButtonContainerWithMargin}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div style={styles.buttonFlexContainer}>
                  <motion.button
                    style={styles.planButtonTeal}
                    onClick={() => navigate("/planning")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📝 Planning
                  </motion.button>
                  <motion.button
                    style={{
                      ...styles.planButton,
                      background:
                        "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
                    }}
                    onClick={() => navigate("/analysis")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📊 Analysis
                  </motion.button>
                  <motion.button
                    style={styles.planButtonBlue}
                    onClick={() => navigate("/design")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📐 Design
                  </motion.button>
                  <motion.button
                    style={styles.planButtonPurple}
                    onClick={() => navigate("/implementation")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    💻 Implementation
                  </motion.button>
                  <motion.button
                    style={styles.planButtonGreen}
                    onClick={() => navigate("/testing")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🧪 Testing
                  </motion.button>
                  <motion.button
                    style={styles.planButtonRed}
                    onClick={() => navigate("/deployment")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🚀 Deployment
                  </motion.button>
                  <motion.button
                    style={styles.planButtonDark}
                    onClick={() => navigate("/maintenance")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🛠 Maintenance
                  </motion.button>
                  <motion.button
                    style={styles.planButtonDark}
                    onClick={() => navigate("/review")}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📋 Review
                  </motion.button>
                </div>
                <div style={styles.storySubtitle}>
                  Explore each stage of the software development process!
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div style={styles.controls}>
        <motion.button
          style={{
            ...styles.navButton,
            opacity: currentChapter === 0 ? 0.3 : 1,
          }}
          onClick={prevChapter}
          disabled={currentChapter === 0}
          whileHover={{ scale: currentChapter === 0 ? 1 : 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ← Previous
        </motion.button>

        <motion.button
          style={{
            ...styles.playButton,
            backgroundColor: isAutoPlay ? "#FF6B6B" : chapter.color,
          }}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isAutoPlay ? "⏸ Pause" : "▶ Auto Play"}
        </motion.button>

        <motion.button
          style={{
            ...styles.navButton,
            opacity: currentChapter === chapters.length - 1 ? 0.3 : 1,
          }}
          onClick={nextChapter}
          disabled={currentChapter === chapters.length - 1}
          whileHover={{
            scale: currentChapter === chapters.length - 1 ? 1 : 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          Next →
        </motion.button>
      </div>

      {/* Background particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 15 + 10}px`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {["☕", "📱 ", "💻 ", "🚀 ", "✨ "][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );
};
export default DevelopmentProcessStory;
