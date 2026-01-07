/**
 * AI-Enhanced Maintenance Phase Quiz Configuration
 * 
 * Educational assessment questions designed to test student understanding
 * of AI-augmented maintenance concepts and intelligent system management.
 * This quiz reinforces learning from the AI-enhanced maintenance phase.
 * 
 * Quiz Focus Areas:
 * - Predictive maintenance using system health analytics
 * - Automated performance optimization and tuning
 * - AI-powered bug triage and priority assignment
 * - Intelligent user feedback analysis and feature prioritization
 * - Smart dependency management and vulnerability detection
 * - Automated documentation updates based on code changes
 * 
 * Educational Design:
 * - Multiple choice questions with AI maintenance scenarios
 * - Correct answers explain AI maintenance benefits and automation
 * - Wrong answer explanations clarify AI maintenance limitations
 * - Real-world AI operations tools and platform examples
 * - Integration of traditional maintenance with AI enhancements
 * 
 * Assessment Objectives:
 * - Verify understanding of AI applications in software maintenance
 * - Test knowledge of predictive maintenance techniques
 * - Assess ability to leverage AI for proactive system care
 * - Evaluate understanding of intelligent operational practices
 * 
 * This quiz completes the AI-SDLC assessment series, ensuring students
 * understand how AI transforms the entire software development lifecycle.
 */

/**
 * AI-Enhanced Maintenance Phase Assessment Questions
 * 
 * Comprehensive quiz covering AI applications in maintenance,
 * predictive system management, and intelligent operations.
 */
export const aiMaintenanceQuiz = [
  {
    question: "How does AI enhance software maintenance and support activities?",
    options: [
      {
        text: "AI eliminates the need for human maintenance teams",
        correct: false,
        explanation: "Human expertise remains essential for understanding business context, making strategic decisions, and handling complex issues."
      },
      {
        text: "AI can predict maintenance needs, automate routine tasks, and prioritize support tickets intelligently",
        correct: true,
        explanation: "Correct! AI can analyze system metrics to predict failures, automate repetitive maintenance tasks, and use context to prioritize and route support requests effectively."
      },
      {
        text: "AI only works with bug fixes",
        correct: false,
        explanation: "AI assists with various maintenance activities including performance optimization, security updates, feature enhancements, and preventive maintenance."
      },
      {
        text: "AI makes system documentation unnecessary",
        correct: false,
        explanation: "Documentation remains crucial. AI can help maintain and update documentation, but clear information is still needed for effective maintenance."
      }
    ]
  },
  {
    question: "What is a key benefit of AI-powered predictive maintenance?",
    options: [
      {
        text: "AI prevents all system failures from occurring",
        correct: false,
        explanation: "While AI significantly reduces failures through prediction, some issues may still occur unexpectedly or due to external factors."
      },
      {
        text: "AI analyzes patterns to predict and prevent issues before they impact users",
        correct: true,
        explanation: "Correct! AI can process historical data, system metrics, and usage patterns to identify early warning signs and recommend preventive actions."
      },
      {
        text: "AI only predicts hardware failures",
        correct: false,
        explanation: "AI can predict various types of issues including software bugs, performance degradation, security vulnerabilities, and capacity limitations."
      },
      {
        text: "AI makes regular maintenance schedules obsolete",
        correct: false,
        explanation: "Regular maintenance remains important. AI helps optimize schedules and identify additional maintenance needs beyond routine tasks."
      }
    ]
  },
  {
    question: "How can AI improve incident management and resolution?",
    options: [
      {
        text: "AI resolves all incidents without human involvement",
        correct: false,
        explanation: "Complex incidents often require human judgment, creativity, and business understanding that AI cannot provide."
      },
      {
        text: "AI can automatically categorize issues, suggest solutions, and route tickets to appropriate specialists",
        correct: true,
        explanation: "Correct! AI can analyze incident descriptions, match with similar past issues, suggest proven solutions, and intelligently assign tickets based on expertise and availability."
      },
      {
        text: "AI eliminates the need for incident documentation",
        correct: false,
        explanation: "Documentation remains important for learning, compliance, and knowledge sharing. AI can help automate documentation but the record-keeping is still valuable."
      },
      {
        text: "AI only handles technical incidents",
        correct: false,
        explanation: "AI can assist with various types of incidents including user issues, business process problems, and service requests beyond just technical failures."
      }
    ]
  }
];