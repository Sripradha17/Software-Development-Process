const planningSteps = [
  {
    id: 1,
    title: "Define Objectives",
    icon: "🎯 ",
    description: "Clearly state what you want to achieve",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Gather Requirements",
    icon: "📝 ",
    description: "Collect all needs from stakeholders",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Assess Resources",
    icon: "⚡",
    description: "Evaluate time, budget, and team capabilities",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Create Timeline",
    icon: "📅 ",
    description: "Set realistic milestones and deadlines",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Identify Risks",
    icon: "⚠ ",
    description: "Anticipate potential problems and plan mitigation",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Document Everything",
    icon: "📚 ",
    description: "Create clear, accessible documentation",
    color: "#DDA0DD",
  },
];
const planningTypes = [
  {
    id: "waterfall",
    name: "Waterfall Planning",
    icon: "🌊 ",
    emoji: "📊 ",
    color: "#4bb1b4ff",
    story: {
      title: "The Bridge Construction Project",
      scenario:
        "Mayor Johnson hired BuildCo to construct a bridge. They spent 6 months planning every detail upfront - materials, timeline, budget. Everything was documented perfectly.",
      failure: `❌ Halfway through construction, they discovered the
soil couldn't support their planned foundation. But
all plans were 'locked in' - no flexibility to adapt. The project
halted for 4 months while they re-planned everything from scratch.",
fix: "✅ BuildCo learned to include 'validation checkpoints' in their
waterfall plans. Now they do soil testing and
prototype key components BEFORE finalizing all plans. They still plan
upfront but validate assumptions early.`,
    },
  },
  {
    id: "agile",
    name: "Agile Planning",
    icon: "🔄 ",
    emoji: "🏃 ",
    color: "#325fa1ff",
    story: {
      title: "The Food Delivery App",
      scenario:
        "StartupEats planned their app in 2-week sprints. Each sprint they'd plan only the next features, get user feedback, and adjust.",
      failure: `❌ After 6 months, they had 30 small features but no
cohesive product. The app was confusing - users
couldn't figure out how to order! They never planned the 'big picture'
of user experience.",
fix: "✅ They adopted 'dual-track agile' - maintain a lightweight
long-term vision (the 'north star') while planning details in sprints.
Now each sprint aligns with the overall product vision, creating both
flexibility AND coherence.`,
    },
  },
  {
    id: "hybrid",
    name: "Hybrid Planning",
    icon: "🎭 ",
    emoji: "⚖ ",
    color: "#4496a5ff",
    story: {
      title: "The Hospital Management System",
      scenario:
        "MediTech used hybrid planning: fixed high-level architecture (security, data structure) but flexible feature development (2-week iterations for each module).",
      failure: `❌ The security team (waterfall mode) took 8 months to
finalize requirements. Meanwhile, the feature
team (agile mode) built 5 modules that didn't meet those security
requirements. Massive rework needed!",
fix: "✅ They created 'synchronized gates' - security team provides
incremental guidelines every 2 weeks, not all at once. Both teams now
work in aligned sprints. Fixed architecture evolves with just-in-time
details that guide (not block) agile development.`,
    },
  },
];
const drawbacks = [
  {
    id: 1,
    title: "Analysis Paralysis",
    icon: "🧊 ",
    problem: "Spending too much time planning and never starting execution",
    color: "#4bb1b4ff",
    resolution:
      "Set a planning time-box (e.g., 2 weeks max). Use the 70% rule: start when you have 70% of information. You'll never have 100%, and that's okay!",
  },
  {
    id: 2,
    title: "The Crystal Ball Fallacy",
    icon: "🔮 ",
    problem: "Believing you can predict everything upfront",
    color: "#325fa1ff",
    resolution:
      "Plan for change, not perfection. Include 'buffer time' (15-20% extra) and regular review points to adjust course based on reality.",
  },
  {
    id: 3,
    title: "Stakeholder Overload",
    icon: "👥 ",
    problem: "Too many voices leading to conflicting requirements",
    color: "#4496a5ff",
    resolution:
      "Designate a single 'Product Owner' who consolidates feedback. Other stakeholders advise, but one person has final decision authority.",
  },
  {
    id: 4,
    title: "Documentation Debt",
    icon: "📄 ",
    problem: "Plans exist only in someone's head or scattered notes",
    color: "#2dac6cff",
    resolution:
      "Use collaborative tools (Jira, Notion, Confluence). Make documentation a required step of 'done' - if it's not documented, it's not planned.",
  },
  {
    id: 5,
    title: "The Feature Creep Monster",
    icon: "👾 ",
    problem: "Scope keeps expanding as everyone adds 'just one more thing'",
    color: "#4aa07cff",
    resolution:
      "Use the MoSCoW method: Must-have, Should-have, Could-have, Won't-have. Lock the 'Must-haves' and defer everything else to Phase 2.",
  },
];
export { planningSteps, planningTypes, drawbacks };
