/**
 * AI-Enhanced Design Phase Configuration
 * 
 * Educational content demonstrating how artificial intelligence revolutionizes
 * the design phase of software development through intelligent automation,
 * optimization, and pattern recognition.
 * 
 * AI Design Capabilities:
 * - Intelligent architecture suggestions based on performance patterns
 * - Automated database schema optimization using usage analytics
 * - AI-powered API design with auto-documentation generation
 * - Smart UI/UX prototyping with accessibility optimization
 * - Predictive security analysis during design phase
 * - Automated design validation and optimization recommendations
 * 
 * Educational Focus:
 * - Shows practical applications of AI in system design
 * - Demonstrates how AI enhances traditional design methodologies
 * - Teaches integration of machine learning into design workflows
 * - Illustrates the balance between AI assistance and human creativity
 * 
 * Learning Outcomes:
 * Students learn how AI transforms design from manual, experience-based
 * decisions to data-driven, optimized solutions while maintaining the
 * importance of human oversight and creative problem-solving.
 */

/**
 * AI-Enhanced Design Process Steps
 * 
 * Systematic approach to leveraging artificial intelligence throughout
 * the design phase, from architecture to user experience optimization.
 */
const aiDesignSteps = [
  {
    id: 1,
    title: "AI-Driven Architecture",
    icon: "🤖🏗️",
    description:
      "AI suggests optimal system structures based on scalability, reliability, and historical data.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Automated Database Modeling",
    icon: "🤖🗄️",
    description:
      "AI analyzes data usage and recommends efficient schemas and relationships.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "AI API Blueprinting",
    icon: "🤖🔌",
    description:
      "AI generates API designs and documentation from requirements and usage patterns.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI-Powered UI/UX Prototyping",
    icon: "🤖🎨",
    description:
      "AI creates wireframes and user flows, optimizing for accessibility and conversion.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Security by AI",
    icon: "🤖🔒",
    description:
      "AI identifies vulnerabilities and suggests security best practices in design.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI Design Documentation",
    icon: "🤖📐",
    description:
      "AI generates diagrams, specs, and keeps design docs up to date automatically.",
    color: "#DDA0DD",
  },
];

const aiDesignTypes = [
  {
    id: "ai-architecture",
    name: "AI Architecture Design",
    icon: "🤖🏛️",
    emoji: "🤖🏗️",
    color: "#667eea",
    story: {
      title: "The AI-Optimized Social Platform",
      scenario:
        "SocialNet used AI to simulate traffic and recommend microservices splits for reliability.",
      failure: "❌ Ignoring AI's advice, they kept a monolith and faced outages.",
      fix: "✅ They adopted AI-driven microservices, achieving 99.99% uptime.",
    },
  },
  {
    id: "ai-database",
    name: "AI Database Design",
    icon: "🤖💾",
    emoji: "🤖🗄️",
    color: "#4ECDC4",
    story: {
      title: "The AI-Refactored E-Learning DB",
      scenario:
        "EduTech used AI to analyze query patterns and recommend table structures for speed and clarity.",
      failure: "❌ They ignored AI's normalization advice, leading to slow queries and data errors.",
      fix: "✅ They refactored with AI's schema, improving performance 10x.",
    },
  },
  {
    id: "ai-uiux",
    name: "AI UI/UX Design",
    icon: "🤖🖌️",
    emoji: "🤖🎨",
    color: "#F8B500",
    story: {
      title: "The AI-Tested Food App",
      scenario:
        "FoodieGo used AI to A/B test layouts and optimize for user speed and satisfaction.",
      failure: "❌ Ignoring AI's test results, they kept slow, confusing designs.",
      fix: "✅ They implemented AI's winning layouts, boosting conversion to 42%.",
    },
  },
];

const aiDesignDrawbacks = [
  {
    id: 1,
    title: "AI Overfitting in Design",
    icon: "🤖🔴",
    problem: "AI may optimize for past data, missing new user needs.",
    color: "#FF6B6B",
    resolution:
      "Regularly update AI models and validate with fresh user feedback.",
  },
  {
    id: 2,
    title: "Automation Bias",
    icon: "🤖✨",
    problem: "Designers may blindly trust AI suggestions without review.",
    color: "#4ECDC4",
    resolution:
      "Combine AI recommendations with expert design judgment.",
  },
  {
    id: 3,
    title: "Data Privacy Risks",
    icon: "🤖🛡️",
    problem: "AI design tools may expose sensitive user data.",
    color: "#45B7D1",
    resolution:
      "Use privacy-first design and anonymize data in AI workflows.",
  },
  {
    id: 4,
    title: "Opaque Reasoning",
    icon: "🤖🎯",
    problem: "AI design choices can be hard to explain to stakeholders.",
    color: "#96CEB4",
    resolution:
      "Use explainable AI and document design logic for transparency.",
  },
  {
    id: 5,
    title: "Skill Gaps",
    icon: "🤖📚",
    problem: "Teams may lack expertise to interpret and act on AI design outputs.",
    color: "#DDA0DD",
    resolution:
      "Invest in AI design literacy and cross-functional training.",
  },
];

export { aiDesignSteps, aiDesignTypes, aiDesignDrawbacks };