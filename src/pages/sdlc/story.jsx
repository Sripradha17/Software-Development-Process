/**
 * Traditional SDLC Story Educational Page
 * 
 * Interactive narrative experience that teaches software development lifecycle
 * concepts through an engaging story about Sarah and Alex developing a coffee
 * shop app. This story-based learning approach makes complex SDLC concepts
 * accessible and memorable through character-driven storytelling.
 * 
 * Story Features:
 * - Chapter-based progression following traditional SDLC phases
 * - Auto-play functionality for guided story experience
 * - Interactive navigation with visual progress indicators
 * - Character-driven narrative with business owner and developer perspectives
 * - Real-world analogies (construction, craftsmanship) for better understanding
 * 
 * Educational Benefits:
 * - Makes abstract development concepts concrete and memorable
 * - Shows practical application of SDLC principles through narrative
 * - Demonstrates stakeholder collaboration and communication
 * - Provides context for understanding why each phase is important
 * 
 * Interactive Controls:
 * - Manual chapter navigation with previous/next controls
 * - Auto-play mode with 8-second intervals between chapters
 * - Visual progress indicators showing story advancement
 * - Integration with broader SDLC learning path
 */

// === REACT CORE IMPORTS ===
// Essential React functionality for component lifecycle and state management
import React, { useState, useEffect } from "react";              // React with hooks for interactive story navigation
import { motion, AnimatePresence } from "framer-motion";        // Animation library for smooth chapter transitions
import { Link, useNavigate } from "react-router-dom";          // React Router for navigation to other learning sections

// === EDUCATIONAL CONTENT IMPORTS ===
// Story content and navigation configuration
import chapters from "../../constants/sdlc/story";              // Coffee shop app development story chapters
import Menu from "../../components/Menu";                      // Navigation component for SDLC sections
import sdlcMenuItems from "../../constants/sdlc/menuItems";     // Traditional SDLC navigation structure
import styles from "../../styles/index.js";                   // Comprehensive styling system

/**
 * Development Process Story Component
 * 
 * Main functional component that orchestrates the interactive story experience
 * with chapter navigation, auto-play functionality, and smooth animations.
 */
const DevelopmentProcessStory = () => {
  // === STATE MANAGEMENT FOR STORY INTERACTION ===
  // Chapter navigation and story progression control
  const [currentChapter, setCurrentChapter] = useState(0);        // Index of currently displayed chapter
  const [isAutoPlay, setIsAutoPlay] = useState(false);           // Controls automatic chapter progression
  const [showIntro, setShowIntro] = useState(true);              // Controls intro screen visibility
  
  // Navigation system for educational flow
  const navigate = useNavigate();                                 // React Router navigation function

  // === AUTO-PLAY FUNCTIONALITY ===
  // Automatic chapter progression with configurable timing
  useEffect(() => {
    let interval;                                                 // Interval reference for cleanup
    
    // Only run auto-play if enabled and not on last chapter
    if (isAutoPlay && currentChapter < chapters.length - 1) {
      interval = setInterval(() => {
        setCurrentChapter((prev) => {
          if (prev < chapters.length - 1) {
            return prev + 1;                                     // Advance to next chapter
          } else {
            setIsAutoPlay(false);                               // Stop auto-play at end
            return prev;                                          // Stay on last chapter
          }
        });
      }, 8000);                                                 // 8 second intervals for reading time
    }
    
    // Cleanup interval on component unmount or dependency change
    return () => clearInterval(interval);
  }, [isAutoPlay, currentChapter, chapters.length]);             // Re-run when these values change

  // === CHAPTER NAVIGATION FUNCTIONS ===
  // Manual navigation controls for user-driven story progression
  
  /**
   * Advance to Next Chapter
   * Moves story forward by one chapter, with bounds checking
   */
  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {                  // Prevent advancing beyond last chapter
      setCurrentChapter(currentChapter + 1);                     // Move to next chapter
    }
  };

  /**
   * Return to Previous Chapter
   * Moves story backward by one chapter, with bounds checking
   */
  const prevChapter = () => {
    if (currentChapter > 0) {                                   // Prevent going before first chapter
      setCurrentChapter(currentChapter - 1);                    // Move to previous chapter
    }
  };

  /**
   * Jump to Specific Chapter
   * Direct navigation to any chapter via chapter indicator
   * @param {number} index - The chapter index to navigate to
   */
  const goToChapter = (index) => {
    setCurrentChapter(index);                                   // Direct chapter selection
  };

  // === FRAMER MOTION ANIMATION CONFIGURATIONS ===
  // Smooth animation variants for enhanced user experience
  
  /**
   * Container Animation Variants
   * Controls overall page entrance and child element staggering
   */
  const containerVariants = {
    hidden: { opacity: 0 },                                      // Initial invisible state
    visible: {
      opacity: 1,                                               // Fade in to full visibility
      transition: { duration: 0.3, staggerChildren: 0.05 },     // Staggered child animations
    },
  };

  /**
   * Chapter Transition Variants
   * Smooth transitions between story chapters with scaling effects
   */
  const chapterVariants = {
    enter: { opacity: 0, scale: 0.95, y: 20 },                  // Chapter enters from below, slightly scaled down
    center: {
      opacity: 1,                                               // Full opacity when centered
      scale: 1,                                                 // Normal scale
      y: 0,                                                     // Centered vertically
      transition: { duration: 0.3, ease: "easeOut" },           // Smooth easing for natural feel
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: -20, 
      transition: { duration: 0.2 }                             // Quick exit upward with fade
    },
  };

  /**
   * Title Animation Variants
   * Chapter title entrance animations
   */
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },                             // Start above and invisible
    visible: {
      y: 0,                                                     // Move to natural position
      opacity: 1,                                               // Fade in
      transition: { duration: 0.3, ease: "easeOut" },           // Smooth downward movement
    },
  };

  /**
   * Story Line Animation Variants
   * Individual story paragraph animations with custom delays
   */
  const storyLineVariants = {
    hidden: { opacity: 0 },                                     // Start invisible
    visible: (custom) => ({
      opacity: 1,                                               // Fade in
      // Custom delay based on line position for staggered effect
      transition: { delay: custom * 0.05, duration: 0.2, ease: "easeOut" },
    }),
  };

  /**
   * Illustration Animation Variants
   * Visual element animations with scaling effects
   */
  const illustrationVariants = {
    hidden: { scale: 0.8, opacity: 0 },                         // Start smaller and invisible
    visible: {
      scale: 1,                                                 // Scale to normal size
      opacity: 1,                                               // Fade in
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 }, // Delayed for text-first loading
    },
  };

  /**
   * Intro Screen Animation Variants
   * Welcome screen entrance and exit animations
   */
  const introVariants = {
    hidden: { opacity: 0, scale: 0.8 },                         // Start smaller and invisible
    visible: {
      opacity: 1,                                               // Fade in
      scale: 1,                                                 // Scale to normal size
      transition: { duration: 0.8, ease: "easeOut" },           // Longer duration for impact
    },
    exit: { 
      opacity: 0, 
      scale: 1.2, 
      transition: { duration: 0.5 }                             // Scale up while fading out
    },
  };

  /**
   * Floating Animation for Intro Elements
   * Gentle up-and-down movement for coffee shop themed elements
   */
  const floatingAnimation = {
    y: [0, -20, 0],                                             // Vertical floating motion
    transition: { 
      duration: 3,                                              // 3-second cycle for smooth movement
      repeat: Infinity,                                         // Continuous loop
      ease: "easeInOut"                                         // Natural easing
    },
  };

  /**
   * Pulse Animation for Call-to-Action Button
   * Subtle scaling to draw attention to story start button
   */
  const pulseAnimation = {
    scale: [1, 1.05, 1],                                        // Gentle scale increase and return
    transition: { 
      duration: 2,                                              // 2-second pulse cycle
      repeat: Infinity,                                         // Continuous pulse
      ease: "easeInOut"                                         // Smooth scaling
    },
  };

  // === INTRO SCREEN RENDER ===
  // Welcome screen with animated coffee shop theme
  if (showIntro) {
    return (
      <div style={styles.storyContainer}>
        {/* Navigation menu in top-right corner */}
        <div style={styles.absoluteTopRightHighZ}>
          <Menu items={sdlcMenuItems} title="Menu" />
        </div>
        
        {/* Back navigation link */}
        <Link to="/learn-software-development" style={styles.backLink}>
          ← Back
        </Link>
        
        {/* Animated intro screen with exit transition */}
        <AnimatePresence>
          <motion.div
            style={styles.introWrapper}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Main intro content with floating animation */}
            <motion.div style={styles.introContent} animate={floatingAnimation}>
              {/* Coffee shop emoji icon */}
              <motion.div style={styles.introIcon}>☕</motion.div>
              
              {/* Story title */}
              <motion.h1 style={styles.introTitle}>
                Sarah's Coffee Shop App
              </motion.h1>
              
              {/* Story subtitle */}
              <motion.p style={styles.introSubtitle}>
                A Story About the Development Process
              </motion.p>
              
              {/* Story description */}
              <motion.p style={styles.introDescription}>
                Join us on a journey as we follow Sarah and Alex through the
                complete software development process, from vision to reality.
              </motion.p>
              
              {/* Interactive start button with hover and tap effects */}
              <motion.button
                style={styles.startButton}
                onClick={() => setShowIntro(false)}                // Hide intro and start story
                whileHover={{
                  scale: 1.05,                                     // Slightly larger on hover
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",    // Enhanced shadow on hover
                }}
                whileTap={{ scale: 0.95 }}                        // Slightly smaller when clicked
                animate={pulseAnimation}                           // Continuous pulse animation
              >
                Begin the Story
              </motion.button>
            </motion.div>
            
            {/* Floating coffee bean decorations */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                style={{
                  ...styles.floatingBean,
                  left: `${15 + i * 15}%`,                         // Distributed horizontally
                  top: `${20 + (i % 3) * 25}%`,                   // Varied vertical positions
                }}
                animate={{
                  y: [0, -30, 0],                                 // Floating motion
                  rotate: [0, 360],                               // Full rotation
                  opacity: [0.3, 0.6, 0.3],                      // Pulsing opacity
                }}
                transition={{
                  duration: 4 + i,                               // Varied duration for each bean
                  repeat: Infinity,                               // Continuous animation
                  ease: "easeInOut",                              // Smooth easing
                  delay: i * 0.5,                                // Staggered start times
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

  // === MAIN STORY CONTENT ===
  // Get current chapter data
  const chapter = chapters[currentChapter];

  return (
    <div style={styles.storyContainerWithBg(chapter.gradient)}>
      {/* Navigation menu in top-right corner */}
      <div style={styles.absoluteTopRightHighZ}>
        <Menu items={sdlcMenuItems} title="Menu" />
      </div>
      
      {/* Back navigation link */}
      <Link to="/learn-software-development" style={styles.backLink}>
        ← Back
      </Link>

      {/* Progress bar showing story completion */}
      <div style={styles.progressContainer}>
        <motion.div
          style={styles.progressBarWithBg(chapter.color)}
          initial={{ width: 0 }}                                // Start empty
          animate={{
            width: `${((currentChapter + 1) / chapters.length) * 100}%`,  // Fill based on progress
          }}
          transition={{ duration: 0.5 }}                        // Smooth progress animation
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
                  ? chapter.color                               // Highlighted for current chapter
                  : "rgba(255, 255, 255, 0.3)",                // Muted for other chapters
              width: index === currentChapter ? "12px" : "8px", // Larger for current chapter
              height: index === currentChapter ? "12px" : "8px",
            }}
            onClick={() => goToChapter(index)}                  // Direct chapter navigation
            whileHover={{ scale: 1.3 }}                        // Enlarge on hover
            whileTap={{ scale: 0.9 }}                          // Shrink when clicked
            aria-label={`Go to ${ch.title}`}                   // Accessibility support
          />
        ))}
      </div>

      {/* Animated chapter content with smooth transitions */}
      <AnimatePresence mode="wait" custom={currentChapter}>
        <motion.div
          key={currentChapter}                                   // Key for AnimatePresence
          style={styles.chapterContainer}
          variants={chapterVariants}                             // Enter/center/exit animations
          initial="enter"                                        // Start with enter animation
          animate="center"                                       // Animate to center
          exit="exit"                                           // Exit with exit animation
        >
          <motion.div
            style={styles.chapterContent}
            variants={containerVariants}                         // Staggered child animations
          >
            {/* Chapter Icon with delayed entrance */}
            <motion.div
              style={styles.chapterIcon}
              variants={illustrationVariants}                   // Scale and fade animation
            >
              {chapter.icon}
            </motion.div>

            {/* Chapter Title with smooth entrance */}
            <motion.h2 style={styles.chapterTitle} variants={titleVariants}>
              {chapter.title}
            </motion.h2>

            {/* Chapter Subtitle */}
            <motion.h3 style={styles.chapterSubtitle} variants={titleVariants}>
              {chapter.subtitle}
            </motion.h3>

            {/* Story Content with Staggered Line Animation */}
            <div style={styles.storyContent}>
              {chapter.story.map((line, index) => (
                <motion.p
                  key={index}
                  style={
                    line.startsWith("•") ? styles.storyLineBullet :    // Bullet point styling
                    line.startsWith('"') ? styles.storyLineQuote :     // Quote styling
                    styles.storyLine                                   // Regular paragraph styling
                  }
                  custom={index}                                       // Pass index for staggered delay
                  variants={storyLineVariants}                        // Line-by-line animation
                  initial="hidden"                                    // Start invisible
                  animate="visible"                                   // Animate to visible with delay
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Chapter Illustration with delayed entrance */}
            <motion.div
              style={styles.illustration}
              variants={illustrationVariants}                   // Scale and fade animation
            >
              {chapter.illustration}
            </motion.div>

            {/* Navigation to SDLC phases - only shown on last chapter */}
            {currentChapter === chapters.length - 1 && (
              <motion.div
                style={styles.planButtonContainerWithMargin}
                initial={{ opacity: 0, y: 20 }}                // Start below and invisible
                animate={{ opacity: 1, y: 0 }}                 // Move up and fade in
                transition={{ delay: 1, duration: 0.5 }}       // Delayed appearance
              >
                <div style={styles.buttonFlexContainer}>
                  {/* Planning Phase Button */}
                  <motion.button
                    style={styles.planButtonTeal}
                    onClick={() => navigate("/planning")}       // Navigate to planning phase
                    whileHover={{ scale: 1.07 }}              // Slight growth on hover
                    whileTap={{ scale: 0.97 }}                // Slight shrink on tap
                  >
                    📝 Planning
                  </motion.button>
                  
                  {/* Analysis Phase Button */}
                  <motion.button
                    style={{
                      ...styles.planButton,
                      background: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
                    }}
                    onClick={() => navigate("/analysis")}       // Navigate to analysis phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📊 Analysis
                  </motion.button>
                  
                  {/* Design Phase Button */}
                  <motion.button
                    style={styles.planButtonBlue}
                    onClick={() => navigate("/design")}         // Navigate to design phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📐 Design
                  </motion.button>
                  
                  {/* Implementation Phase Button */}
                  <motion.button
                    style={styles.planButtonPurple}
                    onClick={() => navigate("/implementation")} // Navigate to implementation phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    💻 Implementation
                  </motion.button>
                  
                  {/* Testing Phase Button */}
                  <motion.button
                    style={styles.planButtonGreen}
                    onClick={() => navigate("/testing")}        // Navigate to testing phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🧪 Testing
                  </motion.button>
                  
                  {/* Deployment Phase Button */}
                  <motion.button
                    style={styles.planButtonRed}
                    onClick={() => navigate("/deployment")}     // Navigate to deployment phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🚀 Deployment
                  </motion.button>
                  
                  {/* Maintenance Phase Button */}
                  <motion.button
                    style={styles.planButtonDark}
                    onClick={() => navigate("/maintenance")}    // Navigate to maintenance phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    🛠 Maintenance
                  </motion.button>
                  
                  {/* Review Phase Button */}
                  <motion.button
                    style={styles.planButtonDark}
                    onClick={() => navigate("/review")}         // Navigate to review phase
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    📋 Review
                  </motion.button>
                </div>
                
                {/* Encouraging subtitle */}
                <div style={styles.storySubtitle}>
                  Explore each stage of the software development process!
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Story Navigation Controls */}
      <div style={styles.controls}>
        {/* Previous Chapter Button */}
        <motion.button
          style={{
            ...styles.navButton,
            opacity: currentChapter === 0 ? 0.3 : 1,            // Dimmed when disabled
          }}
          onClick={prevChapter}                                  // Go to previous chapter
          disabled={currentChapter === 0}                       // Disable on first chapter
          whileHover={{ scale: currentChapter === 0 ? 1 : 1.1 }} // Only scale if enabled
          whileTap={{ scale: 0.9 }}
        >
          ← Previous
        </motion.button>

        {/* Auto-Play Toggle Button */}
        <motion.button
          style={{
            ...styles.playButton,
            backgroundColor: isAutoPlay ? "#FF6B6B" : chapter.color, // Red when playing, chapter color when paused
          }}
          onClick={() => setIsAutoPlay(!isAutoPlay)}            // Toggle auto-play state
          whileHover={{ scale: 1.1 }}                          // Enlarge on hover
          whileTap={{ scale: 0.9 }}                            // Shrink on tap
        >
          {isAutoPlay ? "⏸ Pause" : "▶ Auto Play"}             // Dynamic button text
        </motion.button>

        {/* Next Chapter Button */}
        <motion.button
          style={{
            ...styles.navButton,
            opacity: currentChapter === chapters.length - 1 ? 0.3 : 1, // Dimmed when disabled
          }}
          onClick={nextChapter}                                 // Go to next chapter
          disabled={currentChapter === chapters.length - 1}    // Disable on last chapter
          whileHover={{
            scale: currentChapter === chapters.length - 1 ? 1 : 1.1, // Only scale if enabled
          }}
          whileTap={{ scale: 0.9 }}
        >
          Next →
        </motion.button>
      </div>

      {/* Animated Background Particles */}
      {/* Create floating themed icons for visual interest */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,                    // Random horizontal position
            top: `${Math.random() * 100}%`,                     // Random vertical position
            fontSize: `${Math.random() * 15 + 10}px`,           // Varied size (10-25px)
          }}
          animate={{
            y: [0, -50, 0],                                     // Floating motion
            opacity: [0, 0.4, 0],                              // Fade in and out
          }}
          transition={{
            duration: Math.random() * 8 + 6,                   // Varied duration (6-14 seconds)
            repeat: Infinity,                                   // Continuous loop
            ease: "easeInOut",                                  // Smooth easing
            delay: Math.random() * 3,                          // Staggered start (0-3 seconds)
          }}
        >
          {/* Random themed icons for tech/coffee shop atmosphere */}
          {["☕", "📱 ", "💻 ", "🚀 ", "✨ "][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );
}; // End of DevelopmentProcessStory component

/**
 * Export the Development Process Story component
 * 
 * This interactive story component provides an engaging introduction
 * to software development concepts through narrative learning, preparing
 * students for deeper exploration of individual SDLC phases.
 */
export default DevelopmentProcessStory;
