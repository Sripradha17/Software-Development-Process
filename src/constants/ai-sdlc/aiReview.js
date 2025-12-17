export const aiReviewSteps = [
  {
    id: 1,
    title: "AI-Driven Performance Analysis",
    icon: "🤖📊",
    description: "AI evaluates project outcomes against goals and KPIs, highlighting trends and anomalies.",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Automated Stakeholder Feedback",
    icon: "🤖💬",
    description: "AI gathers and analyzes feedback from users, clients, and team members for actionable insights.",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Intelligent Retrospective Meeting",
    icon: "🤖🔄",
    description: "AI facilitates retrospectives, surfaces hidden issues, and tracks action items automatically.",
    color: "#45B7D1",
  },
  {
    id: 4,
    title: "AI Lessons Learned",
    icon: "🤖📝",
    description: "AI documents insights, best practices, and mistakes to avoid, making them searchable for future projects.",
    color: "#96CEB4",
  },
  {
    id: 5,
    title: "Process Improvement Recommendations",
    icon: "🤖⚡",
    description: "AI identifies and suggests improvements to the development process based on historical data.",
    color: "#FFEAA7",
  },
  {
    id: 6,
    title: "AI Knowledge Transfer",
    icon: "🤖🎓",
    description: "AI shares learnings with the organization and future teams via smart documentation and training.",
    color: "#DDA0DD",
  },
];

export const aiReviewTypes = [
  {
    id: "retrospective",
    name: "AI-Enhanced Retrospectives",
    emoji: "🤖🔄",
    color: "#667eea",
    story: {
      title: "The AI-Facilitated Agile Team",
      scenario:
        "TeamFast used AI to rotate facilitators, suggest new formats, and track action items. AI analyzed meeting sentiment and surfaced hidden issues.",
      failure:
        "❌ Ignoring AI's suggestions, retrospectives became repetitive and disengaged. Action items were forgotten, and real issues went undiscussed.",
      fix:
        "✅ With AI, meetings became engaging, issues surfaced, and improvements were tracked. Team velocity increased and morale improved.",
    },
  },
  {
    id: "metrics",
    name: "AI Data-Driven Review",
    emoji: "🤖📈",
    color: "#4ECDC4",
    story: {
      title: "AI in Product Launch Review",
      scenario:
        "InnovateCorp used AI to collect and present objective metrics, enabling clear prioritization and learning from each project.",
      failure:
        "❌ Without AI, reviews were opinion-based, leading to arguments and repeated mistakes.",
      fix:
        "✅ AI-driven reviews used data to drive decisions, prioritize improvements, and achieve targets in future projects.",
    },
  },
  {
    id: "blameless",
    name: "AI Blameless Post-Mortems",
    emoji: "🤖🛡️",
    color: "#F8B500",
    story: {
      title: "AI-Moderated Incident Review",
      scenario:
        "DevOps team used AI to moderate post-mortems, focus on systems not individuals, and track follow-up actions.",
      failure:
        "❌ Without AI, blame culture persisted, issues repeated, and team morale suffered.",
      fix:
        "✅ AI created psychological safety, tracked action items, and enabled continuous improvement.",
    },
  },
];

export const aiReviewDrawbacks = [
  {
    id: 1,
    title: "Overreliance on AI Analysis",
    icon: "⚠️🤖",
    problem: "Teams may trust AI-generated insights without critical review, missing context-specific lessons.",
    resolution: "Combine AI analysis with human judgment and team discussion.",
  },
  {
    id: 2,
    title: "AI Bias in Feedback Aggregation",
    icon: "📉🤖",
    problem: "AI may misinterpret sentiment or prioritize feedback incorrectly due to biased training data.",
    resolution: "Regularly audit AI models and supplement with direct stakeholder input.",
  },
  {
    id: 3,
    title: "Complexity of AI Review Integration",
    icon: "🧩🤖",
    problem: "Integrating AI into review processes can introduce new challenges and require specialized skills.",
    resolution: "Invest in training and robust testing of AI review tools before full adoption.",
  },
];
