/**
 * AI-Enhanced Deployment Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of AI-augmented deployment concepts and intelligent infrastructure management.
 * This quiz reinforces learning from the AI-enhanced deployment phase content.
 * 
 * Quiz Focus Areas:
 * - Intelligent deployment orchestration and automation
 * - AI-powered infrastructure provisioning and scaling
 * - Predictive monitoring with anomaly detection
 * - Automated rollback decisions based on performance metrics
 * - Smart load balancing and resource optimization
 * - AI-driven security monitoring and threat detection
 * 
 * Educational Design:
 * - Multiple choice questions with AI deployment scenarios
 * - Correct answers explain AI deployment benefits and automation
 * - Wrong answer explanations clarify AI deployment limitations
 * - Real-world DevOps AI tools and platform examples
 * - Integration of traditional deployment with AI enhancements
 * 
 * Assessment Objectives:
 * - Verify understanding of AI applications in deployment
 * - Test knowledge of intelligent infrastructure management
 * - Assess ability to leverage AI for safer, smarter deployments
 * - Evaluate understanding of predictive operational practices
 * 
 * This quiz builds on traditional deployment knowledge to assess student
 * readiness for modern, AI-augmented DevOps and deployment practices.
 */

/**
 * AI-Enhanced Deployment Phase Assessment Questions
 * 
 * Comprehensive quiz covering AI applications in deployment,
 * intelligent infrastructure management, and automated operations.
 */
export const aiDeploymentQuiz = [
  {
    question: "What is a key advantage of AI-assisted deployment automation?",
    options: [
      {
        text: "AI eliminates all deployment risks",
        correct: false,
        explanation: "While AI reduces risks through better planning and monitoring, deployments still carry inherent risks that require careful management."
      },
      {
        text: "AI can predict deployment issues and optimize release strategies based on historical data",
        correct: true,
        explanation: "Correct! AI can analyze past deployments, system metrics, and environmental factors to predict potential issues and recommend optimal deployment timing and strategies."
      },
      {
        text: "AI makes rollback plans unnecessary",
        correct: false,
        explanation: "Rollback plans remain essential. AI can help automate rollback processes and detect when they're needed, but preparation is still crucial."
      },
      {
        text: "AI only works with cloud deployments",
        correct: false,
        explanation: "AI can assist with various deployment environments including on-premise, cloud, hybrid, and edge computing deployments."
      }
    ]
  },
  {
    question: "How does AI enhance continuous integration and continuous deployment (CI/CD)?",
    options: [
      {
        text: "AI replaces all manual oversight in CI/CD pipelines",
        correct: false,
        explanation: "Human oversight remains important for business decisions, quality gates, and handling exceptions that require contextual understanding."
      },
      {
        text: "AI can optimize pipeline performance, predict failures, and suggest improvements automatically",
        correct: true,
        explanation: "Correct! AI can analyze pipeline metrics, identify bottlenecks, predict likely failure points, and recommend optimizations to improve speed and reliability."
      },
      {
        text: "AI eliminates the need for testing in CI/CD",
        correct: false,
        explanation: "Testing remains crucial in CI/CD. AI can enhance testing by generating test cases and analyzing results, but thorough testing is still required."
      },
      {
        text: "AI only monitors build processes",
        correct: false,
        explanation: "AI can monitor and optimize the entire pipeline including builds, tests, security scans, deployments, and post-deployment monitoring."
      }
    ]
  },
  {
    question: "What role does AI play in deployment monitoring and observability?",
    options: [
      {
        text: "AI eliminates the need for monitoring tools",
        correct: false,
        explanation: "Monitoring tools remain essential. AI enhances them by providing intelligent analysis and automated responses to issues."
      },
      {
        text: "AI can detect anomalies, predict performance issues, and suggest scaling decisions in real-time",
        correct: true,
        explanation: "Correct! AI can process massive amounts of metrics, logs, and traces to identify patterns, predict issues before they impact users, and recommend proactive actions."
      },
      {
        text: "AI only monitors application performance",
        correct: false,
        explanation: "AI can monitor various aspects including infrastructure health, security events, user experience, business metrics, and system dependencies."
      },
      {
        text: "AI makes incident response procedures unnecessary",
        correct: false,
        explanation: "Incident response procedures remain important. AI can help automate initial responses and provide insights, but human judgment is often needed for resolution."
      }
    ]
  }
];