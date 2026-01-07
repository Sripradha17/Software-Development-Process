/**
 * Case Study List Component
 * 
 * Displays a curated collection of real-world software development case studies
 * organized by SDLC type (traditional vs AI-augmented). Features include:
 * - Grid layout of case study cards with previews
 * - Difficulty level indicators and time estimates
 * - Technology stack tags and project type categorization
 * - Smooth animations for enhanced user experience
 * - Type-based filtering between traditional and AI-enhanced case studies
 * 
 * Case studies provide practical learning experiences by presenting actual
 * industry scenarios with challenges, decisions, and outcomes that students
 * can learn from and apply to their own projects.
 */

// React core imports for component functionality
import React from 'react';                        // Core React library

// Animation library for smooth visual transitions
import { motion } from 'framer-motion';           // Animation components for enhanced UX

// React Router imports for navigation and URL parameters
import { Link, useParams, useNavigate } from 'react-router-dom'; // Navigation and parameter handling

// UI component and configuration imports
import Menu from './Menu';                               // Navigation menu component
import sdlcMenuItems from '../constants/sdlc/menuItems'; // Traditional SDLC navigation items
import aiMenuItems from '../constants/ai-sdlc/aiMenuItems'; // AI-augmented navigation items

// Case study data imports
import { sdlcCaseStudies } from '../constants/caseStudy/sdlcCaseStudies';       // Traditional case study collection
import { aiSdlcCaseStudies } from '../constants/caseStudy/aiSdlcCaseStudies';   // AI-enhanced case study collection

// Styling configuration
import styles from '../styles/index';                   // Centralized styling system

/**
 * CaseStudyList Component
 * 
 * Renders a filtered collection of case studies based on the selected type.
 * Provides navigation to individual case study experiences.
 */
const CaseStudyList = () => {
  // Extract case study type from URL parameters
  const { type } = useParams();           // Get 'sdlc' or 'ai-sdlc' from URL
  const navigate = useNavigate();         // Navigation hook for programmatic routing
  
  // Select appropriate data sources based on case study type
  const caseStudies = type === 'ai-sdlc' ? aiSdlcCaseStudies : sdlcCaseStudies; // Case study data array
  const menuItems = type === 'ai-sdlc' ? aiMenuItems : sdlcMenuItems;           // Navigation menu items
  const title = type === 'ai-sdlc' ? 'AI-Enhanced SDLC Case Studies' : 'SDLC Case Studies'; // Page title

  // Animation configuration for smooth visual transitions
  // These variants define how case study cards appear and animate
  
  // Main container animation with staggered children for sequential appearance
  const containerVariants = {
    hidden: { opacity: 0 },                          // Initial invisible state
    visible: {
      opacity: 1,                                     // Final visible state
      transition: {
        duration: 0.3,                                // Total animation duration
        staggerChildren: 0.15                        // Delay between child card animations
      }
    }
  };

  // Individual case study card animation with slide-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },                   // Start invisible and below final position
    visible: {
      opacity: 1,                                     // End visible
      y: 0,                                           // End at normal position
      transition: { 
        duration: 0.5,                                // Animation duration
        ease: "easeOut"                               // Smooth easing curve
      }
    }
  };

  // Card hover and interaction animation with scale effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },             // Start slightly smaller and invisible
    visible: {
      opacity: 1,                                     // End visible
      scale: 1,                                       // End at normal size
      transition: { 
        duration: 0.4,                                // Animation duration
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.absoluteTopRight}>
        <Menu items={menuItems} title="Menu" />
      </div>
      
      <Link to="/" style={styles.backLink}>
        ← Back to Home
      </Link>

      <motion.div 
        style={styles.caseStudyListContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div style={styles.caseStudyListHeader} variants={itemVariants}>
          <h1 style={styles.caseStudyListTitle}>{title}</h1>
          <p style={styles.caseStudyListSubtitle}>
            Explore real-world scenarios and make critical decisions at each stage of the 
            {type === 'ai-sdlc' ? ' AI-enhanced' : ''} software development lifecycle.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div style={styles.caseStudyGrid} variants={itemVariants}>
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              style={styles.caseStudyCard}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: styles.caseStudyCardHover.boxShadow 
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/case-study/${type}/${caseStudy.id}`)}
            >
              <div style={styles.caseStudyCardHeader}>
                <h3 style={styles.caseStudyCardTitle}>{caseStudy.title}</h3>
                <div style={styles.caseStudyBadge}>
                  {caseStudy.stages.length} Stages
                </div>
              </div>
              
              <p style={styles.caseStudyCardDescription}>
                {caseStudy.description}
              </p>

              <div style={styles.caseStudyScenario}>
                <h4 style={styles.scenarioTitle}>Scenario:</h4>
                <p style={styles.scenarioText}>
                  {caseStudy.scenario.length > 150 
                    ? `${caseStudy.scenario.substring(0, 150)}...`
                    : caseStudy.scenario
                  }
                </p>
              </div>

              <div style={styles.caseStudyStages}>
                <h4 style={styles.stagesTitle}>Stages Covered:</h4>
                <div style={styles.stagesList}>
                  {caseStudy.stages.slice(0, 4).map((stage, stageIndex) => (
                    <span key={stage.id} style={styles.stageTag}>
                      {stage.title.split(' ')[0]}
                      {stageIndex < 3 && stageIndex < caseStudy.stages.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {caseStudy.stages.length > 4 && (
                    <span style={styles.stageTag}>+{caseStudy.stages.length - 4} more</span>
                  )}
                </div>
              </div>

              <div style={styles.caseStudyFooter}>
                <motion.button
                  style={styles.startCaseStudyButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Case Study
                </motion.button>
                
                <div style={styles.difficultyIndicator}>
                  <span style={styles.difficultyLabel}>
                    {type === 'ai-sdlc' ? 'Advanced' : 'Intermediate'}
                  </span>
                  <div style={styles.difficultyStars}>
                    {'★'.repeat(type === 'ai-sdlc' ? 4 : 3)}{'☆'.repeat(type === 'ai-sdlc' ? 1 : 2)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Actions */}
        <motion.div style={styles.caseStudyListFooter} variants={itemVariants}>
          <motion.button
            style={styles.backToLearningButton}
            onClick={() => navigate(type === 'ai-sdlc' ? '/ai-augmented-software-development' : '/learn-software-development')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to {type === 'ai-sdlc' ? 'AI-Enhanced ' : ''}Learning Path
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CaseStudyList;