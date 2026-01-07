/**
 * Traditional SDLC Analysis Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical requirements analysis concepts and methodologies. This quiz
 * reinforces learning from the analysis phase content.
 * 
 * Quiz Focus Areas:
 * - Requirements gathering techniques and best practices
 * - Stakeholder identification and engagement strategies
 * - Analysis methodologies and frameworks
 * - Documentation standards and practices
 * - Quality criteria for requirements
 * - Common analysis pitfalls and how to avoid them
 * 
 * Educational Design:
 * - Multiple choice questions with detailed explanations
 * - Correct answers reinforce key concepts
 * - Wrong answer explanations clarify common misconceptions
 * - Progressive difficulty from basic to advanced concepts
 * - Real-world scenarios and practical applications
 * 
 * Assessment Objectives:
 * - Verify understanding of analysis phase fundamentals
 * - Test practical application of analysis techniques
 * - Assess knowledge of industry best practices
 * - Prepare students for AI-enhanced analysis concepts
 * 
 * This quiz serves as a checkpoint to ensure students have mastered
 * traditional analysis methods before progressing to AI-augmented approaches.
 */

/**
 * Analysis Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional requirements analysis concepts,
 * techniques, and best practices in software development.
 */
export const analysisQuiz = [
  {
    question: "What is the main goal of the Analysis phase in SDLC?",
    options: [
      {
        text: "To write technical specifications",
        correct: false,
        explanation: "Technical specifications are created during the Design phase, not Analysis."
      },
      {
        text: "To understand and document what the system should do",
        correct: true,
        explanation: "Correct! The Analysis phase focuses on gathering, analyzing, and documenting functional and non-functional requirements."
      },
      {
        text: "To choose the programming language",
        correct: false,
        explanation: "Technology choices are typically made during the Design phase."
      },
      {
        text: "To create user interfaces",
        correct: false,
        explanation: "User interface creation happens during the Design and Implementation phases."
      }
    ]
  },
  {
    question: "Which technique is commonly used for requirements gathering?",
    options: [
      {
        text: "Code reviews",
        correct: false,
        explanation: "Code reviews are part of the development process, not requirements gathering."
      },
      {
        text: "Stakeholder interviews and workshops",
        correct: true,
        explanation: "Correct! Interviewing stakeholders and conducting workshops are primary methods for understanding business needs."
      },
      {
        text: "Unit testing",
        correct: false,
        explanation: "Unit testing occurs during the Implementation phase to verify code functionality."
      },
      {
        text: "Database optimization",
        correct: false,
        explanation: "Database optimization is a technical implementation detail, not a requirements gathering technique."
      }
    ]
  },
  {
    question: "What are functional requirements?",
    options: [
      {
        text: "Requirements about system performance and security",
        correct: false,
        explanation: "These are non-functional requirements that define how well the system should perform."
      },
      {
        text: "Requirements that specify what the system should do",
        correct: true,
        explanation: "Correct! Functional requirements describe the specific behaviors, functions, and features the system must provide."
      },
      {
        text: "Requirements about the development process",
        correct: false,
        explanation: "Development process requirements are project management concerns, not functional requirements."
      },
      {
        text: "Requirements about hardware specifications",
        correct: false,
        explanation: "Hardware specifications are typically non-functional or technical requirements."
      }
    ]
  }
];