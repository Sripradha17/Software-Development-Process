/**
 * Introduction Page Component
 * 
 * The main landing page of the Software Development Process educational platform.
 * Serves as the entry point to introduce users to the application's features and capabilities.
 * 
 * Key Features:
 * - Animated feature showcase with rotating highlights
 * - Platform statistics and benefits overview
 * - Call-to-action buttons for different learning paths
 * - Responsive design with smooth animations
 * - Auto-rotating feature carousel for engaging presentation
 * 
 * This page sets the tone for the entire learning experience and guides users
 * toward their preferred learning path (traditional SDLC or AI-augmented development).
 */

// React core imports for component functionality
import React, { useState, useEffect } from "react";      // Core React hooks for state and lifecycle management

// Animation library for dynamic visual effects
import { motion, AnimatePresence } from "framer-motion"; // Advanced animation components for engaging UX

// Styling and navigation imports
import styles from "../../styles/index.js";              // Centralized styling system
import { useNavigate } from "react-router-dom";          // Navigation hook for programmatic routing

/**
 * IntroPage Component
 * 
 * Main landing page that introduces the platform and its features.
 * Manages feature rotation and provides navigation to different sections.
 */
const IntroPage = () => {
  const navigate = useNavigate();                          // Navigation hook for programmatic routing
  
  // State for managing the rotating feature showcase
  const [currentFeature, setCurrentFeature] = useState(0); // Index of currently displayed feature
  
  // Platform features configuration for the rotating showcase
  // Each feature highlights a key aspect of the learning platform
  // Features rotate automatically every 3 seconds to showcase different capabilities
  const features = [
    {
      icon: "🚀",                                          // Rocket icon for excitement and progress
      title: "Interactive Learning",                        // Hands-on engagement focus
      description: "Engage with hands-on activities and simulations" // Emphasizes practical learning approach
    },
    {
      icon: "🤖",                                          // Robot icon for AI features
      title: "AI-Enhanced Process",                         // Modern AI integration
      description: "Learn modern AI-augmented development workflows" // Focus on cutting-edge practices
    },
    {
      icon: "📊",                                          // Chart icon for real-world application
      title: "Real-World Projects",                         // Industry relevance
      description: "Practice with industry-standard case studies" // Practical application focus
    },
    {
      icon: "🎯",                                          // Target icon for achievement
      title: "Skill Assessment",                           // Progress tracking
      description: "Track your progress with comprehensive quizzes" // Learning measurement focus
    }
  ];

  // Platform statistics for credibility and motivation
  // These numbers showcase the comprehensive nature of the educational content
  const stats = [
    { number: "7", label: "SDLC Phases", icon: "📋" },          // Complete lifecycle coverage
    { number: "50+", label: "Interactive Activities", icon: "⚡" }, // Extensive hands-on content
    { number: "20+", label: "Case Studies", icon: "📚" },        // Real-world examples
    { number: "100%", label: "Hands-on Learning", icon: "🎯" }   // Practical learning approach
  ];
      description: "Learn modern AI-augmented development workflows"
    },
    {
      icon: "📊",
      title: "Real-World Projects",
      description: "Practice with industry-standard case studies"
    },
    {
      icon: "🎯",
      title: "Skill Assessment",
      description: "Track your progress with comprehensive quizzes"
    }
  ];

  // Platform statistics for credibility and engagement
  // These numbers highlight the comprehensive nature of the platform
  const stats = [
    { number: "7", label: "SDLC Phases", icon: "📋" },           // Complete SDLC coverage
    { number: "50+", label: "Interactive Activities", icon: "⚡" }, // Hands-on learning opportunities
    { number: "20+", label: "Case Studies", icon: "📚" },         // Real-world scenarios
    { number: "100%", label: "Hands-on Learning", icon: "🎯" }    // Learning methodology emphasis
  ];

  /**
   * Effect hook for automatic feature rotation
   * 
   * Creates an auto-rotating carousel of platform features to maintain user engagement.
   * Features rotate every 3 seconds to showcase different aspects of the platform.
   */
  useEffect(() => {
    // Set up interval for automatic feature rotation
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length); // Cycle through features array
    }, 3000); // Rotate every 3 seconds for optimal viewing time
    
    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array - effect runs only on mount/unmount

  // Animation configuration for smooth visual transitions
  // These variants define how page elements appear and animate
  const containerVariants = {
    hidden: { opacity: 0 },                                     // Initial invisible state
    visible: {
      opacity: 1,                                                // Final visible state
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const enhancedIntroContainer = {
    ...styles.introContainer,
    position: "relative",
    overflow: "hidden"
  };

  const heroSection = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 2
  };

  const enhancedTitle = {
    ...styles.introTitle,
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    background: "linear-gradient(135deg, #38b2ac 0%, #319795 50%, #2d8f8a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1.5rem"
  };

  const subtitle = {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "3rem",
    maxWidth: "800px",
    lineHeight: "1.6",
    fontWeight: "400"
  };

  const featuresGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    margin: "4rem 0",
    maxWidth: "1000px",
    width: "100%"
  };

  const featureCard = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(20px)",
    border: "1px solid rgba(56, 178, 172, 0.3)",
    borderRadius: "20px",
    padding: "2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const statsSection = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "2rem",
    margin: "3rem 0",
    maxWidth: "800px",
    width: "100%"
  };

  const statCard = {
    textAlign: "center",
    padding: "1.5rem",
    background: "rgba(26, 188, 156, 0.1)",
    borderRadius: "15px",
    border: "1px solid rgba(26, 188, 156, 0.2)"
  };

  const enhancedButtonSection = {
    ...styles.buttonSection,
    gap: "1.5rem",
    marginTop: "3rem"
  };

  const primaryButton = {
    ...styles.introButton,
    background: "linear-gradient(135deg, #38b2ac 0%, #319795 100%)",
    border: "1px solid #38b2ac",
    color: "#e2e8f0",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "700",
    borderRadius: "50px",
    boxShadow: "0 8px 25px rgba(56, 178, 172, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  };

  const secondaryButton = {
    ...styles.introButton,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    border: "1px solid #667eea",
    color: "#e2e8f0",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "700",
    borderRadius: "50px",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  };

  return (
    <motion.div 
      style={enhancedIntroContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Animation Elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(56, 178, 172, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)",
        zIndex: 1
      }} />

      <div style={heroSection}>
        {/* Main Title */}
        <motion.h1
          style={enhancedTitle}
          variants={itemVariants}
        >
          Software Development Process
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          style={subtitle}
          variants={itemVariants}
        >
          Master the complete software development lifecycle with interactive learning experiences, 
          real-world case studies, and cutting-edge AI-enhanced methodologies.
        </motion.p>

        {/* Main Visual */}
        <motion.div
          style={{ ...styles.mainImage, marginBottom: "3rem" }}
          variants={itemVariants}
        >
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img
              src="/introPage.gif"
              alt="Development Process"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                border: "2px solid rgba(56, 178, 172, 0.3)"
              }}
            />
            <div style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              background: "linear-gradient(135deg, #38b2ac, #319795)",
              color: "#e2e8f0",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              fontSize: "0.9rem",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(56, 178, 172, 0.4)"
            }}>
              🚀 Interactive
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div style={statsSection} variants={itemVariants}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              style={statCard}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(26, 188, 156, 0.2)"
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                {stat.icon}
              </div>
              <div style={{ 
                fontSize: "2rem", 
                fontWeight: "700", 
                color: "#38b2ac",
                marginBottom: "0.25rem"
              }}>
                {stat.number}
              </div>
              <div style={{ 
                fontSize: "0.9rem", 
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "500"
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div style={featuresGrid} variants={itemVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              style={{
                ...featureCard,
                transform: currentFeature === index ? "translateY(-10px)" : "translateY(0px)",
                boxShadow: currentFeature === index ? 
                  "0 15px 40px rgba(56, 178, 172, 0.3)" : 
                  "0 5px 20px rgba(0, 0, 0, 0.2)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(56, 178, 172, 0.3)"
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                color: "#38b2ac", 
                marginBottom: "1rem",
                fontSize: "1.3rem",
                fontWeight: "600"
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.5",
                fontSize: "1rem"
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div style={enhancedButtonSection} variants={itemVariants}>
          <motion.button
            style={primaryButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(56, 178, 172, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/learn-software-development")}
          >
            🎓 Start Learning SDLC
          </motion.button>

          <motion.button
            style={secondaryButton}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/ai-augmented-development")}
          >
            🤖 Explore AI-Enhanced Process
          </motion.button>
        </motion.div>

        {/* Additional Call-to-Action */}
        <motion.div
          style={{
            marginTop: "2rem",
            textAlign: "center",
            maxWidth: "600px"
          }}
          variants={itemVariants}
        >
          <p style={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "1rem",
            lineHeight: "1.6"
          }}>
            Join thousands of developers mastering modern software development practices. 
            Choose your learning path and start building better software today.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default IntroPage;
