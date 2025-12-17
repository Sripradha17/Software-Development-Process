import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/index.js";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {

  const navigate = useNavigate();

  return (
    <div style={styles.introContainer}>

      <motion.h1
        style={styles.introTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Introduction to the Development Process
      </motion.h1>

      <motion.div
        style={styles.mainImage}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/introPage.gif"
          alt="Development Process"
          style={{
            width: "100%",
            maxWidth: "700px",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>

      <motion.div style={styles.buttonSection}>
        <motion.button
          style={styles.introButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/learn-software-development")}
        >
          Learn Software Development Process
        </motion.button>

        <motion.button
          style={styles.introButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/ai-augmented-development")}
        >
          Learn AI Augmented Software Development Process
        </motion.button>
      </motion.div>
      
    </div>
  );
};
export default IntroPage;
