export const deploymentQuiz = [
  {
    question: "What is the main goal of the Deployment phase?",
    options: [
      {
        text: "To write the software code",
        correct: false,
        explanation: "Code writing happens during the Implementation phase."
      },
      {
        text: "To make the software available to end users",
        correct: true,
        explanation: "Correct! Deployment involves releasing the software to production environments where users can access and use it."
      },
      {
        text: "To gather requirements from stakeholders",
        correct: false,
        explanation: "Requirements gathering occurs during the Analysis phase."
      },
      {
        text: "To design the system architecture",
        correct: false,
        explanation: "System architecture is designed during the Design phase."
      }
    ]
  },
  {
    question: "Which deployment strategy reduces risk by gradually rolling out to users?",
    options: [
      {
        text: "Big Bang deployment",
        correct: false,
        explanation: "Big Bang deployment releases to all users at once, which is higher risk."
      },
      {
        text: "Blue-Green deployment",
        correct: false,
        explanation: "Blue-Green involves switching between two identical environments but isn't specifically about gradual rollout."
      },
      {
        text: "Canary deployment",
        correct: true,
        explanation: "Correct! Canary deployment releases to a small subset of users first, allowing monitoring and gradual expansion if all goes well."
      },
      {
        text: "Direct deployment",
        correct: false,
        explanation: "Direct deployment typically means deploying straight to production without gradual rollout."
      }
    ]
  },
  {
    question: "What should be prepared before deployment?",
    options: [
      {
        text: "Nothing, just deploy the code",
        correct: false,
        explanation: "Deployment requires careful preparation including backups, rollback plans, and monitoring."
      },
      {
        text: "Rollback plan and monitoring strategy",
        correct: true,
        explanation: "Correct! Always prepare rollback plans in case issues arise, and have monitoring in place to detect problems quickly."
      },
      {
        text: "New features for the next version",
        correct: false,
        explanation: "Focus should be on the current deployment, not future features."
      },
      {
        text: "User training materials only",
        correct: false,
        explanation: "While user training may be needed, technical preparation like rollback plans is also crucial."
      }
    ]
  }
];