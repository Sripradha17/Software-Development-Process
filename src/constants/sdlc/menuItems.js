/**
 * Traditional SDLC Navigation Menu Configuration
 * 
 * Defines the navigation structure for traditional Software Development Life Cycle pages.
 * This menu provides access to all core SDLC phases and related learning activities.
 * 
 * Menu Structure:
 * - Phase Pages: Sequential SDLC phases from planning to maintenance
 * - Interactive Content: Simulations, quizzes, and case studies
 * - Narrative Content: Story-based learning experiences
 * 
 * Each menu item contains:
 * - label: Display text shown in the navigation menu
 * - path: URL route for React Router navigation
 * 
 * The order reflects the logical flow of software development phases,
 * helping students understand the sequential nature of traditional SDLC.
 */

// Traditional SDLC menu items for classic software development methodology pages
const sdlcMenuItems = [
  { label: "Intro", path: "/learn-software-development" },    // Main learning hub and dashboard
  { label: "Planning", path: "/planning" },                   // Project planning and requirements gathering
  { label: "Analysis", path: "/analysis" },                   // Detailed requirements analysis and documentation
  { label: "Design", path: "/design" },                       // System architecture and design specifications
  { label: "Implementation", path: "/implementation" },       // Coding and development phase
  { label: "Testing", path: "/testing" },                     // Quality assurance and testing methodologies
  { label: "Deployment", path: "/deployment" },               // Production deployment processes
  { label: "Review", path: "/review" },                       // Project retrospective and lessons learned
  { label: "Maintenance", path: "/maintenance" },             // Post-deployment support and updates
  { label: "Story", path: "/story" },                         // Narrative-based learning experience
  { label: "Simulation", path: "/simulation/sdlc" },          // Interactive SDLC decision-making scenarios
  { label: "Drag & Drop Quiz", path: "/drag-drop-quiz/sdlc" }, // Phase ordering assessment activity
  { label: "Case Studies", path: "/case-studies/sdlc" },      // Real-world project case studies
];

export default sdlcMenuItems;
