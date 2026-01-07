/**
 * Traditional SDLC Implementation Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical software implementation concepts and coding practices.
 * This quiz reinforces learning from the implementation phase content.
 * 
 * Quiz Focus Areas:
 * - Development environment setup and configuration
 * - Coding standards and best practices
 * - Version control and collaborative development
 * - Code documentation and inline commenting
 * - Unit testing and test-driven development
 * - Code quality and maintainability principles
 * 
 * Educational Design:
 * - Multiple choice questions covering implementation fundamentals
 * - Correct answers reinforce coding best practices
 * - Wrong answer explanations clarify implementation misconceptions
 * - Practical coding scenarios and decision-making
 * - Professional development workflow understanding
 * 
 * Assessment Objectives:
 * - Verify understanding of implementation phase fundamentals
 * - Test knowledge of professional coding practices
 * - Assess ability to write maintainable, quality code
 * - Prepare students for testing and deployment phases
 * 
 * This quiz ensures students have mastered traditional implementation
 * methodologies before progressing to AI-assisted coding techniques.
 */

/**
 * Implementation Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional software implementation concepts,
 * coding practices, and professional development workflows.
 */
export const implementationQuiz = [
  {
    question: "What is the main activity during the Implementation phase?",
    options: [
      {
        text: "Gathering user requirements",
        correct: false,
        explanation: "Requirements gathering happens during the Analysis phase."
      },
      {
        text: "Writing and coding the actual software",
        correct: true,
        explanation: "Correct! The Implementation phase is where developers write the actual code based on the design specifications."
      },
      {
        text: "Creating system architecture diagrams",
        correct: false,
        explanation: "Architecture diagrams are created during the Design phase."
      },
      {
        text: "Deploying to production servers",
        correct: false,
        explanation: "Deployment happens in the Deployment phase after implementation is complete."
      }
    ]
  },
  {
    question: "Which practice helps maintain code quality during implementation?",
    options: [
      {
        text: "Writing code as quickly as possible",
        correct: false,
        explanation: "Speed without quality leads to bugs and maintenance issues."
      },
      {
        text: "Code reviews and pair programming",
        correct: true,
        explanation: "Correct! Code reviews and pair programming help catch errors early, share knowledge, and maintain coding standards."
      },
      {
        text: "Avoiding documentation",
        correct: false,
        explanation: "Documentation is crucial for maintaining and understanding code over time."
      },
      {
        text: "Working in isolation",
        correct: false,
        explanation: "Collaboration and communication are essential for successful implementation."
      }
    ]
  },
  {
    question: "What is version control used for during implementation?",
    options: [
      {
        text: "To make the code run faster",
        correct: false,
        explanation: "Version control doesn't affect code performance."
      },
      {
        text: "To track changes and collaborate safely",
        correct: true,
        explanation: "Correct! Version control systems track code changes, enable collaboration, and provide backup and rollback capabilities."
      },
      {
        text: "To automatically test the code",
        correct: false,
        explanation: "While CI/CD can integrate with version control, testing requires separate tools and processes."
      },
      {
        text: "To deploy code to production",
        correct: false,
        explanation: "Version control stores code but doesn't deploy it - deployment requires additional tools and processes."
      }
    ]
  }
];