/**
 * Traditional SDLC Testing Phase Configuration
 * 
 * Educational content for teaching classical software testing methodologies
 * and quality assurance practices. This provides foundational knowledge about
 * systematic approaches to ensuring software quality and reliability.
 * 
 * Core Testing Activities:
 * - Test planning and strategy development
 * - Test case design and documentation
 * - Manual testing execution and defect tracking
 * - Integration testing and system testing
 * - User acceptance testing coordination
 * - Performance and security testing basics
 * 
 * Educational Philosophy:
 * - Builds fundamental testing skills and quality mindset
 * - Emphasizes systematic approach to quality assurance
 * - Teaches different types of testing and their purposes
 * - Provides foundation for understanding modern testing evolution
 * 
 * Testing Methodologies Covered:
 * - Black box and white box testing techniques
 * - Functional and non-functional testing approaches
 * - Manual testing processes and documentation
 * - Defect lifecycle and bug tracking
 * - Test reporting and quality metrics
 * 
 * Learning Outcomes:
 * Students will understand traditional testing methodologies that form
 * the foundation for modern quality assurance and serve as the basis
 * for AI-augmented testing approaches taught in the AI-SDLC section.
 */

/**
 * Traditional Testing Process Steps
 * 
 * Sequential activities that form the foundation of software testing
 * in classical development methodologies.
 */
const testingSteps = [
  {
    id: 1,
    title: "Test Planning",
    icon: "📋",
    description: "Define testing strategy, scope, resources, and success criteria",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Unit Testing",
    icon: "🔬",
    description: "Test individual components in isolation to ensure they work correctly",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Integration Testing",
    icon: "🔗",
    description: "Verify that different modules work together correctly",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "System Testing",
    icon: "🖥",
    description: "Test the complete integrated system against requirements",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "User Acceptance Testing",
    icon: "✅",
    description: "Validate software meets user needs and business requirements",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Performance Testing",
    icon: "⚡",
    description: "Assess speed, scalability, and stability under various conditions",
    color: "#DDA0DD",
  },
];

const testingTypes = [
  {
    id: "manual",
    name: "Manual vs Automated Testing",
    emoji: "🤖",
    color: "#667eea",
    story: {
      title: "The Banking Application",
      scenario:
        "SecureBank relied entirely on manual testing. QA team had a 500-page test script they executed before each release. Testing took 2 weeks, running through every scenario manually.",
      failure:
        "❌ Human error was inevitable: Testers missed critical bugs due to fatigue, forgot test steps, inconsistently executed tests. Regression testing every feature before each release was exhausting. Releases slowed to once per quarter. A critical security bug slipped through manual testing, leading to a data breach affecting 50,000 customers.",
      fix:
        "✅ Implemented Test Automation Pyramid: Unit tests (70%) - fast, automated, run on every commit. Integration tests (20%) - automated API tests. E2E tests (10%) - critical user journeys automated with Selenium. Manual testing reserved for exploratory testing and UX validation. Result: Testing time reduced from 2 weeks to 2 hours, releases increased to weekly, bug detection improved 5x.",
    },
  },
  {
    id: "shift-left",
    name: "Shift-Left Testing",
    emoji: "⬅",
    color: "#4ECDC4",
    story: {
      title: "The SaaS Platform",
      scenario:
        "CloudApp followed waterfall: Development completed in 6 months, THEN handed to QA. Testing was the final phase before release. 'We'll find bugs at the end,' they said.",
      failure:
        "❌ QA discovered fundamental architecture flaws that required complete rewrites. Bugs found in month 6 were exponentially more expensive to fix than if caught in month 1. Developers had moved to new features and couldn't remember the code. Release delayed by 4 months. Budget overrun by 200%.",
      fix:
        "✅ Adopted Shift-Left Testing: Testing starts from day 1. Developers write unit tests alongside code, QA involved in design reviews, automated tests run on every commit, security testing in CI/CD pipeline. Test-Driven Development (TDD) for critical features. Result: Bugs caught in hours vs months, 90% reduction in production bugs, releases on time, costs decreased by 60%.",
    },
  },
  {
    id: "load",
    name: "Load & Performance Testing",
    emoji: "📊",
    color: "#F8B500",
    story: {
      title: "The Ticket Booking System",
      scenario:
        "TicketFast tested functionality thoroughly but never loadtested. The app worked great with 10 test users. They launched marketing campaign for a big concert.",
      failure:
        "❌ On sale day, 50,000 users hit the site simultaneously. Database connections maxed out, servers crashed, checkout process failed. Users got error messages, tickets were double-booked, payment processing froze. Social media exploded with complaints. Company lost $2M in sales and faced lawsuits from angry customers.",
      fix:
        "✅ Implemented comprehensive Performance Testing: Load testing (simulate expected traffic), Stress testing (find breaking point), Spike testing (sudden traffic surges), Endurance testing (sustained load over time). Used JMeter to simulate 100,000 concurrent users. Found bottlenecks: unoptimized queries, insufficient connection pooling, poor caching. Fixed issues BEFORE launch. Next sale: smooth experience even with 200,000 users.",
    },
  },
];

const drawbacks = [
  {
    id: 1,
    icon: "⏰",
    title: "Insufficient Testing Time",
    problem:
      "Rushing testing phase to meet deadlines leads to critical bugs in production, causing customer dissatisfaction and expensive hotfixes.",
    resolution:
      "Build testing time into project timeline from the start (typically 30-40% of development time). Automate repetitive tests to save time. Use risk-based testing to prioritize critical features. Make testing a continuous activity, not a final phase.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Testing Wrong Things",
    problem:
      "Testing implementation details instead of behavior leads to brittle tests that break with every code change and don't catch real bugs.",
    resolution:
      "Focus on testing user behavior and outcomes, not implementation. Write tests from user perspective, test APIs and contracts instead of internals, prioritize integration tests over isolated unit tests for complex features.",
  },
  {
    id: 3,
    icon: "🔄",
    title: "No Continuous Testing",
    problem:
      "Testing only before releases means bugs accumulate and integration issues aren't caught early, making them harder and more expensive to fix.",
    resolution:
      "Integrate testing into CI/CD pipeline: automated tests on every commit, immediate feedback to developers, block merges if tests fail. Use test environments that mirror production. Practice continuous testing throughout development.",
  },
  {
    id: 4,
    icon: "👥",
    title: "Developer-QA Silos",
    problem:
      "Treating development and testing as separate phases creates delays, miscommunication, and an 'us vs them' mentality that reduces quality.",
    resolution:
      "Include QA in planning meetings, have developers write tests, pair QA with developers during implementation, share responsibility for quality. Use behavior-driven development (BDD) to create shared understanding.",
  },
];

export { testingSteps, testingTypes, drawbacks };