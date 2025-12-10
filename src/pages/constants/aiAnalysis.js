const aiAnalysisSteps = [
  {
    id: 1,
    title: "AI Stakeholder Mapping",
    icon: "🤖👥",
    description:
      "Use AI to identify hidden stakeholders and analyze their influence using NLP on emails, chats, and documents.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Automated Requirements Extraction",
    icon: "��",
    description:
      "AI extracts requirements from user stories, tickets, and feedback automatically, highlighting ambiguities.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Intelligent Current State Analysis",
    icon: "🔍�",
    description:
      "AI scans codebases, databases, and logs to summarize existing systems and pain points.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI-Powered Gap Analysis",
    icon: "�",
    description:
      "AI compares current and desired states, suggesting missing features and risks.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Feasibility Prediction",
    icon: "⚖️🔮",
    description:
      "AI predicts technical, economic, and operational feasibility using historical data and simulations.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Smart Prioritization",
    icon: "🎯🤖",
    description:
      "AI ranks requirements by value, risk, and effort using ML models and stakeholder sentiment analysis.",
    color: "#DDA0DD",
  },
];

const aiAnalysisTypes = [
  {
    id: "business",
    name: "AI Business Analysis",
    icon: "💼🤖",
    emoji: "📈🤖",
    color: "#667eea",
    story: {
      title: "The AI-Powered Retail Insights",
      scenario:
        "RetailCo used AI to analyze customer feedback and sales data. The AI found patterns in abandoned carts linked to late shipping cost reveals.",
      failure:
        "❌ The team ignored AI's recommendation to show shipping costs earlier, relying on intuition. Cart abandonment stayed high.",
      fix:
        "✅ They trusted the AI insights, updated the checkout flow, and saw a 40% drop in abandonment.",
    },
  },
  {
    id: "technical",
    name: "AI Technical Analysis",
    icon: "⚙️🤖",
    emoji: "🔧🤖",
    color: "#4ECDC4",
    story: {
      title: "AI-Driven Mobile App Performance",
      scenario:
        "BankTech's AI analyzed user connectivity and device data, recommending native apps for speed.",
      failure:
        "❌ Ignoring AI, they chose React Native for code reuse. Slow load times hurt user experience.",
      fix:
        "✅ They rebuilt natively, following AI's advice. Load times dropped dramatically.",
    },
  },
  {
    id: "user",
    name: "AI User Analysis",
    icon: "👤🤖",
    emoji: "🎨🤖",
    color: "#F8B500",
    story: {
      title: "AI-Enhanced Patient Portal",
      scenario:
        "MediPortal's AI segmented users by age and tech skills, revealing seniors needed a simpler interface.",
      failure:
        "❌ The team built for tech-savvy users, ignoring AI's demographic analysis. Seniors struggled.",
      fix:
        "✅ They redesigned with AI's suggestions: large buttons, voice navigation, and phone support. Senior adoption soared.",
    },
  },
];

const aiDrawbacks = [
  {
    id: 1,
    title: "AI Overfitting",
    icon: "🔴🤖",
    problem: "AI models may focus too much on historical data, missing new trends.",
    color: "#FF6B6B",
    resolution:
      "Regularly retrain models and validate with fresh, real-world data.",
  },
  {
    id: 2,
    title: "Automation Bias",
    icon: "✨🤖",
    problem: "Teams may blindly trust AI outputs without human review.",
    color: "#4ECDC4",
    resolution:
      "Always combine AI recommendations with expert judgment and stakeholder feedback.",
  },
  {
    id: 3,
    title: "Data Privacy Risks",
    icon: "�️🤖",
    problem:
      "AI analysis may expose sensitive information if not properly managed.",
    color: "#45B7D1",
    resolution:
      "Implement strict data governance and anonymization protocols.",
  },
  {
    id: 4,
    title: "Opaque Reasoning",
    icon: "🎯🤖",
    problem: "AI decisions can be hard to explain to stakeholders.",
    color: "#96CEB4",
    resolution:
      "Use explainable AI tools and document decision logic for transparency.",
  },
  {
    id: 5,
    title: "Skill Gaps",
    icon: "�️🤖",
    problem:
      "Teams may lack expertise to interpret and act on AI analysis.",
    color: "#DDA0DD",
    resolution:
      "Invest in AI literacy and cross-functional training for all stakeholders.",
  },
];

export { aiAnalysisSteps, aiAnalysisTypes, aiDrawbacks };