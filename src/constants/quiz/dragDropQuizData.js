/**
 * Drag and Drop Quiz Configuration Data
 * 
 * Interactive assessment data for both traditional SDLC and AI-augmented SDLC workflows.
 * These quizzes use drag-and-drop interactions to test student understanding of:
 * - Phase sequencing and logical flow
 * - Matching activities to appropriate phases
 * - Understanding relationships between different SDLC components
 * 
 * Quiz Types Supported:
 * 1. Matching Quizzes: Drag items to match with correct descriptions
 * 2. Ordering Quizzes: Arrange phases in correct chronological sequence
 * 3. Categorization Quizzes: Group activities by phase or methodology
 * 
 * Each quiz includes:
 * - Question prompts and instructions
 * - Draggable items with unique identifiers
 * - Target zones with correct answer mapping
 * - Scoring logic and feedback mechanisms
 * - Support for both traditional and AI-enhanced workflows
 * 
 * The interactive nature helps reinforce learning through kinesthetic
 * engagement and provides immediate feedback on understanding.
 */

/**
 * Traditional SDLC Drag and Drop Quiz Collection
 * 
 * Comprehensive quiz set focusing on classical software development phases,
 * their sequence, activities, and relationships.
 */
export const sdlcDragDropQuiz = [
  {
    id: 1,
    question: "Match the SDLC phases to their correct descriptions:",  // Matching quiz for phase understanding
    type: "match",                                                      // Quiz type identifier for component logic
    // Draggable items representing different SDLC phases
    items: [
      { id: "planning", text: "Planning", type: "draggable" },           // Project initiation and scope definition
      { id: "analysis", text: "Analysis", type: "draggable" },           // Requirements gathering and analysis
      { id: "design", text: "Design", type: "draggable" },               // System architecture and UI design
      { id: "implementation", text: "Implementation", type: "draggable" }, // Coding and development work
      { id: "testing", text: "Testing", type: "draggable" }              // Quality assurance and validation
    ],
    // Target zones with descriptions that must be matched correctly
    targets: [
      { 
        id: "planning-desc", 
        text: "Define project scope, requirements, and create project roadmap", // Planning phase description
        correctMatch: "planning"                                             // Correct draggable item for this target
      },
      { 
        id: "analysis-desc", 
        text: "Gather detailed requirements and analyze system needs",        // Analysis phase description
        correctMatch: "analysis"                                             // Correct match identifier
      },
      { 
        id: "design-desc", 
        text: "Create system architecture and user interface mockups",       // Design phase description
        correctMatch: "design"                                               // Correct match identifier
      },
      { 
        id: "implementation-desc", 
        text: "Write code and develop the actual software solution",         // Implementation phase description
        correctMatch: "implementation"                                       // Correct match identifier
      },
      { 
        id: "testing-desc", 
        text: "Verify software functionality and identify bugs",            // Testing phase description
        correctMatch: "testing"                                              // Correct match identifier
      }
    ]
  },
  {
    id: 2,
    question: "Order these SDLC phases in the correct sequence:",        // Sequential ordering quiz
    type: "order",                                                        // Ordering quiz type for proper sequencing
    // Items to be arranged in correct chronological order
    items: [
      { id: "maintenance", text: "Maintenance", correctOrder: 6 },        // Post-deployment support (final phase)
      { id: "design", text: "Design", correctOrder: 3 },                  // System design (third in sequence)
      { id: "planning", text: "Planning", correctOrder: 1 },              // Project planning (first phase)
      { id: "testing", text: "Testing", correctOrder: 5 },                // Quality assurance (fifth phase)
      { id: "implementation", text: "Implementation", correctOrder: 4 },
      { id: "analysis", text: "Analysis", correctOrder: 2 }
    ]
  },
  {
    id: 3,
    question: "Match these software testing types to their purposes:",
    type: "match",
    items: [
      { id: "unit", text: "Unit Testing", type: "draggable" },
      { id: "integration", text: "Integration Testing", type: "draggable" },
      { id: "system", text: "System Testing", type: "draggable" },
      { id: "acceptance", text: "Acceptance Testing", type: "draggable" }
    ],
    targets: [
      { 
        id: "unit-desc", 
        text: "Testing individual components or modules in isolation",
        correctMatch: "unit"
      },
      { 
        id: "integration-desc", 
        text: "Testing the interaction between integrated components",
        correctMatch: "integration"
      },
      { 
        id: "system-desc", 
        text: "Testing the complete integrated system",
        correctMatch: "system"
      },
      { 
        id: "acceptance-desc", 
        text: "Final testing to determine if system meets business requirements",
        correctMatch: "acceptance"
      }
    ]
  },
  {
    id: 4,
    question: "Order these project management activities in typical sequence:",
    type: "order",
    items: [
      { id: "execute", text: "Execute Project Plan", correctOrder: 3 },
      { id: "initiate", text: "Project Initiation", correctOrder: 1 },
      { id: "monitor", text: "Monitor & Control", correctOrder: 4 },
      { id: "plan", text: "Project Planning", correctOrder: 2 },
      { id: "close", text: "Project Closure", correctOrder: 5 }
    ]
  },
  {
    id: 5,
    question: "Match development methodologies to their characteristics:",
    type: "match",
    items: [
      { id: "waterfall", text: "Waterfall", type: "draggable" },
      { id: "agile", text: "Agile", type: "draggable" },
      { id: "devops", text: "DevOps", type: "draggable" },
      { id: "spiral", text: "Spiral Model", type: "draggable" }
    ],
    targets: [
      { 
        id: "waterfall-desc", 
        text: "Sequential development approach with distinct phases",
        correctMatch: "waterfall"
      },
      { 
        id: "agile-desc", 
        text: "Iterative development with frequent collaboration and feedback",
        correctMatch: "agile"
      },
      { 
        id: "devops-desc", 
        text: "Integration of development and operations for continuous delivery",
        correctMatch: "devops"
      },
      { 
        id: "spiral-desc", 
        text: "Risk-driven approach combining iterative and waterfall elements",
        correctMatch: "spiral"
      }
    ]
  }
];

export const aiSdlcDragDropQuiz = [
  {
    id: 1,
    question: "Match AI-Enhanced SDLC phases to their AI applications:",
    type: "match",
    items: [
      { id: "ai-planning", text: "AI-Assisted Planning", type: "draggable" },
      { id: "ai-coding", text: "AI Code Generation", type: "draggable" },
      { id: "ai-testing", text: "AI-Powered Testing", type: "draggable" },
      { id: "ai-monitoring", text: "AI Monitoring", type: "draggable" }
    ],
    targets: [
      { 
        id: "ai-planning-desc", 
        text: "Automated project estimation and resource allocation",
        correctMatch: "ai-planning"
      },
      { 
        id: "ai-coding-desc", 
        text: "Code completion, generation, and refactoring assistance",
        correctMatch: "ai-coding"
      },
      { 
        id: "ai-testing-desc", 
        text: "Automated test case generation and bug detection",
        correctMatch: "ai-testing"
      },
      { 
        id: "ai-monitoring-desc", 
        text: "Predictive analytics and performance optimization",
        correctMatch: "ai-monitoring"
      }
    ]
  },
  {
    id: 2,
    question: "Order these AI development lifecycle stages:",
    type: "order",
    items: [
      { id: "deploy-ai", text: "Model Deployment", correctOrder: 5 },
      { id: "data-prep", text: "Data Preparation", correctOrder: 2 },
      { id: "model-train", text: "Model Training", correctOrder: 3 },
      { id: "problem-def", text: "Problem Definition", correctOrder: 1 },
      { id: "model-eval", text: "Model Evaluation", correctOrder: 4 },
      { id: "monitor-ai", text: "Continuous Monitoring", correctOrder: 6 }
    ]
  },
  {
    id: 3,
    question: "Match AI tools to their development phase applications:",
    type: "match",
    items: [
      { id: "github-copilot", text: "GitHub Copilot", type: "draggable" },
      { id: "chatgpt", text: "ChatGPT", type: "draggable" },
      { id: "selenium-ai", text: "AI-Enhanced Selenium", type: "draggable" },
      { id: "jira-ai", text: "AI-Powered Jira", type: "draggable" }
    ],
    targets: [
      { 
        id: "copilot-desc", 
        text: "Code completion and generation during implementation",
        correctMatch: "github-copilot"
      },
      { 
        id: "chatgpt-desc", 
        text: "Documentation generation and code explanation",
        correctMatch: "chatgpt"
      },
      { 
        id: "selenium-desc", 
        text: "Intelligent test automation and maintenance",
        correctMatch: "selenium-ai"
      },
      { 
        id: "jira-desc", 
        text: "Smart project planning and task prioritization",
        correctMatch: "jira-ai"
      }
    ]
  },
  {
    id: 4,
    question: "Order these machine learning workflow steps:",
    type: "order",
    items: [
      { id: "feature-eng", text: "Feature Engineering", correctOrder: 3 },
      { id: "data-collect", text: "Data Collection", correctOrder: 1 },
      { id: "model-select", text: "Model Selection", correctOrder: 4 },
      { id: "data-clean", text: "Data Cleaning", correctOrder: 2 },
      { id: "hyperparameter", text: "Hyperparameter Tuning", correctOrder: 5 }
    ]
  },
  {
    id: 5,
    question: "Match AI development challenges to their solutions:",
    type: "match",
    items: [
      { id: "bias", text: "AI Bias", type: "draggable" },
      { id: "explainability", text: "Model Explainability", type: "draggable" },
      { id: "scalability", text: "Scalability Issues", type: "draggable" },
      { id: "data-quality", text: "Data Quality", type: "draggable" }
    ],
    targets: [
      { 
        id: "bias-solution", 
        text: "Diverse training data and bias detection algorithms",
        correctMatch: "bias"
      },
      { 
        id: "explainability-solution", 
        text: "LIME, SHAP, and interpretable model architectures",
        correctMatch: "explainability"
      },
      { 
        id: "scalability-solution", 
        text: "Cloud infrastructure and distributed computing",
        correctMatch: "scalability"
      },
      { 
        id: "data-quality-solution", 
        text: "Data validation pipelines and automated cleaning",
        correctMatch: "data-quality"
      }
    ]
  }
];

export const quizConfig = {
  timePerQuestion: 120, // seconds
  passingScore: 0.6, // 60%
  showCorrectAnswers: true,
  allowRetry: true
};