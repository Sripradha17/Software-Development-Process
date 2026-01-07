/**
 * AI-Enhanced Testing Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of AI-augmented testing concepts and intelligent quality assurance.
 * This quiz reinforces learning from the AI-enhanced testing phase content.
 * 
 * Quiz Focus Areas:
 * - Automated test case generation from requirements and code
 * - AI-powered test data creation and edge case identification
 * - Intelligent bug prediction and root cause analysis
 * - Smart performance testing with bottleneck detection
 * - Automated accessibility testing and compliance verification
 * - Predictive quality metrics and risk assessment
 * 
 * Educational Design:
 * - Multiple choice questions with AI testing scenarios
 * - Correct answers explain AI testing benefits and automation
 * - Wrong answer explanations clarify AI testing limitations
 * - Real-world AI testing tools and platform examples
 * - Integration of traditional testing with AI enhancements
 * 
 * Assessment Objectives:
 * - Verify understanding of AI applications in software testing
 * - Test knowledge of intelligent testing methodologies
 * - Assess ability to leverage AI for comprehensive quality assurance
 * - Evaluate understanding of predictive testing approaches
 * 
 * This quiz builds on traditional testing knowledge to assess student
 * readiness for modern, AI-augmented quality assurance practices.
 */

/**
 * AI-Enhanced Testing Phase Assessment Questions
 * 
 * Comprehensive quiz covering AI applications in testing,
 * intelligent quality assurance, and automated testing workflows.
 */
export const aiTestingQuiz = [
  {
    question: "How does AI enhance automated testing in software development?",
    options: [
      {
        text: "AI eliminates the need for manual testing completely",
        correct: false,
        explanation: "Manual testing remains important for usability, exploratory testing, and validating user experience aspects that automation cannot cover."
      },
      {
        text: "AI can generate test cases, identify edge cases, and optimize test coverage automatically",
        correct: true,
        explanation: "Correct! AI can analyze code paths, generate comprehensive test scenarios, identify unusual input combinations, and ensure maximum test coverage with minimal redundancy."
      },
      {
        text: "AI only works with unit tests",
        correct: false,
        explanation: "AI can assist with various testing levels including unit, integration, system, and end-to-end testing."
      },
      {
        text: "AI makes test maintenance unnecessary",
        correct: false,
        explanation: "Test maintenance is still required. AI can help update tests automatically when code changes, but human oversight ensures tests remain relevant."
      }
    ]
  },
  {
    question: "What is a key benefit of AI-powered test data generation?",
    options: [
      {
        text: "AI creates only valid data scenarios",
        correct: false,
        explanation: "AI should generate both valid and invalid data scenarios to test error handling and edge cases comprehensively."
      },
      {
        text: "AI can create realistic, diverse datasets while protecting sensitive information",
        correct: true,
        explanation: "Correct! AI can generate synthetic data that maintains statistical properties of real data while ensuring privacy and creating comprehensive test scenarios."
      },
      {
        text: "AI eliminates the need for test data planning",
        correct: false,
        explanation: "Test data strategy remains important. AI helps execute the strategy more efficiently and comprehensively."
      },
      {
        text: "AI only generates numerical test data",
        correct: false,
        explanation: "AI can generate various data types including text, dates, images, and complex structured data based on defined patterns."
      }
    ]
  },
  {
    question: "How can AI improve defect prediction and prevention?",
    options: [
      {
        text: "AI guarantees bug-free software",
        correct: false,
        explanation: "No approach can guarantee completely bug-free software. AI helps reduce defects but cannot eliminate them entirely."
      },
      {
        text: "AI analyzes code complexity and historical patterns to predict likely defect locations",
        correct: true,
        explanation: "Correct! AI can analyze code metrics, change history, and defect patterns to identify high-risk areas that deserve extra attention and testing."
      },
      {
        text: "AI only predicts syntax errors",
        correct: false,
        explanation: "AI can predict various types of defects including logic errors, performance issues, security vulnerabilities, and integration problems."
      },
      {
        text: "AI makes code reviews unnecessary for defect prevention",
        correct: false,
        explanation: "Code reviews remain valuable for defect prevention, knowledge sharing, and ensuring code quality beyond what AI can detect."
      }
    ]
  }
];