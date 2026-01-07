/**
 * Traditional SDLC Implementation Phase Configuration
 * 
 * Educational content for teaching classical software implementation
 * methodologies and coding practices. This provides foundational knowledge
 * about systematic approaches to turning designs into working software.
 * 
 * Core Implementation Activities:
 * - Setting up development environments and toolchains
 * - Following coding standards and best practices
 * - Implementing features according to design specifications
 * - Version control and collaborative development practices
 * - Code documentation and inline commenting
 * - Unit testing and test-driven development
 * 
 * Educational Philosophy:
 * - Builds fundamental coding skills and professional practices
 * - Emphasizes code quality, readability, and maintainability
 * - Teaches systematic development workflows
 * - Provides foundation for understanding modern development evolution
 * 
 * Key Learning Points:
 * - Importance of coding standards and consistency
 * - Collaborative development using version control
 * - Test-driven development and quality assurance
 * - Documentation as part of the development process
 * - Systematic approach to feature implementation
 * 
 * This phase teaches students the disciplined approach to software
 * development that forms the foundation for all modern development
 * practices, including AI-assisted coding techniques.
 */

/**
 * Traditional Implementation Process Steps
 * 
 * Sequential activities that form the foundation of software implementation
 * in classical development methodologies.
 */
const implementationSteps = [
  {
    id: 1,
    title: "Environment Setup",
    icon: "⚙ ",
    description:
      "Configure development environment, version control, and necessary tools",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Code Development",
    icon: "💻 ",
    description:
      "Write clean, maintainable code following best practices and coding standards",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Unit Testing",
    icon: "🧪 ",
    description:
      "Write and execute unit tests to ensure individual components work correctly",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Code Review",
    icon: "👀 ",
    description:
      "Peer review code for quality, security, and adherence to standards",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Integration",
    icon: "🔗 ",
    description: "Integrate components, third-party services, and APIs",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Documentation",
    icon: "📝 ",
    description:
      "Document code, APIs, and implementation decisions for future reference",
    color: "#DDA0DD",
  },
];
const implementationTypes = [
  {
    id: "tdd",
    name: "Test-Driven Development",
    emoji: "🧪 ",
    color: "#667eea",
    story: {
      title: "The Payment Gateway",
      scenario:
        "PayFast developers started coding the payment processing feature immediately. They wrote thousands of lines of code, then tried to add tests later. 'We'll test it once it works,' they said.",
      failure:
        "❌ After 3 months of coding, they discovered critical bugs during manual testing. The refund logic had edge cases they never considered. Adding tests broke existing functionality. They spent 2 more months fixing bugs, only to introduce new ones. Customer complaints skyrocketed about failed transactions.",
      fix: "✅ They adopted Test-Driven Development (TDD): Write test first → Write minimal code to pass → Refactor. For each feature: 1) Write test for expected behavior, 2) Code fails initially, 3) Write code to pass test, 4) Refactor safely. Result: 95% code coverage, bugs caught early, confident refactoring. Development actually became FASTER.",
    },
  },
  {
    id: "pair",
    name: "Pair Programming",
    emoji: "👥 ",
    color: "#4ECDC4",
    story: {
      title: "The Healthcare System",
      scenario:
        "MediSoft had each developer work solo on features. They believed 'two people on one task is wasteful.' Developers worked in isolation, occasionally asking questions via Slack.",
      failure:
        "❌ Critical bugs made it to production because only one person reviewed each feature. Knowledge silos formed - only Sarah understood the billing module, only Tom knew authentication. When Sarah went on vacation, billing feature deployment stopped. Code reviews were superficial since reviewers didn't understand the context.",
      fix: "✅ They implemented Pair Programming for critical features: Driver (writes code) + Navigator (reviews, thinks strategically). Rotated pairs daily. Benefits: Real-time code review, knowledge sharing, fewer bugs, better design decisions, no knowledge silos. Junior devs learned faster. Yes, it seemed 'slower,' but quality improved so much that overall velocity INCREASED by 30%.",
    },
  },
  {
    id: "ci",
    name: "Continuous Integration",
    emoji: "🔄 ",
    color: "#F8B500",
    story: {
      title: "The E-Commerce Platform",
      scenario:
        "ShopNow developers worked on feature branches for weeks, sometimes months. They merged code to main branch only when features were 'complete.' Integration happened quarterly.",
      failure:
        "❌ 'Merge Hell' occurred every quarter: Hundreds of conflicts, incompatible changes, features breaking each other. One merge took 3 weeks and required all hands on deck. Dependencies diverged so much that the project wouldn't even build. Releases were nightmares taking days to stabilize.",
      fix: "✅ Implemented Continuous Integration (CI): Merge to main branch DAILY, automated tests run on every commit, build must pass before merge. Used feature flags for incomplete features. Set up CI pipeline: commit → automated build → run tests → deploy to staging. Conflicts detected early (minutes, not months), always in deployable state, 'merge hell' eliminated. Releases became routine.",
    },
  },
];
const drawbacks = [
  {
    id: 1,
    icon: "🐛 ",
    title: "Code Debt Accumulation",
    problem:
      "Rushing implementation without refactoring creates technical debt that compounds over time, making future changes exponentially harder.",
    resolution:
      "Allocate 20% of sprint time to refactoring. Follow the 'Boy Scout Rule': Leave code better than you found it. Track technical debt in your backlog and prioritize fixing it before it becomes critical.",
  },
  {
    id: 2,
    icon: "🔒 ",
    title: "Security Vulnerabilities",
    problem:
      "Focusing only on functionality while ignoring security leads to vulnerabilities that can be exploited, risking data breaches and usertrust.",
    resolution:
      "Implement security from day one: Use OWASP Top 10 checklist,conduct security code reviews, use static analysis tools (SonarQube,Snyk), implement proper authentication/authorization, sanitize allinputs, encrypt sensitive data.",
  },
  {
    id: 3,
    icon: "📚 ",
    title: "Poor Documentation",
    problem:
      "Undocumented code becomes a mystery to other developers and even to the original author after time passes, leading to maintenance nightmares.",
    resolution:
      "Write self-documenting code with clear naming, add inline comments for complex logic, maintain README files, document APIs with tools like Swagger, keep architecture decision records (ADRs).",
  },
  {
    id: 4,
    icon: "⚡",
    title: "Performance Ignored",
    problem:
      "Not considering performance during implementation leads to slow applications that frustrate users and require expensive rewrites later.",
    resolution:
      "Profile code regularly, optimize database queries, implement caching strategies, use lazy loading, compress assets, follow performance best practices for your tech stack. Set performance budgets and monitor them.",
  },
];
export { implementationSteps, implementationTypes, drawbacks };
