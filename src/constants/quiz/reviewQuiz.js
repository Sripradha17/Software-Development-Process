/**
 * Traditional SDLC Review Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of classical code review concepts and quality assurance practices.
 * This quiz reinforces learning from the review phase content.
 * 
 * Quiz Focus Areas:
 * - Manual code review processes and best practices
 * - Quality criteria and coding standards compliance
 * - Peer review techniques and collaborative practices
 * - Documentation review and technical writing standards
 * - Test coverage analysis and quality metrics
 * - Technical debt identification and management
 * 
 * Educational Design:
 * - Multiple choice questions covering review fundamentals
 * - Correct answers reinforce quality assurance principles
 * - Wrong answer explanations clarify review misconceptions
 * - Real-world review scenarios and decision-making
 * - Professional collaboration and feedback practices
 * 
 * Assessment Objectives:
 * - Verify understanding of review phase fundamentals
 * - Test knowledge of quality assurance best practices
 * - Assess ability to conduct effective code reviews
 * - Prepare students for deployment and operational phases
 * 
 * This quiz ensures students have mastered traditional review methodologies
 * before progressing to AI-enhanced review and analysis techniques.
 */

/**
 * Review Phase Assessment Questions
 * 
 * Comprehensive quiz covering traditional code review concepts,
 * quality assurance practices, and peer review methodologies.
 */
export const reviewQuiz = [
  {
    question: "What is the main purpose of the Review phase in SDLC?",
    options: [
      {
        text: "To write new features",
        correct: false,
        explanation: "Writing new features is part of implementation, not review."
      },
      {
        text: "To evaluate project success and identify lessons learned",
        correct: true,
        explanation: "Correct! The Review phase focuses on assessing what went well, what didn't, and extracting valuable lessons for future projects."
      },
      {
        text: "To deploy the software",
        correct: false,
        explanation: "Deployment happens in the Deployment phase, before review."
      },
      {
        text: "To gather initial requirements",
        correct: false,
        explanation: "Requirements gathering occurs during the Analysis phase at the beginning of the project."
      }
    ]
  },
  {
    question: "Which activity is typically part of a project retrospective?",
    options: [
      {
        text: "Writing new code",
        correct: false,
        explanation: "Retrospectives focus on reflection and learning, not new development."
      },
      {
        text: "Discussing what worked well and what could be improved",
        correct: true,
        explanation: "Correct! Retrospectives involve reflecting on the process, celebrating successes, and identifying areas for improvement."
      },
      {
        text: "Creating technical specifications",
        correct: false,
        explanation: "Technical specifications are created during the Design phase."
      },
      {
        text: "Testing new features",
        correct: false,
        explanation: "Testing occurs during the Testing phase, not during review."
      }
    ]
  },
  {
    question: "Why is documentation important during the Review phase?",
    options: [
      {
        text: "To slow down future projects",
        correct: false,
        explanation: "Good documentation actually speeds up future projects by preserving knowledge."
      },
      {
        text: "To preserve knowledge and lessons learned for future projects",
        correct: true,
        explanation: "Correct! Documentation ensures valuable insights and lessons aren't lost and can benefit future projects and team members."
      },
      {
        text: "To increase project costs",
        correct: false,
        explanation: "While documentation has a cost, it provides value by reducing future development time and errors."
      },
      {
        text: "To satisfy compliance requirements only",
        correct: false,
        explanation: "While compliance may require documentation, its primary value is knowledge preservation and transfer."
      }
    ]
  }
];