const aiImplementationSteps = [
  {
    id: 1,
    title: "AI Environment Setup",
    icon: "🤖⚙",
    description:
      "AI configures dev environments, installs dependencies, and sets up version control automatically.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "AI-Assisted Coding",
    icon: "🤖💻",
    description:
      "AI suggests code completions, refactors, and enforces best practices in real time.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Automated Unit Testing",
    icon: "🤖🧪",
    description:
      "AI generates and runs unit tests, highlighting edge cases and coverage gaps.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI Code Review",
    icon: "🤖👀",
    description:
      "AI reviews code for quality, security, and standards, providing actionable feedback.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Smart Integration",
    icon: "🤖🔗",
    description:
      "AI manages integration of components and APIs, resolving conflicts automatically.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI Documentation",
    icon: "🤖📝",
    description:
      "AI generates and updates code and API documentation as code evolves.",
    color: "#DDA0DD",
  },
];

const aiImplementationTypes = [
  {
    id: "ai-tdd",
    name: "AI Test-Driven Development",
    emoji: "🤖🧪",
    color: "#667eea",
    story: {
      title: "The AI-Powered Payment Gateway",
      scenario:
        "PayFast used AI to generate tests before coding, catching bugs early and improving coverage.",
      failure: "❌ Ignoring AI's test suggestions led to missed edge cases and bugs in production.",
      fix: "✅ They adopted AI-generated TDD, achieving 95% coverage and faster releases.",
    },
  },
  {
    id: "ai-pair",
    name: "AI Pair Programming",
    emoji: "🤖👥",
    color: "#4ECDC4",
    story: {
      title: "The AI-Enhanced Healthcare System",
      scenario:
        "MediSoft paired developers with AI assistants for real-time code review and knowledge sharing.",
      failure: "❌ Solo coding led to silos and bugs. AI pairing improved quality and onboarding speed.",
      fix: "✅ AI pair programming reduced bugs and increased team velocity by 30%.",
    },
  },
  {
    id: "ai-ci",
    name: "AI Continuous Integration",
    emoji: "🤖🔄",
    color: "#F8B500",
    story: {
      title: "The AI-Managed E-Commerce Platform",
      scenario:
        "ShopNow used AI to automate merges, run tests, and deploy to staging on every commit.",
      failure: "❌ Manual merges caused conflicts and delays. AI CI eliminated merge hell and stabilized releases.",
      fix: "✅ AI CI detected conflicts early and kept code always deployable.",
    },
  },
];

const aiImplementationDrawbacks = [
  {
    id: 1,
    icon: "🤖🐛",
    title: "AI Code Debt",
    problem:
      "AI-generated code may introduce hidden technical debt if not reviewed by humans.",
    color: "#FF6B6B",
    resolution:
      "Combine AI suggestions with regular human refactoring and code audits.",
  },
  {
    id: 2,
    icon: "🤖🔒",
    title: "Security Blind Spots",
    problem:
      "AI may miss subtle security issues or context-specific vulnerabilities.",
    color: "#4ECDC4",
    resolution:
      "Always perform manual security reviews alongside AI checks.",
  },
  {
    id: 3,
    icon: "🤖🛠️",
    title: "Over-Automation",
    problem:
      "Too much automation can reduce team understanding and ownership of code.",
    color: "#45B7D1",
    resolution:
      "Balance automation with collaborative coding and documentation.",
  },
  {
    id: 4,
    icon: "🤖📚",
    title: "Skill Gaps",
    problem:
      "Teams may lack expertise to interpret and maintain AI-generated code.",
    color: "#96CEB4",
    resolution:
      "Invest in AI coding literacy and ongoing training.",
  },
  {
    id: 5,
    icon: "🤖⚠️",
    title: "Integration Conflicts",
    problem:
      "AI may resolve conflicts incorrectly without full context, causing subtle bugs.",
    color: "#DDA0DD",
    resolution:
      "Review AI integrations and test thoroughly before deployment.",
  },
];

export { aiImplementationSteps, aiImplementationTypes, aiImplementationDrawbacks };