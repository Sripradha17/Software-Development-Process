/**
 * Traditional SDLC Design Phase Configuration
 * 
 * Educational content for teaching classical system design methodologies
 * in software development. This provides foundational knowledge about
 * systematic approaches to creating software architecture and user interfaces.
 * 
 * Core Design Activities:
 * - System architecture planning and documentation
 * - Database design with entity relationships and normalization
 * - User interface design and user experience planning
 * - API design and integration planning
 * - Security architecture and access control design
 * - Performance considerations and scalability planning
 * 
 * Educational Philosophy:
 * - Builds fundamental design skills before introducing AI enhancements
 * - Emphasizes systematic thinking and documentation practices
 * - Teaches proven design patterns and architectural principles
 * - Provides foundation for understanding modern design evolution
 * 
 * Learning Outcomes:
 * Students will understand traditional design methodologies that form
 * the foundation for modern software architecture and serve as the basis
 * for AI-augmented design approaches taught in the AI-SDLC section.
 * 
 * Design Principles Covered:
 * - Separation of concerns and modular design
 * - Scalability and performance considerations
 * - Security by design principles
 * - User-centered design methodologies
 * - Documentation and communication of design decisions
 */

/**
 * Traditional Design Process Steps
 * 
 * Sequential activities that form the foundation of system design
 * in classical software development methodologies.
 */
const designSteps = [
  {
    id: 1,
    title: "System Architecture",
    icon: "🏗️",
    description:
      "Define the high-level structure: components, layers, and their interactions",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Database Design",
    icon: "🗄️",
    description:
      "Model data structures, relationships, and optimize for performance",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "API Design",
    icon: "🔌",
    description:
      "Create clear interfaces for system communication and integration",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "UI/UX Design",

    icon: "🎨",
    description:
      "Design user interfaces focusing on usability and user experience",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Security Design",
    icon: "🔒",
    description:
      "Plan authentication, authorization, encryption, and data protection",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Design Documentation",
    icon: "📐",
    description:
      "Create diagrams, wireframes, and specifications for developers",
    color: "#DDA0DD",
  },
];

const designTypes = [
  {
    id: "architecture",
    name: "Architecture Design",
    icon: "🏛️",
    emoji: "🏗️",
    color: "#667eea",
    story: {
      title: "The Social Media Platform",
      scenario:
        "SocialNet designed a monolithic architecture where all features (posts, messages, notifications, feeds) lived in one massive application. Initially, deployment was simple - just one codebase.",
      failure: "❌ As they grew to 10 million users, the single server couldn't handle the load. Worse, a bug in the messaging feature crashed the ENTIRE platform - posts, feeds, everything went down. Scaling meant duplicating the whole massive app, wasting resources on underused features.",
      fix: "✅ They redesigned using Microservices Architecture - separated into independent services: PostService, MessageService, NotificationService, etc. Each could scale independently. When messaging went down, posts still worked! They could deploy bug fixes to one service without touching others. Result: 99.99% uptime achieved."
    },
  },
  {
    id: "database",
    name: "Database Design",
    icon: "💾",
    emoji: "🗄️",
    color: "#4ECDC4",
    story: {
      title: "The E-Learning Platform",
      scenario:
        "EduTech designed their database with a single 'Users' table storing students, teachers, admins, and parents. They thought 'everyone is a user, right?' and added columns: has_teaching_degree, student_grade_level, parent_of_student_id.",
      failure: "❌ The table became a nightmare with 50+ columns, most NULL for any given user. Queries were slow (scanning irrelevant columns). Adding new user types meant altering the massive table. A student accidentally got marked as 'has_teaching_degree=true' and could grade assignments!",
      fix: "✅ They redesigned using Table-Per-Type pattern: Base 'Users' table with common fields (name, email), plus separate Student, Teacher, Admin, Parent tables linked via foreign keys. Clean structure, fast queries, type-safe operations. Added role-based access control. Query performance improved 10x."
    },
  },
  {
    id: "uiux",
    name: "UI/UX Design",
    icon: "🖌️",
    emoji: "🎨",
    color: "#F8B500",
    story: {
      title: "The Food Ordering App",
      scenario:
        "FoodieGo designers created a beautiful app with animated transitions, custom fonts, parallax scrolling, and vibrant gradients. It looked stunning in design showcases and won awards for aesthetics.",
      failure: "❌ Real users struggled! The custom font was hard to read. Animations made the app feel sluggish. The 'Order' button was hidden at the bottom requiring scrolling. Users took an average of 47 seconds to place an order - competitors averaged 12 seconds. Conversion rate: 8% (industry average: 35%).",
      fix: "✅ They applied Jakob's Law: 'Users spend most of their time on OTHER sites' - follow familiar patterns. Redesigned with: Standard readable font, prominent 'Order' button, simplified navigation, reduced animations. Added A/B testing to validate every design decision with real user data. Order time dropped to 9 seconds, conversion jumped to 42%."
    },
  },
];

const drawbacks = [
  {
    id: 1,
    title: "Over-Engineering",
    icon: "🛠️",
    problem:
      "Designing for problems you don't have yet - 'what if we need to scale to a billion users?'",
    color: "#FF6B6B",
    resolution:
      "Follow YAGNI (You Aren't Gonna Need It). Design for your CURRENT scale + 3x growth. Example: Starting with 1000 users? Design for 3000, not 1 billion. You can refactor when you actually need to scale.",
  },
  {
    id: 2,
    title: "Design by Committee",
    icon: "  ",
    problem:
      "Everyone adding their favorite design pattern, resulting in a Frankenstein architecture",
    color: "#4ECDC4",
    resolution:
      "Designate a Lead Architect with veto power. Others contribute ideas, but ONE person ensures cohesive vision. Document 'Architecture Decision Records' (ADRs) explaining why choices were made.",
  },
  {
    id: 3,
    title: "Resume-Driven Development",
    icon: "📄",
    problem:
      "Choosing trendy technologies to pad your resume, not because they solve the problem",
    color: "#45B7D1",
    resolution:
      "Use the 'Technology Radar' approach: Proven tech for core systems, experimental tech for non-critical features. Ask: 'Does this solve OUR problem better than existing tools?' If yes, proceed. If 'it's cool,' skip it.",
  },
  {
    id: 4,
    title: "The Ivory Tower Design",

    icon: "🏰",
    problem:
      "Architects designing in isolation without consulting developers who'll build it",
    color: "#96CEB4",
    resolution:
      "Implement 'Collaborative Design Sessions' - architects, developers, and ops team design TOGETHER. Use techniques like Event Storming or Design Sprints. Developers spot implementation issues early.",
  },
  {
    id: 5,
    title: "No Design at All",
    icon: "🚫",
    problem:
      "'Let's just start coding and figure it out as we go!' - chaos guaranteed",
    color: "#DDA0DD",
    resolution:
      "Use 'Just Enough Design Initially' (JEDI). Spend 10-20% of project time on high-level design: architecture diagram, data model, key interfaces. Details can emerge during development, but foundation must be solid.",
  },
];


export { designSteps, designTypes, drawbacks };