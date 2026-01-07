/**
 * Process Visualization Component
 * 
 * Interactive visualization component that displays SDLC phase processes
 * with animated step-by-step breakdowns. Features include:
 * - Dynamic visualization data for different SDLC phases
 * - Support for both traditional and AI-augmented process flows
 * - Animated step progression with auto-play functionality
 * - Interactive controls for manual step navigation
 * - Visual icons and color coding for different process types
 * - Detailed sub-step breakdowns with AI enhancement highlights
 * - Progress indicators and visual feedback for learning
 * 
 * The component adapts its content and presentation based on:
 * - The specific SDLC stage being visualized (planning, analysis, design, etc.)
 * - Whether AI augmentation features should be highlighted
 * - User interaction preferences (auto-play vs manual control)
 * 
 * This visualization helps students understand the detailed workflow
 * within each SDLC phase and how AI can enhance traditional processes.
 * 
 * @param {Object} props - Component props
 * @param {string} props.stage - SDLC stage to visualize (planning, analysis, design, etc.)
 * @param {boolean} props.isAI - Whether to show AI-augmented features and enhancements
 */

// React core imports for component functionality
import React, { useState, useEffect } from 'react';   // Core React with hooks for state and lifecycle management

// Animation library for smooth visual transitions
import { motion, AnimatePresence } from 'framer-motion'; // Advanced animation components for enhanced UX

// Icon library for visual elements and process representation
import { 
  FileText,    // Document and file icons for traditional processes
  Search,      // Search and discovery icons for analysis activities
  Code,        // Development and coding icons for implementation
  CheckSquare, // Testing and validation icons for QA activities
  Rocket,      // Deployment and launch icons for go-live processes
  Settings,    // Configuration and maintenance icons for ongoing operations
  Bot,         // AI and automation icons for enhanced processes
  Zap,         // Performance and efficiency icons for optimizations
  Target,      // Goal and objective icons for planning activities
  Users,       // Team and stakeholder icons for collaborative work
  Clock,       // Time and scheduling icons for timeline management
  BarChart3,   // Analytics and reporting icons for measurement
  Lightbulb    // Innovation and idea icons for creative processes
} from 'lucide-react';

// Styling configuration
import styles from '../../styles/index.js';             // Centralized styling system

/**
 * ProcessVisualization Component
 * 
 * Creates interactive, animated visualizations of SDLC phase workflows
 * with support for both traditional and AI-augmented processes.
 */
const ProcessVisualization = ({ stage, isAI = false }) => {
  // State management for visualization control and progression
  const [activeStep, setActiveStep] = useState(0);        // Currently highlighted step in the process
  const [isPlaying, setIsPlaying] = useState(true);       // Auto-play animation control (starts automatically)

  /**
   * Visualization Data Configuration
   * 
   * Comprehensive data structure defining the visual representation and content
   * for each SDLC stage. Each stage includes:
   * - Stage metadata (title, icon, color scheme)
   * - Step-by-step process breakdown
   * - AI enhancement descriptions for augmented workflows
   * - Sub-step details for comprehensive understanding
   * 
   * The data adapts based on the isAI flag to show either traditional
   * or AI-augmented process variations.
   */
  const visualizationData = {
    // Planning Phase Visualization Configuration
    planning: {
      title: isAI ? 'AI-Augmented Planning Process' : 'Planning Process',  // Dynamic title based on AI mode
      icon: isAI ? Bot : FileText,                                          // AI bot icon vs traditional document icon
      color: isAI ? '#667eea' : '#1ABC9C',                                  // Purple for AI, teal for traditional
      steps: [
        {
          id: 1,
          name: 'Requirement Gathering',                                     // Core activity name
          icon: Search,                                                      // Visual icon for the activity
          aiFeature: 'Automated requirement mining from documents',         // AI enhancement description
          description: 'Collect and analyze stakeholder needs',             // Human-readable description
          subSteps: ['Stakeholder interviews', 'Document analysis', 'Feature prioritization'] // Detailed sub-activities
        },
        {
          id: 2,
          name: 'Scope Definition',                                          // Project boundaries definition
          icon: Target,                                                      // Target icon for goal-setting
          aiFeature: 'AI-powered scope optimization',                       // AI enhancement for scope planning
          description: 'Define project boundaries and deliverables',        // Activity description
          subSteps: ['Feature mapping', 'Constraint identification', 'Success criteria'] // Sub-activity breakdown
        },
        {
          id: 3,
          name: 'Resource Planning',                                         // Team and resource allocation
          icon: Users,                                                       // People icon for resource planning
          aiFeature: 'Predictive resource allocation',
          description: 'Allocate team members and resources',
          subSteps: ['Team assignment', 'Budget allocation', 'Tool selection']
        },
        {
          id: 4,
          name: 'Timeline Creation',
          icon: Clock,
          aiFeature: 'Intelligent scheduling with risk prediction',
          description: 'Create realistic project timelines',
          subSteps: ['Task breakdown', 'Dependency mapping', 'Milestone definition']
        }
      ]
    },
    analysis: {
      title: isAI ? 'AI-Enhanced Analysis Process' : 'Analysis Process',
      icon: isAI ? Bot : BarChart3,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Requirements Analysis',
          icon: FileText,
          aiFeature: 'NLP-powered requirement extraction',
          description: 'Break down and understand requirements',
          subSteps: ['Functional requirements', 'Non-functional requirements', 'Constraints']
        },
        {
          id: 2,
          name: 'System Analysis',
          icon: Settings,
          aiFeature: 'Automated system modeling',
          description: 'Analyze existing systems and interfaces',
          subSteps: ['System architecture', 'Data flow analysis', 'Integration points']
        },
        {
          id: 3,
          name: 'Risk Assessment',
          icon: Target,
          aiFeature: 'Predictive risk modeling',
          description: 'Identify and evaluate potential risks',
          subSteps: ['Risk identification', 'Impact analysis', 'Mitigation strategies']
        },
        {
          id: 4,
          name: 'Feasibility Study',
          icon: CheckSquare,
          aiFeature: 'AI-assisted feasibility scoring',
          description: 'Evaluate technical and business feasibility',
          subSteps: ['Technical feasibility', 'Economic analysis', 'Operational viability']
        }
      ]
    },
    design: {
      title: isAI ? 'AI-Assisted Design Process' : 'Design Process',
      icon: isAI ? Bot : Settings,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Architecture Design',
          icon: Settings,
          aiFeature: 'AI-generated architecture patterns',
          description: 'Design system architecture and components',
          subSteps: ['System architecture', 'Component design', 'Technology selection']
        },
        {
          id: 2,
          name: 'UI/UX Design',
          icon: Settings,
          aiFeature: 'AI-powered design suggestions',
          description: 'Create user interface and experience design',
          subSteps: ['Wireframes', 'Mockups', 'User flows']
        },
        {
          id: 3,
          name: 'Database Design',
          icon: BarChart3,
          aiFeature: 'Automated schema optimization',
          description: 'Design data storage and relationships',
          subSteps: ['Entity modeling', 'Schema design', 'Query optimization']
        },
        {
          id: 4,
          name: 'API Design',
          icon: Zap,
          aiFeature: 'Smart API specification generation',
          description: 'Design application interfaces',
          subSteps: ['Endpoint design', 'Data contracts', 'Documentation']
        }
      ]
    },
    implementation: {
      title: isAI ? 'AI-Enhanced Implementation' : 'Implementation Process',
      icon: isAI ? Bot : Code,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Code Development',
          icon: Code,
          aiFeature: 'AI-assisted code generation',
          description: 'Write and develop application code',
          subSteps: ['Feature implementation', 'Code review', 'Documentation']
        },
        {
          id: 2,
          name: 'Integration',
          icon: Zap,
          aiFeature: 'Automated integration testing',
          description: 'Integrate components and services',
          subSteps: ['Component integration', 'API integration', 'System integration']
        },
        {
          id: 3,
          name: 'Quality Assurance',
          icon: CheckSquare,
          aiFeature: 'AI-powered code quality analysis',
          description: 'Ensure code quality and standards',
          subSteps: ['Code standards', 'Performance optimization', 'Security review']
        },
        {
          id: 4,
          name: 'Version Control',
          icon: Settings,
          aiFeature: 'Intelligent merge conflict resolution',
          description: 'Manage code versions and changes',
          subSteps: ['Branching strategy', 'Merge management', 'Release tagging']
        }
      ]
    },
    testing: {
      title: isAI ? 'AI-Powered Testing Process' : 'Testing Process',
      icon: isAI ? Bot : CheckSquare,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Test Planning',
          icon: FileText,
          aiFeature: 'AI-generated test scenarios',
          description: 'Plan comprehensive testing strategy',
          subSteps: ['Test strategy', 'Test cases', 'Test environment']
        },
        {
          id: 2,
          name: 'Unit Testing',
          icon: Target,
          aiFeature: 'Automated unit test generation',
          description: 'Test individual components',
          subSteps: ['Function testing', 'Module testing', 'Code coverage']
        },
        {
          id: 3,
          name: 'Integration Testing',
          icon: Zap,
          aiFeature: 'Smart integration test orchestration',
          description: 'Test component interactions',
          subSteps: ['API testing', 'Database testing', 'Service testing']
        },
        {
          id: 4,
          name: 'System Testing',
          icon: Settings,
          aiFeature: 'AI-driven performance testing',
          description: 'Test complete system functionality',
          subSteps: ['End-to-end testing', 'Performance testing', 'Security testing']
        }
      ]
    },
    deployment: {
      title: isAI ? 'AI-Optimized Deployment' : 'Deployment Process',
      icon: isAI ? Zap : Rocket,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Environment Setup',
          icon: Settings,
          aiFeature: 'Automated environment provisioning',
          description: 'Prepare deployment environment',
          subSteps: ['Server configuration', 'Database setup', 'Security configuration']
        },
        {
          id: 2,
          name: 'Build & Package',
          icon: Code,
          aiFeature: 'AI-optimized build processes',
          description: 'Build and package application',
          subSteps: ['Code compilation', 'Asset bundling', 'Package creation']
        },
        {
          id: 3,
          name: 'Release Management',
          icon: Rocket,
          aiFeature: 'Intelligent release scheduling',
          description: 'Manage application release',
          subSteps: ['Release planning', 'Rollback strategies', 'Feature flags']
        },
        {
          id: 4,
          name: 'Monitoring Setup',
          icon: BarChart3,
          aiFeature: 'AI-powered monitoring alerts',
          description: 'Set up monitoring and logging',
          subSteps: ['Performance monitoring', 'Error tracking', 'User analytics']
        }
      ]
    },
    maintenance: {
      title: isAI ? 'AI-Driven Maintenance' : 'Maintenance Process',
      icon: isAI ? Bot : Settings,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Monitoring',
          icon: BarChart3,
          aiFeature: 'Predictive issue detection',
          description: 'Monitor system performance and health',
          subSteps: ['Performance metrics', 'Error tracking', 'User feedback']
        },
        {
          id: 2,
          name: 'Bug Fixes',
          icon: Settings,
          aiFeature: 'Automated bug prioritization',
          description: 'Identify and fix system issues',
          subSteps: ['Issue identification', 'Root cause analysis', 'Fix implementation']
        },
        {
          id: 3,
          name: 'Updates & Patches',
          icon: Code,
          aiFeature: 'Smart update scheduling',
          description: 'Apply system updates and security patches',
          subSteps: ['Security updates', 'Feature updates', 'Performance improvements']
        },
        {
          id: 4,
          name: 'Evolution',
          icon: Lightbulb,
          aiFeature: 'AI-suggested enhancements',
          description: 'Evolve system based on usage patterns',
          subSteps: ['Usage analysis', 'Feature planning', 'Architecture evolution']
        }
      ]
    },
    review: {
      title: isAI ? 'AI-Enhanced Review Process' : 'Review Process',
      icon: isAI ? Bot : CheckSquare,
      color: isAI ? '#667eea' : '#1ABC9C',
      steps: [
        {
          id: 1,
          name: 'Performance Review',
          icon: BarChart3,
          aiFeature: 'Automated performance analysis',
          description: 'Evaluate system performance metrics',
          subSteps: ['Performance benchmarking', 'Bottleneck identification', 'Optimization recommendations']
        },
        {
          id: 2,
          name: 'Quality Assessment',
          icon: CheckSquare,
          aiFeature: 'AI-powered quality scoring',
          description: 'Assess code and system quality',
          subSteps: ['Code quality metrics', 'Technical debt analysis', 'Best practices compliance']
        },
        {
          id: 3,
          name: 'Stakeholder Feedback',
          icon: Users,
          aiFeature: 'Sentiment analysis of feedback',
          description: 'Gather and analyze stakeholder input',
          subSteps: ['User feedback collection', 'Stakeholder interviews', 'Satisfaction surveys']
        },
        {
          id: 4,
          name: 'Lessons Learned',
          icon: Lightbulb,
          aiFeature: 'Pattern recognition for improvements',
          description: 'Document insights and improvements',
          subSteps: ['Success factors', 'Areas for improvement', 'Knowledge transfer']
        }
      ]
    }
  };

  const currentData = visualizationData[stage] || visualizationData.planning;

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % currentData.steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentData.steps.length]);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
    // Keep animation running even when clicking steps
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const activeStepVariants = {
    scale: [1, 1.1, 1],
    transition: { duration: 0.5, ease: "easeInOut" }
  };

  const renderFlowchartView = () => (
    <motion.div 
      style={styles.visualizationContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div style={styles.processFlow}>
        {currentData.steps.map((step, index) => (
          <motion.div
            key={step.id}
            style={{
              ...styles.processStep,
              backgroundColor: index === activeStep ? 'rgba(26, 188, 156, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderColor: index === activeStep ? '#1ABC9C' : 'rgba(255, 255, 255, 0.3)',
              transform: index === activeStep ? 'scale(1.05)' : 'scale(1)',
              boxShadow: index === activeStep ? '0 8px 32px rgba(26, 188, 156, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
            variants={stepVariants}
            animate={index === activeStep ? activeStepVariants : {}}
            onClick={() => handleStepClick(index)}
            whileHover={{ scale: 1.02, cursor: 'pointer' }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              style={{
                ...styles.processStepIcon,
                backgroundColor: index === activeStep ? '#1ABC9C' : 'rgba(26, 188, 156, 0.2)',
                borderColor: index === activeStep ? '#16A085' : 'rgba(26, 188, 156, 0.4)'
              }}
              animate={{ 
                color: index === activeStep ? '#fff' : '#1ABC9C',
                rotate: index === activeStep && isPlaying ? [0, 360] : 0 
              }}
              transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
            >
              <step.icon size={20} />
            </motion.div>
            
            <div style={styles.stepContent}>
              <h3 style={{
                ...styles.processStepTitle,
                color: index === activeStep ? '#1ABC9C' : '#fff'
              }}>
                {step.name}
              </h3>
              
              <p style={{
                ...styles.processStepDescription,
                color: index === activeStep ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'
              }}>
                {step.description}
              </p>

              {isAI && (
                <div style={styles.aiFeature}>
                  <Bot size={14} />
                  <span>{step.aiFeature}</span>
                </div>
              )}

              <AnimatePresence>
                {index === activeStep && (
                  <motion.div
                    style={styles.subSteps}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.subSteps.map((subStep, subIndex) => (
                      <motion.div
                        key={subIndex}
                        style={styles.subStep}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: subIndex * 0.1 }}
                      >
                        <span style={styles.subStepBullet}>•</span>
                        {subStep}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {index < currentData.steps.length - 1 && (
              <motion.div
                style={styles.flowArrow}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              >
                →
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div 
      style={styles.visualizationSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={styles.visualizationHeader}>
        <div style={styles.visualizationTitle}>
          <currentData.icon size={28} color={currentData.color} />
          <h2 style={styles.visualizationTitleText}>{currentData.title}</h2>
        </div>
        
        <div style={styles.visualizationControls}>
          {/* Auto-playing animation - no controls needed */}
        </div>
      </div>

      {renderFlowchartView()}
    </motion.div>
  );
};

export default ProcessVisualization;