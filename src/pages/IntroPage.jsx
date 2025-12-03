import React from "react";
import { motion } from "framer-motion";
import "./IntroPage.css";
import { useNavigate } from "react-router-dom";
import developmentStages from "./constants/learnSoftwareDevelopment"; 

const IntroPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{padding:'2rem'}}>
      <motion.h1
        className="intro-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Introduction to the Development Process
      </motion.h1>
      <motion.div
        className="main-image"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="introPage.gif"
          alt="Development Process"
          style={{ padding: "2rem", border: "rounded 2px" }}
        />
      </motion.div>

      <motion.div style={{ height: "2rem" }} className="button-section">
        <motion.button
          className="intro-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/learn-software-development")}
        >
          Learn Software Development Process
        </motion.button>

        <motion.button
          className="intro-button"
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
