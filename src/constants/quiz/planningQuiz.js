/**
 * Planning Phase Quiz Configuration
 * 
 * Educational quiz questions focused on the planning phase of the Software Development Life Cycle.
 * This quiz tests students' understanding of:
 * - Planning phase objectives and importance
 * - Key planning activities and deliverables
 * - Common planning methodologies and best practices
 * - Planning pitfalls and how to avoid them
 * 
 * Quiz Structure:
 * Each question contains:
 * - question: The question text presented to the student
 * - options: Array of possible answers, each containing:
 *   - text: The answer option text
 *   - correct: Boolean indicating if this is the correct answer
 *   - explanation: Educational explanation provided after answer selection
 * 
 * The explanations serve as learning reinforcement, helping students understand
 * not just what the correct answer is, but why it's correct and why other options are wrong.
 */

/**
 * Traditional SDLC Planning Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical project planning concepts and methodologies in software
 * development. This quiz reinforces learning from the planning phase content.
 * 
 * Quiz Focus Areas:
 * - Project scope definition and requirements analysis
 * - Resource planning and team composition
 * - Timeline estimation and milestone planning
 * - Risk assessment and mitigation strategies
 * - Budget planning and cost estimation
 * - Communication and stakeholder management
 * 
 * Educational Design:
 * - Multiple choice questions covering planning fundamentals
 * - Correct answers reinforce project management principles
 * - Wrong answer explanations clarify planning misconceptions
 * - Real-world project scenarios and decision-making
 * - Integration of technical and business planning aspects
 * 
 * Assessment Objectives:
 * - Verify understanding of planning phase fundamentals
 * - Test knowledge of project management best practices
 * - Assess ability to make informed planning decisions
 * - Prepare students for subsequent development phases
 * 
 * This quiz ensures students have mastered traditional planning methodologies
 * before progressing to AI-enhanced planning approaches and actual development.
 */

/**
 * Planning Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional project planning concepts,
 * methodologies, and best practices in software development.
 */
export const planningQuiz = [
  {
    question: "What is the primary purpose of the Planning phase in SDLC?",
    options: [
      {
        text: "To write the actual code",
        correct: false,
        explanation: "Code writing happens in the Implementation phase, not Planning."
      },
      {
        text: "To define objectives, gather requirements, and create a roadmap",
        correct: true,
        explanation: "Correct! The Planning phase focuses on understanding what needs to be built and creating a strategy to build it."
      },
      {
        text: "To test the software for bugs",
        correct: false,
        explanation: "Testing occurs in the Testing phase, after implementation."
      },
      {
        text: "To deploy the software to production",
        correct: false,
        explanation: "Deployment happens in the Deployment phase, at the end of the development cycle."
      }
    ]
  },
  {
    question: "Which of the following is NOT a key component of project planning?",
    options: [
      {
        text: "Defining objectives and scope",
        correct: false,
        explanation: "Defining objectives and scope is essential for successful project planning."
      },
      {
        text: "Creating detailed code documentation",
        correct: true,
        explanation: "Correct! Code documentation is created during implementation, not during the initial planning phase."
      },
      {
        text: "Resource assessment and allocation",
        correct: false,
        explanation: "Resource assessment is crucial for determining what's needed to complete the project."
      },
      {
        text: "Risk identification and mitigation strategies",
        correct: false,
        explanation: "Risk management is a vital part of project planning to anticipate and handle potential issues."
      }
    ]
  },
  {
    question: "What happens when you skip proper planning in software development?",
    options: [
      {
        text: "The project completes faster",
        correct: false,
        explanation: "Skipping planning typically leads to delays, rework, and inefficiencies."
      },
      {
        text: "Scope creep, missed deadlines, and budget overruns",
        correct: true,
        explanation: "Correct! Without proper planning, projects often suffer from unclear requirements, unrealistic timelines, and uncontrolled changes."
      },
      {
        text: "Better team collaboration",
        correct: false,
        explanation: "Poor planning usually leads to confusion and miscommunication among team members."
      },
      {
        text: "Higher code quality",
        correct: false,
        explanation: "Lack of planning typically results in rushed development and lower quality code."
      }
    ]
  }
];