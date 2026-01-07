/**
 * Traditional SDLC Testing Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical software testing concepts and quality assurance practices.
 * This quiz reinforces learning from the testing phase content.
 * 
 * Quiz Focus Areas:
 * - Test planning and strategy development
 * - Test case design and execution methodologies
 * - Different types of testing (unit, integration, system, UAT)
 * - Manual testing processes and documentation
 * - Defect tracking and bug lifecycle management
 * - Quality metrics and testing best practices
 * 
 * Educational Design:
 * - Multiple choice questions covering testing fundamentals
 * - Correct answers reinforce quality assurance principles
 * - Wrong answer explanations clarify testing misconceptions
 * - Practical testing scenarios and decision-making
 * - Industry standard testing methodologies
 * 
 * Assessment Objectives:
 * - Verify understanding of testing phase fundamentals
 * - Test knowledge of quality assurance best practices
 * - Assess ability to design effective testing strategies
 * - Prepare students for deployment and maintenance phases
 * 
 * This quiz ensures students have mastered traditional testing methodologies
 * before progressing to AI-enhanced testing approaches.
 */

/**
 * Testing Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional software testing concepts,
 * quality assurance practices, and testing methodologies.
 */
export const testingQuiz = [
  {
    question: "What is the primary purpose of software testing?",
    options: [
      {
        text: "To prove the software has no bugs",
        correct: false,
        explanation: "Testing can find bugs but cannot prove their complete absence. It helps identify and reduce defects."
      },
      {
        text: "To identify defects and ensure quality",
        correct: true,
        explanation: "Correct! Testing aims to find defects, verify requirements are met, and ensure the software meets quality standards."
      },
      {
        text: "To slow down the development process",
        correct: false,
        explanation: "While testing takes time, it actually speeds up overall delivery by catching issues early."
      },
      {
        text: "To replace code reviews",
        correct: false,
        explanation: "Testing and code reviews are complementary practices, both important for quality assurance."
      }
    ]
  },
  {
    question: "Which type of testing focuses on individual components or modules?",
    options: [
      {
        text: "Integration testing",
        correct: false,
        explanation: "Integration testing focuses on how different components work together."
      },
      {
        text: "Unit testing",
        correct: true,
        explanation: "Correct! Unit testing examines individual components or modules in isolation to verify they work as expected."
      },
      {
        text: "System testing",
        correct: false,
        explanation: "System testing evaluates the complete integrated system as a whole."
      },
      {
        text: "Acceptance testing",
        correct: false,
        explanation: "Acceptance testing verifies the system meets business requirements and is ready for deployment."
      }
    ]
  },
  {
    question: "What is the benefit of automated testing?",
    options: [
      {
        text: "It eliminates the need for manual testing",
        correct: false,
        explanation: "Automated testing complements but doesn't replace manual testing - both have their place."
      },
      {
        text: "It provides fast, repeatable, and consistent test execution",
        correct: true,
        explanation: "Correct! Automated tests can run quickly and consistently, providing rapid feedback and enabling continuous integration."
      },
      {
        text: "It finds all possible bugs",
        correct: false,
        explanation: "No testing approach can find all bugs - automated testing has limitations like any other approach."
      },
      {
        text: "It requires no maintenance",
        correct: false,
        explanation: "Automated tests need maintenance as the software evolves and requirements change."
      }
    ]
  }
];