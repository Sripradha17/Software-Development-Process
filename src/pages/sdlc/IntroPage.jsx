/**
 * Introduction Page Component
 *
 * The main landing page of the Software Development Process educational platform.
 * Serves as the entry point to introduce users to the application's features and capabilities.
 *
 * Key Features:
 * - Animated generative network backdrop (no raster imagery)
 * - Auto-rotating feature showcase and platform statistics
 * - Call-to-action buttons for different learning paths
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.js";
import { useNavigate } from "react-router-dom";
import NetworkBackground from "../../components/NetworkBackground";

const FEATURES = [
  {
    title: "Interactive Learning",
    description: "Engage with hands-on activities and simulations",
  },
  {
    title: "AI-Enhanced Process",
    description: "Learn modern AI-augmented development workflows",
  },
  {
    title: "Real-World Projects",
    description: "Practice with industry-standard case studies",
  },
  {
    title: "Skill Assessment",
    description: "Track your progress with comprehensive quizzes",
  },
];

const STATS = [
  { number: "7", label: "SDLC Phases" },
  { number: "50+", label: "Interactive Activities" },
  { number: "20+", label: "Case Studies" },
  { number: "100%", label: "Hands-on Learning" },
];

const IntroPage = () => {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % FEATURES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const enhancedTitle = {
    ...styles.introTitle,
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    background: "linear-gradient(135deg, #38b2ac 0%, #319795 50%, #2d8f8a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1.5rem",
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
    letterSpacing: "0.5px",
  };

  const secondaryButton = {
    ...styles.introButton,
    background: "linear-gradient(135deg, #325fa1 0%, #28456e 100%)",
    border: "1px solid #325fa1",
    color: "#e2e8f0",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
    fontWeight: "700",
    borderRadius: "50px",
    boxShadow: "0 8px 25px rgba(50, 95, 161, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <motion.div
      style={{ ...styles.introContainer, position: "relative", overflow: "hidden" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <NetworkBackground />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h1 style={enhancedTitle} variants={itemVariants}>
          Software Development Process
        </motion.h1>

        <motion.p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "3rem",
            maxWidth: "800px",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
          variants={itemVariants}
        >
          Master the complete software development lifecycle with interactive learning experiences,
          real-world case studies, and cutting-edge AI-enhanced methodologies.
        </motion.p>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "2rem",
            margin: "0 0 3rem",
            maxWidth: "800px",
            width: "100%",
          }}
          variants={itemVariants}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: "rgba(26, 188, 156, 0.1)",
                borderRadius: "15px",
                border: "1px solid rgba(26, 188, 156, 0.2)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(26, 188, 156, 0.2)" }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#38b2ac",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            margin: "0 0 4rem",
            maxWidth: "1000px",
            width: "100%",
          }}
          variants={itemVariants}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                border: currentFeature === index
                  ? "1px solid #38b2ac"
                  : "1px solid rgba(56, 178, 172, 0.3)",
                borderRadius: "20px",
                padding: "2rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                transform: currentFeature === index ? "translateY(-10px)" : "translateY(0px)",
                boxShadow: currentFeature === index
                  ? "0 15px 40px rgba(56, 178, 172, 0.3)"
                  : "0 5px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(56, 178, 172, 0.3)" }}
            >
              <div
                style={{
                  width: "36px",
                  height: "4px",
                  margin: "0 auto 1.25rem",
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #38b2ac, #325fa1)",
                  opacity: currentFeature === index ? 1 : 0.6,
                  transition: "opacity 0.3s ease",
                }}
              />
              <h3 style={{ color: "#38b2ac", marginBottom: "1rem", fontSize: "1.3rem", fontWeight: "600" }}>
                {feature.title}
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.5", fontSize: "1rem" }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ ...styles.buttonSection, gap: "1.5rem", marginTop: "1rem" }}
          variants={itemVariants}
        >
          <motion.button
            style={primaryButton}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(56, 178, 172, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/learn-software-development")}
          >
            Start Learning SDLC
          </motion.button>

          <motion.button
            style={secondaryButton}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(50, 95, 161, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/ai-augmented-development")}
          >
            Explore AI-Enhanced Process
          </motion.button>
        </motion.div>

        <motion.div style={{ marginTop: "2rem", textAlign: "center", maxWidth: "600px" }} variants={itemVariants}>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1rem", lineHeight: "1.6" }}>
            Join thousands of developers mastering modern software development practices.
            Choose your learning path and start building better software today.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default IntroPage;
