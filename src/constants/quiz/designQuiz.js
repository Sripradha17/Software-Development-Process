/**
 * Traditional SDLC Design Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical system design concepts and architectural principles.
 * This quiz reinforces learning from the design phase content.
 * 
 * Quiz Focus Areas:
 * - System architecture design and documentation
 * - Database design principles and normalization
 * - User interface and user experience design
 * - API design and integration planning
 * - Security architecture and access control
 * - Performance and scalability considerations
 * 
 * Educational Design:
 * - Multiple choice questions covering design fundamentals
 * - Correct answers reinforce architectural best practices
 * - Wrong answer explanations clarify design misconceptions
 * - Scenarios requiring design decision-making
 * - Integration of technical and user-centered design
 * 
 * Assessment Objectives:
 * - Verify understanding of design phase fundamentals
 * - Test knowledge of architectural patterns and principles
 * - Assess ability to make informed design decisions
 * - Prepare students for implementation and testing phases
 * 
 * This quiz ensures students have mastered traditional design methodologies
 * before progressing to implementation or AI-enhanced design approaches.
 */

/**
 * Design Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional system design concepts,
 * architectural principles, and design best practices.
 */
export const designQuiz = [
  {
    question: "What is the primary focus of the Design phase in SDLC?",
    options: [
      {
        text: "Writing the actual code",
        correct: false,
        explanation: "Code writing happens during the Implementation phase, not Design."
      },
      {
        text: "Creating the blueprint and architecture of the system",
        correct: true,
        explanation: "Correct! The Design phase focuses on creating detailed plans, architecture, and specifications for how the system will be built."
      },
      {
        text: "Testing the system for bugs",
        correct: false,
        explanation: "Testing occurs after implementation to verify the system works correctly."
      },
      {
        text: "Gathering user requirements",
        correct: false,
        explanation: "Requirements gathering happens during the Analysis phase."
      }
    ]
  },
  {
    question: "Which design principle emphasizes breaking down complex systems into smaller, manageable components?",
    options: [
      {
        text: "Encapsulation",
        correct: false,
        explanation: "Encapsulation is about hiding internal details, not breaking down complexity."
      },
      {
        text: "Modularity",
        correct: true,
        explanation: "Correct! Modularity involves dividing a system into separate, interchangeable components that can be developed and maintained independently."
      },
      {
        text: "Inheritance",
        correct: false,
        explanation: "Inheritance is an object-oriented concept about deriving new classes from existing ones."
      },
      {
        text: "Polymorphism",
        correct: false,
        explanation: "Polymorphism allows objects of different types to be treated as instances of the same type."
      }
    ]
  },
  {
    question: "What is the purpose of creating prototypes during the Design phase?",
    options: [
      {
        text: "To replace the final product",
        correct: false,
        explanation: "Prototypes are not meant to replace the final product but to inform its development."
      },
      {
        text: "To validate design concepts and gather early feedback",
        correct: true,
        explanation: "Correct! Prototypes help validate design decisions, test user interactions, and gather feedback before full implementation."
      },
      {
        text: "To write production code faster",
        correct: false,
        explanation: "Prototypes are typically quick, rough implementations focused on concept validation, not production code."
      },
      {
        text: "To complete the project early",
        correct: false,
        explanation: "Prototypes are tools for learning and validation, not shortcuts to project completion."
      }
    ]
  }
];