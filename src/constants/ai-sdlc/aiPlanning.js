/**
 * AI-Enhanced Planning Phase Configuration
 * 
 * Educational content showcasing how artificial intelligence transforms
 * project planning through predictive analytics, intelligent resource
 * allocation, and data-driven decision making.
 * 
 * AI Planning Capabilities:
 * - Predictive timeline estimation using historical project data
 * - Intelligent resource allocation based on team skills and availability
 * - AI-powered risk assessment and mitigation planning
 * - Smart milestone planning with dependency optimization
 * - Automated team composition recommendations
 * - Intelligent budget forecasting with scenario analysis
 * 
 * Educational Philosophy:
 * - Demonstrates how AI enhances traditional planning methodologies
 * - Shows data-driven approaches to project management
 * - Teaches predictive planning versus reactive adjustments
 * - Illustrates the balance between AI insights and human judgment
 * 
 * Key Learning Points:
 * - AI provides data-driven insights for better planning decisions
 * - Machine learning improves estimation accuracy over time
 * - Predictive analytics help identify and mitigate risks early
 * - AI-assisted planning reduces project failure rates
 * 
 * This phase shows students how AI is transforming project management
 * from experience-based guessing to data-driven, predictive planning
 * that improves project success rates and team efficiency.
 */

/**
 * AI-Enhanced Planning Process Steps
 * 
 * Systematic approach to leveraging artificial intelligence throughout
 * the project planning phase, from scope definition to resource allocation.
 */
const aiPlanningSteps = [
  {
    id: 1,
    title: "AI Objective Discovery",
    icon: "",
    description: "Use AI to analyze historical data and suggest project objectives based on trends and gaps.",
    color: "#4bb1b4ff",
  },
  {
    id: 2,
    title: "Automated Requirement Mining",
    icon: "",
    description: "AI scans documents, emails, and tickets to extract and cluster requirements automatically.",
    color: "#325fa1ff",
  },
  {
    id: 3,
    title: "Resource Prediction",
    icon: "",
    description: "AI estimates time, budget, and team needs using predictive analytics.",
    color: "#4496a5ff",
  },
  {
    id: 4,
    title: "Smart Timeline Creation",
    icon: "",
    description: "AI generates optimal project timelines and milestones based on risk and dependencies.",
    color: "#2dac6cff",
  },
  {
    id: 5,
    title: "AI Risk Forecasting",
    icon: "",
    description: "AI identifies and quantifies risks using scenario modeling and historical data.",
    color: "#4aa07cff",
  },
  {
    id: 6,
    title: "Automated Documentation",
    icon: "",
    description: "AI generates and maintains living documentation for all planning artifacts.",
    color: "#DDA0DD",
  },
];

const aiPlanningTypes = [
  {
    id: "ai-waterfall",
    name: "AI Waterfall Planning",
    icon: "",
    emoji: "",
    color: "#4bb1b4ff",
    story: {
      title: "The AI-Validated Bridge Project",
      scenario:
        "Mayor Johnson used AI to simulate soil conditions and validate plans before construction. AI flagged risks early, saving months of rework.",
      failure: " Ignoring AI's soil analysis, the team stuck to old plans and faced costly delays.",
      fix: " They trusted AI simulations, validated assumptions, and completed the project on time.",
    },
  },
  {
    id: "ai-agile",
    name: "AI Agile Planning",
    icon: "",
    emoji: "",
    color: "#325fa1ff",
    story: {
      title: "The AI-Guided Food Delivery App",
      scenario:
        "StartupEats used AI to analyze user feedback and adjust sprint goals dynamically.",
      failure: " They ignored AI's suggestions for core features, resulting in a confusing product.",
      fix: " They aligned sprints with AI-identified user needs, creating a coherent app experience.",
    },
  },
  {
    id: "ai-hybrid",
    name: "AI Hybrid Planning",
    icon: "",
    emoji: "",
    color: "#4496a5ff",
    story: {
      title: "The AI-Synchronized Hospital System",
      scenario:
        "MediTech used AI to synchronize security and feature teams, providing real-time guidelines every sprint.",
      failure: " Teams ignored AI's incremental advice, causing misalignment and rework.",
      fix: " They followed AI's sprint-based updates, keeping architecture and features in sync.",
    },
  },
];

const aiPlanningDrawbacks = [
  {
    id: 1,
    title: "AI Analysis Paralysis",
    icon: "",
    problem: "Over-reliance on AI recommendations delays decision-making.",
    color: "#4bb1b4ff",
    resolution:
      "Set time-boxes for AI analysis and combine with human judgment to avoid endless planning.",
  },
  {
    id: 2,
    title: "AI Crystal Ball Fallacy",
    icon: "",
    problem: "Assuming AI can predict every outcome perfectly.",
    color: "#325fa1ff",
    resolution:
      "Use AI forecasts as guidance, not guarantees. Always plan for uncertainty and change.",
  },
  {
    id: 3,
    title: "Stakeholder Overload",
    icon: "",
    problem: "Too many AI-generated options overwhelm decision-makers.",
    color: "#4496a5ff",
    resolution:
      "Prioritize AI suggestions with a clear product owner and filter options for relevance.",
  },
  {
    id: 4,
    title: "Documentation Debt",
    icon: "",
    problem: "AI-generated plans are scattered or lack human review.",
    color: "#2dac6cff",
    resolution:
      "Review and consolidate AI documentation regularly. Make human validation a required step.",
  },
  {
    id: 5,
    title: "Feature Creep Monster",
    icon: "",
    problem: "AI keeps suggesting new features, expanding scope.",
    color: "#4aa07cff",
    resolution:
      "Lock core requirements and use AI to defer non-essential features to future phases.",
  },
];

export { aiPlanningSteps, aiPlanningTypes, aiPlanningDrawbacks };