const deploymentSteps = [
  {
    id: 1,
    title: "Release Planning",
    icon: "📅",
    description: "Plan deployment strategy, timeline, and rollback procedures",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Environment Preparation",
    icon: "🏗",
    description: "Set up production environment, configure servers, and databases",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Data Migration",
    icon: "💾",
    description: "Safely migrate data from old system to new, ensuring integrity",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Deployment Execution",
    icon: "🚀",
    description: "Deploy application to production with minimal downtime",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Monitoring & Validation",
    icon: "📊",
    description: "Monitor system health, validate functionality, check performance",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "User Training",
    icon: "👨🏫",
    description: "Train users on new features and provide documentation",
    color: "#DDA0DD",
  },
];

const deploymentTypes = [
  {
    id: "bigbang",
    name: "Big Bang vs Rolling Deployment",
    emoji: "💥",
    color: "#667eea",
    story: {
      title: "The Enterprise CRM System",
      scenario:
        "MegaCorp decided to replace their entire legacy CRM with a new system in one go. They planned a 'big bang' deployment over a weekend: Friday night, shut down old system. Monday morning, new system goes live.",
      failure:
        "❌ Disaster struck: Critical data migration bug lost 10,000 customer records. New UI confused users trained on old system. Integration with accounting system failed. Support team overwhelmed with 5,000 calls on Monday. CEO couldn't access quarterly reports. They had to roll back, but rollback failed too. System down for 3 days. Lost $5M in sales. Customers defected to competitors.",
      fix:
        "✅ Redesigned as Rolling Deployment: Phase 1: Deploy to 5% of users (sales team) for 2 weeks, gather feedback. Phase 2: 25% of users, monitor closely. Phase 3: 50%, then 100%. Ran both systems in parallel for 1 month. Gradual data migration with validation. Provided comprehensive training. Result: Smooth transition, issues caught early with minimal impact, user adoption high, zero downtime.",
    },
  },
  {
    id: "bluegreen",
    name: "Blue-Green Deployment",
    emoji: "🔵 🟢",
    color: "#4ECDC4",
    story: {
      title: "The E-Commerce Platform",
      scenario:
        "OnlineShop deployed updates by taking the site offline, updating the server, and bringing it back up. 'Maintenance Mode' for 2 hours every release. They deployed monthly during low-traffic hours (3 AM Sunday).",
      failure:
        "❌ Even at 3 AM, they lost $50K per deployment in sales. A bad deployment in December (peak season) broke checkout. Rollback took 3 hours - site down during prime shopping time. Lost $500K. Customers complained loudly on social media. Competitors gained market share. Monthly deployments meant slow feature delivery.",
      fix:
        "✅ Implemented Blue-Green Deployment: Two identical production environments (Blue=current, Green=new). Process: Deploy to Green, test thoroughly, switch traffic from Blue to Green instantly, Blue becomes backup. If issues found, instant rollback to Blue. Zero downtime! Enabled daily deployments. Canary testing: 5% traffic to Green first, monitor, then 100%. Result: 365 deployments/year vs 12, zero downtime, instant rollbacks, customer satisfaction soared.",
    },
  },
  {
    id: "cicd",
    name: "CI/CD Pipeline",
    emoji: "🔄",
    color: "#F8B500",
    story: {
      title: "The Mobile Banking App",
      scenario:
        "FinBank had manual deployment process: Developer uploads code, DevOps team manually builds, QA manually tests on staging, manager approves, DevOps manually deploys to production. Process took 3 days for a simple bug fix.",
      failure:
        "❌ Manual process = human errors. DevOps accidentally deployed test database credentials to production. Security breach exposed customer data. Wrong version deployed causing app crashes for 100K users. Critical security patch took 3 days to deploy while vulnerability was actively exploited. Regulators fined them $10M.",
      fix:
        "✅ Built CI/CD Pipeline: GitHub push → Automated build → Automated tests → Security scan → Deploy to staging → Automated smoke tests → Deploy to production (with approval). Added automated rollback if health checks fail. Deployment time: 3 days → 15 minutes. Bug fixes deployed within hours. Security patches deployed in minutes. Built-in security scanning caught vulnerabilities before production. Achieved 99.99% uptime. Regulatory compliance improved.",
    },
  },
];

const drawbacks = [
  {
    id: 1,
    icon: "⚠",
    title: "No Rollback Plan",
    problem:
      "Deploying without a tested rollback strategy means when things go wrong (and they will), you're stuck with a broken production system while scrambling to fix it.",
    resolution:
      "Always have a rollback plan: Test rollback procedure before deployment, keep previous version ready, use blue-green or canary deployments, automate rollback triggers based on health checks, practice rollbacks in staging.",
  },
  {
    id: 2,
    icon: "📊",
    title: "Insufficient Monitoring",
    problem:
      "Deploying without proper monitoring means you don't know if deployment succeeded or if users are experiencing issues until they complain.",
    resolution:
      "Implement comprehensive monitoring: Application performance monitoring (APM), error tracking (Sentry, Rollbar), user analytics, infrastructure monitoring, set up alerts for anomalies, create dashboards for key metrics.",
  },
  {
    id: 3,
    icon: "📝",
    title: "Poor Documentation",
    problem:
      "Undocumented deployment process means only one person knows how to deploy, creating a single point of failure and deployment anxiety.",
    resolution:
      "Document everything: Deployment runbook with step-by-step instructions, architecture diagrams, rollback procedures, configuration details, troubleshooting guides. Automate deployment to reduce reliance on documentation.",
  },
  {
    id: 4,
    icon: "👥",
    title: "No User Communication",
    problem:
      "Surprising users with changes without communication leads to confusion, support tickets, and resistance to adoption.",
    resolution:
      "Communicate proactively: Announce deployments in advance, provide release notes highlighting new features and changes, offer migration guides for breaking changes, use feature flags to gradually roll out changes, gather user feedback.",
  },
];

export { deploymentSteps, deploymentTypes, drawbacks };