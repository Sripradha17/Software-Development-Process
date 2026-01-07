/**
 * AI-Enhanced Review Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of AI-augmented code review concepts and intelligent quality analysis.
 * This quiz reinforces learning from the AI-enhanced review phase content.
 * 
 * Quiz Focus Areas:
 * - Intelligent code analysis for bugs and security vulnerabilities
 * - Automated best practice recommendations and standards compliance
 * - AI-powered documentation quality assessment
 * - Smart test coverage analysis with gap identification
 * - Automated accessibility compliance checking
 * - Intelligent technical debt assessment and prioritization
 * 
 * Educational Design:
 * - Multiple choice questions with AI review scenarios
 * - Correct answers explain AI review benefits and automation
 * - Wrong answer explanations clarify AI review limitations
 * - Real-world AI code review tools and platform examples
 * - Integration of traditional review processes with AI enhancements
 * 
 * Assessment Objectives:
 * - Verify understanding of AI applications in code review
 * - Test knowledge of intelligent quality analysis techniques
 * - Assess ability to leverage AI for comprehensive code assessment
 * - Evaluate understanding of automated review workflows
 * 
 * This quiz builds on traditional review knowledge to assess student
 * readiness for modern, AI-augmented quality assurance practices.
 */

/**
 * AI-Enhanced Review Phase Assessment Questions
 * 
 * Comprehensive quiz covering AI applications in code review,
 * intelligent quality analysis, and automated review workflows.
 */
export const aiReviewQuiz = [
  {
    question: "How does AI enhance code review processes in software development?",
    options: [
      {
        text: "AI completely replaces human code reviewers",
        correct: false,
        explanation: "Human reviewers provide business context, architectural understanding, and creative insights that AI cannot replace."
      },
      {
        text: "AI can automatically identify potential issues and suggest improvements before human review",
        correct: true,
        explanation: "Correct! AI can perform initial scans for common issues, security vulnerabilities, performance problems, and style violations, making human reviews more focused and effective."
      },
      {
        text: "AI only checks for syntax errors",
        correct: false,
        explanation: "AI code review tools analyze much more than syntax, including logic patterns, security issues, performance bottlenecks, and maintainability concerns."
      },
      {
        text: "AI makes code review standards unnecessary",
        correct: false,
        explanation: "Standards remain important. AI helps enforce existing standards consistently and can suggest improvements to coding guidelines."
      }
    ]
  },
  {
    question: "What role does AI play in project retrospectives and lessons learned?",
    options: [
      {
        text: "AI attends meetings and provides real-time feedback",
        correct: false,
        explanation: "While AI can provide data insights, human interaction and discussion are essential for meaningful retrospectives."
      },
      {
        text: "AI can analyze project metrics and patterns to identify improvement opportunities",
        correct: true,
        explanation: "Correct! AI can process development metrics, team velocity, defect patterns, and other data to highlight trends and suggest areas for process improvement."
      },
      {
        text: "AI eliminates the need for team retrospectives",
        correct: false,
        explanation: "Team retrospectives remain crucial for team building, communication, and capturing insights that data alone cannot provide."
      },
      {
        text: "AI only works with technical metrics",
        correct: false,
        explanation: "AI can analyze various metrics including team collaboration patterns, communication effectiveness, and process efficiency beyond just technical measures."
      }
    ]
  },
  {
    question: "How can AI assist with knowledge management and documentation review?",
    options: [
      {
        text: "AI writes all documentation automatically",
        correct: false,
        explanation: "While AI can help generate documentation, human expertise is needed to ensure accuracy, completeness, and relevance to business needs."
      },
      {
        text: "AI can identify outdated documentation, suggest updates, and ensure consistency across documents",
        correct: true,
        explanation: "Correct! AI can compare code changes with documentation, flag inconsistencies, suggest updates, and help maintain comprehensive, current documentation."
      },
      {
        text: "AI makes documentation reviews unnecessary",
        correct: false,
        explanation: "Human review remains important for ensuring documentation serves its intended audience and communicates effectively."
      },
      {
        text: "AI only reviews technical documentation",
        correct: false,
        explanation: "AI can assist with various types of documentation including user guides, process documents, architectural decisions, and business requirements."
      }
    ]
  }
];