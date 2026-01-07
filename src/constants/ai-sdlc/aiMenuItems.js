/**
 * AI-Augmented SDLC Navigation Menu Configuration
 * 
 * Defines the navigation structure for AI-enhanced Software Development Life Cycle pages.
 * This menu provides access to modern, AI-augmented development phases and activities
 * that showcase how artificial intelligence is transforming software development.
 * 
 * Menu Structure:
 * - AI-Enhanced Phase Pages: SDLC phases enhanced with AI tools and methodologies
 * - Modern Interactive Content: AI-focused simulations, case studies, and assessments
 * - Narrative Content: AI development story and real-world AI integration examples
 * 
 * Each menu item contains:
 * - label: Display text shown in the navigation menu
 * - path: URL route for React Router navigation to AI-specific pages
 * 
 * The structure mirrors traditional SDLC but with AI-augmented implementations,
 * helping students understand how AI enhances each phase of development.
 * This represents the future of software development with AI integration.
 */

// AI-augmented SDLC menu items for modern software development methodology pages
const aiMenuItems = [
  { label: "Intro", path: "/ai-augmented-development" },     // AI-enhanced development overview and introduction
  { label: "Planning", path: "/ai-planning" },               // AI-assisted project planning with smart recommendations
  { label: "Analysis", path: "/ai-analysis" },               // AI-powered requirements analysis and validation
  { label: "Design", path: "/ai-design" },                   // AI-driven design patterns and architecture suggestions
  { label: "Implementation", path: "/ai-implementation" },   // AI-assisted coding with automated code generation
  { label: "Testing", path: "/ai-testing" },                 // AI-driven test case generation and execution
  { label: "Deployment", path: "/ai-deployment" },           // AI-optimized deployment with predictive analytics
  { label: "Review", path: "/ai-review" },                   // AI-enhanced code review and process optimization
  { label: "Maintenance", path: "/ai-maintenance" },         // AI-supported monitoring and predictive maintenance
  { label: "Story", path: "/ai-augmented-story" },           // Narrative of AI transformation in development
  { label: "Simulation", path: "/simulation/ai-sdlc" },      // Interactive AI-SDLC decision-making scenarios
  { label: "Drag & Drop Quiz", path: "/drag-drop-quiz/ai-sdlc" }, // AI-enhanced phase ordering assessment
  { label: "Case Studies", path: "/case-studies/ai-sdlc" },  // Real-world AI integration case studies
];

export default aiMenuItems;
