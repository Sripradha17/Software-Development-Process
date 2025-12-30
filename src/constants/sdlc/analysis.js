const analysisSteps = [
  {
    id: 1,
    title: "Stakeholder Identification",
    icon: "👥",
    description:
      "Identify all people who have a stake in the project's success",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Requirements Gathering",
    icon: "📝",
    description: "Collect and document system requirements",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Current State Analysis",
    icon: "🔍",
    description: "Study existing systems, processes, and pain points",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "Gap Analysis",
    icon: "📊",
    description:
      "Identify the difference between current state and desired future state",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Feasibility Study",
    icon: "⚖️",

    description: "Assess technical, economic, and operational feasibility",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "Requirements Prioritization",
    icon: "🎯",
    description:
      "Rank requirements using frameworks like MoSCoW or value vs effort",
    color: "#DDA0DD",
  },
];

const analysisTypes = [
  {
    id: "business",
    name: "Business Analysis",
    icon: "💼",
    emoji: "📈",
    color: "#667eea",
    story: {
      title: "The E-Commerce Platform Overhaul",
      scenario:
        "RetailCo wanted to modernize their checkout process. The business analyst interviewed sales, marketing, and customer service teams. They discovered customers abandoned carts due to a 7-step checkout process.",
      failure: "❌ The analyst focused only on WHAT users wanted ('faster checkout') but never asked WHY they abandoned carts. After building a 2-step checkout, cart abandonment remained high. Turns out, hidden shipping costs at the end were the real issue, not the number of steps!",
      fix: "✅ They re-did the analysis using the '5 Whys' technique. 'Why do users abandon?' → 'Slow checkout' → 'Why is it slow?' → 'Too many steps' → 'Why too many steps?' → 'Shipping cost revealed late' → 'Why late?' → Found the root cause! Fixed by showing shipping upfront. Cart abandonment dropped 40%.",
    },
  },
  {
    id: "technical",
    name: "Technical Analysis",
    icon: "⚙️",
    emoji: "🔧",
    color: "#4ECDC4",
    story: {
      title: "The Mobile Banking App",
      scenario:
        "BankTech analyzed requirements for a new mobile app. Engineers evaluated technologies: React Native vs Native apps, cloud providers (AWS vs Azure), databases (SQL vs NoSQL).",
      failure: "❌ They chose React Native for 'code reusability' without analyzing actual user behavior. Later discovered 80% of users accessed the app during commutes with poor connectivity. React Native's larger bundle size caused 15-second load times on 3G. Native apps would've been faster!",
      fix: "✅ They conducted a 'Non-Functional Requirements Deep Dive' - analyzed network conditions, device specifications, and usage patterns BEFORE choosing tech. Rebuilt with Native apps optimized for offline-first usage. Load time reduced to 2 seconds even on 2G.",
    },
  },
  {
    id: "user",
    name: "User Analysis",
    icon: "👤",
    emoji: "🎨",
    color: "#F8B500",
    story: {
      title: "The Healthcare Patient Portal",
      scenario:
        "MediPortal designed a patient portal. UX researchers interviewed patients, created personas, and mapped user journeys. They built a feature-rich portal with appointment scheduling, test results, billing, and chat.",
      failure: "❌ They analyzed the WRONG users! They interviewed tech-savvy patients from urban areas. When launched, 60% of actual users were seniors 65+ in rural areas with limited tech experience. The portal was too complex - seniors couldn't find their test results!",
      fix: "✅ They implemented 'Representative Sampling' - ensured their analysis included proportional representation of ALL user demographics. Re-designed with a simplified 'Senior Mode' featuring large buttons, voice navigation, and phone support. Adoption increased from 15% to 70% among seniors.",
    },
  },
];

const drawbacks = [
  {
    id: 1,
    title: "Confirmation Bias",

    icon: "🔴",
    problem: "Only looking for data that confirms your existing beliefs",
    color: "#FF6B6B",
    resolution:
      "Use the 'Devil's Advocate' technique: Assign someone to actively challenge assumptions. Ask 'What would make this requirement wrong?' and actively seek disconfirming evidence.",
  },
  {
    id: 2,
    title: "Gold Plating",
    icon: "✨",
    problem: "Adding features users never asked for because 'it would be cool'",
    color: "#4ECDC4",
    resolution:
      "Stick to the 'YAGNI' principle (You Aren't Gonna Need It). For every requirement, ask: 'Did a stakeholder explicitly request this?' If no, defer it to a future phase.",
  },
  {
    id: 3,
    title: "Analysis by Committee",
    icon: "🗣️",
    problem:
      "Too many stakeholders with conflicting requirements and no clear priority",
    color: "#45B7D1",
    resolution:
      "Use a RACI matrix (Responsible, Accountable, Consulted, Informed). Identify ONE person as 'Accountable' for final decisions. Others can provide input but can't override.",
  },
  {
    id: 4,
    title: "The Moving Target",
    icon: "🎯",
    problem: "Requirements constantly changing as you analyze them",
    color: "#96CEB4",
    resolution:
      "Implement 'Requirement Freeze Windows' - set specific dates where requirements are locked for analysis. New changes go into a 'parking lot' for the next analysis cycle.",
  },
  {
    id: 5,
    title: "Lost in Translation",
    icon: "🗺️",

    problem:
      "Business language not translating clearly to technical requirements",
    color: "#DDA0DD",
    resolution:
      "Create a 'Shared Vocabulary Document' - define key terms everyone agrees on. Use 'Given-When-Then' format: 'Given [context], When [action], Then [outcome]' for clarity.",
  },
];

export { analysisSteps, analysisTypes, drawbacks };
