/**
 * AI-Enhanced Testing Phase Configuration
 * 
 * Educational content demonstrating how artificial intelligence revolutionizes
 * software testing through intelligent automation, predictive analysis,
 * and comprehensive quality assurance.
 * 
 * AI Testing Innovations:
 * - Automated test case generation from user stories and code analysis
 * - Intelligent test data creation with edge case identification
 * - AI-powered bug prediction and root cause analysis
 * - Smart performance testing with bottleneck detection
 * - Automated accessibility testing with compliance verification
 * - Predictive quality metrics and risk assessment
 * 
 * Educational Objectives:
 * - Show how AI makes testing more comprehensive and efficient
 * - Demonstrate intelligent test strategy development
 * - Teach AI-assisted quality assurance methodologies
 * - Illustrate the evolution from manual to intelligent testing
 * 
 * Key Concepts:
 * - AI doesn't replace human testers but amplifies their capabilities
 * - Machine learning improves testing coverage and effectiveness
 * - Predictive testing identifies issues before they become problems
 * - AI-powered testing provides deeper insights into software quality
 * 
 * Learning Outcomes:
 * Students understand how AI transforms testing from reactive bug-hunting
 * to proactive quality engineering, making software more reliable and
 * reducing the cost of quality assurance.
 */

/**
 * AI-Enhanced Testing Process Steps
 * 
 * Comprehensive approach to using artificial intelligence throughout
 * the testing lifecycle, from test planning to results analysis.
 */
const aiTestingSteps = [
  {
    id: 1,
    title: "AI Test Planning",
    icon: "🤖📋",
    description: "AI defines test strategy, scope, and success criteria using historical bug data.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "AI Unit Testing",
    icon: "🤖🔬",
    description: "AI generates and runs unit tests for all code changes, highlighting coverage gaps.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "AI Integration Testing",
    icon: "🤖🔗",
    description: "AI verifies module interactions and automatically creates integration test cases.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI System Testing",
    icon: "🤖🖥",
    description: "AI tests the complete system against requirements and user stories.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "AI User Acceptance Testing",
    icon: "🤖✅",
    description: "AI validates software against user needs and business goals, simulating real user behavior.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI Performance Testing",
    icon: "🤖⚡",
    description: "AI simulates traffic, detects bottlenecks, and recommends optimizations for speed and scalability.",
    color: "#DDA0DD",
  },
];

const aiTestingTypes = [
  {
    id: "ai-automation",
    name: "AI Automated Testing",
    emoji: "🤖",
    color: "#667eea",
    story: {
      title: "The AI-Tested Banking App",
      scenario:
        "SecureBank used AI to automate regression and security tests, reducing manual effort and errors.",
      failure: "❌ Manual-only testing missed critical bugs and slowed releases.",
      fix: "✅ AI automation cut testing time from 2 weeks to 2 hours and improved bug detection 5x.",
    },
  },
  {
    id: "ai-shift-left",
    name: "AI Shift-Left Testing",
    emoji: "🤖⬅",
    color: "#4ECDC4",
    story: {
      title: "The AI-Enabled SaaS Platform",
      scenario:
        "CloudApp used AI to start testing from day 1, catching bugs in design and code before release.",
      failure: "❌ Late testing led to expensive rewrites and delays.",
      fix: "✅ AI shift-left testing caught bugs early, reduced costs by 60%, and kept releases on time.",
    },
  },
  {
    id: "ai-load",
    name: "AI Load & Performance Testing",
    emoji: "🤖📊",
    color: "#F8B500",
    story: {
      title: "The AI-Loadtested Ticket System",
      scenario:
        "TicketFast used AI to simulate massive traffic and optimize for peak loads before launch.",
      failure: "❌ No load testing led to crashes and lost sales.",
      fix: "✅ AI load testing found bottlenecks and ensured smooth launches for 200,000+ users.",
    },
  },
];

const aiTestingDrawbacks = [
  {
    id: 1,
    icon: "🤖⏰",
    title: "AI Testing Blind Spots",
    problem:
      "AI may miss context-specific bugs or edge cases not present in training data.",
    color: "#FF6B6B",
    resolution:
      "Combine AI testing with exploratory manual testing for full coverage.",
  },
  {
    id: 2,
    icon: "🤖🔒",
    title: "Security Oversights",
    problem:
      "AI may overlook subtle security flaws or business logic vulnerabilities.",
    color: "#4ECDC4",
    resolution:
      "Always include manual security reviews and penetration testing.",
  },
  {
    id: 3,
    icon: "🤖⚡",
    title: "Performance Bottlenecks",
    problem:
      "AI may optimize for average cases, missing rare but critical performance issues.",
    color: "#45B7D1",
    resolution:
      "Test with diverse scenarios and stress conditions beyond AI predictions.",
  },
  {
    id: 4,
    icon: "🤖📚",
    title: "Skill Gaps",
    problem:
      "Teams may lack expertise to interpret and act on AI test results.",
    color: "#96CEB4",
    resolution:
      "Invest in AI testing literacy and ongoing training.",
  },
  {
    id: 5,
    icon: "🤖⚠️",
    title: "Over-Reliance on Automation",
    problem:
      "Too much automation can reduce human insight and creativity in testing.",
    color: "#DDA0DD",
    resolution:
      "Balance AI automation with manual exploratory and usability testing.",
  },
];

export { aiTestingSteps, aiTestingTypes, aiTestingDrawbacks };