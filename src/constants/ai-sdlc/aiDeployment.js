export /**
 * AI-Enhanced Deployment Phase Configuration
 * 
 * Educational content showcasing how artificial intelligence transforms
 * software deployment through intelligent automation, predictive monitoring,
 * and smart infrastructure management.
 * 
 * AI Deployment Capabilities:
 * - Intelligent deployment orchestration with risk assessment
 * - AI-powered infrastructure provisioning and scaling
 * - Predictive monitoring with anomaly detection
 * - Automated rollback decisions based on performance metrics
 * - Smart load balancing and resource optimization
 * - AI-driven security monitoring and threat detection
 * 
 * Educational Focus:
 * - Demonstrates modern DevOps enhanced with AI capabilities
 * - Shows how AI makes deployments safer and more reliable
 * - Teaches intelligent infrastructure management concepts
 * - Illustrates the evolution to self-healing systems
 * 
 * Key Learning Points:
 * - AI enables proactive rather than reactive deployment management
 * - Machine learning optimizes resource usage and performance
 * - Intelligent monitoring prevents issues before they impact users
 * - AI-driven automation reduces human error in deployments
 * 
 * This phase shows students how AI is transforming operations
 * and deployment, making systems more resilient and efficient.
 */

/**
 * AI-Enhanced Deployment Process Steps
 * 
 * Systematic approach to leveraging artificial intelligence throughout
 * the deployment lifecycle, from infrastructure setup to monitoring.
 */
const aiDeploymentSteps = [
  {
    id: 1,
    title: "AI-Driven Release Planning",
    icon: "🤖🗓️",
    description: "Leverage AI to analyze historical deployments and optimize release schedules, risk, and rollback strategies.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Automated Environment Setup",
    icon: "🛠️🤖",
    description: "AI configures cloud infrastructure, servers, and databases for optimal performance and security.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Intelligent Data Migration",
    icon: "🧠💾",
    description: "AI validates, transforms, and migrates data, detecting anomalies and ensuring integrity.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Smart Deployment Execution",
    icon: "🤖🚀",
    description: "AI orchestrates deployment, monitors for issues, and triggers automated rollbacks if needed.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Real-Time Monitoring & Validation",
    icon: "📈🤖",
    description: "AI continuously monitors system health, validates functionality, and predicts performance bottlenecks.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI-Powered User Training",
    icon: "🧑‍💻🤖",
    description: "AI generates personalized training materials and interactive guides for users.",
    color: "#DDA0DD",
  },
];

export const aiDeploymentTypes = [
  {
    id: "bigbang",
    name: "AI-Optimized Big Bang vs Rolling Deployment",
    emoji: "🤖💥",
    color: "#667eea",
    story: {
      title: "The AI-Driven CRM Rollout",
      scenario:
        "MegaCorp used AI to simulate user adoption and predict migration risks. AI recommended a phased rollout, automatically segmenting users and monitoring feedback in real time.",
      failure:
        "❌ Ignoring AI insights, they attempted a big bang deployment. AI flagged data anomalies, but the team proceeded. Result: Data loss, user confusion, and failed integrations. AI's rollback plan was not followed, leading to extended downtime.",
      fix:
        "✅ Next time, they followed AI's phased plan: AI migrated data in batches, monitored user sentiment, and triggered instant rollbacks for issues. Transition was smooth, downtime near zero, and user adoption high.",
    },
  },
  {
    id: "bluegreen",
    name: "AI-Enhanced Blue-Green Deployment",
    emoji: "🤖🔵🟢",
    color: "#4ECDC4",
    story: {
      title: "AI in E-Commerce Deployment",
      scenario:
        "OnlineShop used AI to analyze traffic patterns and recommend optimal switch times. AI tested the Green environment with simulated user traffic before switching.",
      failure:
        "❌ Manual switch led to missed performance issues. AI predicted checkout failures, but the team ignored alerts. Result: Lost sales and customer complaints.",
      fix:
        "✅ AI handled the switch, monitored real user traffic, and instantly rolled back on anomalies. Zero downtime, rapid deployments, and happy customers.",
    },
  },
  {
    id: "cicd",
    name: "AI-Driven CI/CD Pipeline",
    emoji: "🤖🔄",
    color: "#45B7D1",
    story: {
      title: "Continuous AI Deployment",
      scenario:
        "DevTeam integrated AI into their CI/CD pipeline. AI predicted build failures, optimized test coverage, and scheduled deployments for low-risk windows.",
      failure:
        "❌ Ignoring AI's risk analysis, they deployed during peak hours. Build failed, users experienced downtime, and support tickets spiked.",
      fix:
        "✅ AI rescheduled deployment, auto-fixed minor issues, and notified users in advance. Deployment was seamless, with zero user impact.",
    },
  },
];

export const aiDeploymentDrawbacks = [
  {
    id: 1,
    title: "Overreliance on AI Automation",
    icon: "⚠️🤖",
    problem: "Teams may trust AI to handle all deployment tasks, missing critical human oversight.",
    resolution: "Combine AI automation with expert review, especially for high-risk releases.",
  },
  {
    id: 2,
    title: "AI Misinterprets Data",
    icon: "📉🤖",
    problem: "AI may misclassify anomalies or fail to detect subtle issues in migration or monitoring.",
    resolution: "Regularly validate AI findings with manual checks and feedback loops.",
  },
  {
    id: 3,
    title: "Complexity of AI Integration",
    icon: "🧩🤖",
    problem: "Integrating AI into deployment pipelines can introduce new bugs and require specialized skills.",
    resolution: "Invest in training and robust testing of AI components before production use.",
  },
];
