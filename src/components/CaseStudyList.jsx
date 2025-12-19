import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import sdlcMenuItems from '../constants/sdlc/menuItems';
import aiMenuItems from '../constants/ai-sdlc/aiMenuItems';
import { sdlcCaseStudies } from '../constants/caseStudy/sdlcCaseStudies';
import { aiSdlcCaseStudies } from '../constants/caseStudy/aiSdlcCaseStudies';
import styles from '../styles/index';

const CaseStudyList = () => {
  const { type } = useParams(); // 'sdlc' or 'ai-sdlc'
  const navigate = useNavigate();
  
  // Select case study data based on type
  const caseStudies = type === 'ai-sdlc' ? aiSdlcCaseStudies : sdlcCaseStudies;
  const menuItems = type === 'ai-sdlc' ? aiMenuItems : sdlcMenuItems;
  const title = type === 'ai-sdlc' ? 'AI-Enhanced SDLC Case Studies' : 'SDLC Case Studies';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
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