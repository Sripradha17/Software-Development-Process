export /**
 * AI-Enhanced Maintenance Phase Configuration
 * 
 * Educational content demonstrating how artificial intelligence revolutionizes
 * software maintenance through predictive analytics, automated optimization,
 * and intelligent issue resolution.
 * 
 * AI Maintenance Features:
 * - Predictive maintenance using system health analytics
 * - Automated performance optimization and tuning
 * - AI-powered bug triage and priority assignment
 * - Intelligent user feedback analysis and feature prioritization
 * - Smart dependency management and security vulnerability detection
 * - Automated documentation updates based on code changes
 * 
 * Educational Approach:
 * - Shows how AI transforms reactive maintenance to proactive optimization
 * - Demonstrates intelligent system health monitoring
 * - Teaches AI-assisted decision making for maintenance priorities
 * - Illustrates the evolution from manual to predictive maintenance
 * 
 * Key Concepts:
 * - AI enables systems to self-monitor and self-optimize
 * - Machine learning identifies patterns that predict failures
 * - Intelligent automation reduces maintenance overhead
 * - AI-powered analytics provide insights for continuous improvement
 * 
 * Learning Outcomes:
 * Students understand how AI changes maintenance from costly,
 * time-consuming reactive work to efficient, predictive system
 * optimization that improves user experience and reduces costs.
 */

/**
 * AI-Enhanced Maintenance Process Steps
 * 
 * Comprehensive approach to using artificial intelligence throughout
 * the software maintenance lifecycle, from monitoring to optimization.
 */
const aiMaintenanceSteps = [
  {
    id: 1,
    title: "AI-Powered Monitoring & Logging",
    icon: "🤖📊",
    description: "AI continuously monitors system health, performance, and user behavior, detecting anomalies in real time.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Automated Bug Detection & Fixing",
    icon: "🤖🐞",
    description: "AI identifies, prioritizes, and even auto-fixes bugs based on severity and impact.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Predictive Performance Optimization",
    icon: "🤖⚡",
    description: "AI predicts performance bottlenecks and recommends optimizations before issues arise.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI-Driven Security Updates",
    icon: "🤖🔒",
    description: "AI scans for vulnerabilities, applies patches, and updates dependencies automatically.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Smart Feature Enhancements",
    icon: "🤖✨",
    description: "AI analyzes user feedback and suggests targeted improvements and enhancements.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI Technical Debt Management",
    icon: "🤖🛠️",
    description: "AI tracks code quality, flags technical debt, and recommends refactoring opportunities.",
    color: "#DDA0DD",
  },
];

export const aiMaintenanceTypes = [
  {
    id: "reactive",
    name: "AI-Enhanced Reactive vs Proactive Maintenance",
    emoji: "🤖🔥",
    color: "#667eea",
    story: {
      title: "The AI-Guarded SaaS Platform",
      scenario:
        "CloudServe integrated AI for predictive monitoring. AI flagged disk space and security risks before they became issues, and recommended preventive actions.",
      failure:
        "❌ Ignoring AI alerts, the team waited for user complaints. Database crashed, security breach occurred, and performance degraded. AI's recommendations were not followed, leading to downtime and user loss.",
      fix:
        "✅ Team adopted AI-driven proactive maintenance: AI monitored metrics, scheduled updates, and sent alerts. 90% of issues resolved before users noticed. Team stress reduced, uptime increased, and user retention improved.",
    },
  },
  {
    id: "technical-debt",
    name: "AI Technical Debt Management",
    emoji: "🤖💳",
    color: "#4ECDC4",
    story: {
      title: "Legacy System with AI Refactoring",
      scenario:
        "TechCorp used AI to analyze code complexity and recommend refactoring. AI flagged high-debt modules and suggested incremental improvements.",
      failure:
        "❌ Team ignored AI's debt warnings, continued quick fixes. Codebase became unmanageable, bugs increased, and a costly rewrite was needed.",
      fix:
        "✅ With AI, they prioritized debt reduction, refactored modules, and tracked metrics. Development velocity tripled, bug rate dropped, and developer satisfaction soared.",
    },
  },
  {
    id: "updates",
    name: "AI Dependency Management",
    emoji: "🤖📦",
    color: "#F8B500",
    story: {
      title: "Automated Dependency Updates",
      scenario:
        "DevTeam used AI to scan dependencies, apply updates, and test for compatibility. AI flagged risky updates and recommended safe upgrade paths.",
      failure:
        "❌ Manual updates led to missed vulnerabilities and broken builds. AI's suggestions were ignored, causing downtime and security risks.",
      fix:
        "✅ AI automated updates, ran regression tests, and scheduled maintenance windows. Security improved, downtime minimized, and updates became routine.",
    },
  },
];

export const aiMaintenanceDrawbacks = [
  {
    id: 1,
    title: "Blind Trust in AI Recommendations",
    icon: "⚠️🤖",
    problem: "Teams may follow AI suggestions without critical review, leading to missed context-specific issues.",
    resolution: "Always validate AI recommendations with expert judgment and context awareness.",
  },
  {
    id: 2,
    title: "AI Overfitting to Historical Data",
    icon: "📉🤖",
    problem: "AI may base predictions on outdated or irrelevant data, missing new patterns or threats.",
    resolution: "Regularly retrain AI models and supplement with real-time feedback.",
  },
  {
    id: 3,
    title: "Complexity of AI Maintenance Integration",
    icon: "🧩🤖",
    problem: "Integrating AI into maintenance workflows can introduce new challenges and require specialized skills.",
    resolution: "Invest in training and robust testing of AI maintenance tools before full adoption.",
  },
];
