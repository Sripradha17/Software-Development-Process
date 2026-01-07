/**
 * Main Application Component
 * 
 * This is the root component of the Software Development Process educational app.
 * It sets up routing for all pages including:
 * - Traditional SDLC phases (planning, analysis, design, implementation, testing, deployment, maintenance, review)
 * - AI-augmented SDLC phases with modern AI integration
 * - Interactive simulations and quizzes
 * - Case studies for real-world learning
 */

// React Router imports for client-side routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Traditional SDLC page imports - covers classic software development lifecycle
import IntroPage from "./pages/sdlc/IntroPage";                      // Landing page with overview
import LearnSoftwareDev from "./pages/sdlc/learnSoftwareDevelopment"; // Main learning hub
import AiAugmentedSoftwareDevelopment from "./pages/ai-sdlc/aiAugmentedSoftwareDevelopment"; // AI integration overview
import AiAugmentedDevelopmentStory from "./pages/ai-sdlc/aiAugmentedSoftwareDevelopmentStory"; // AI development narrative
import DevelopmentProcessStory from "./pages/sdlc/story";            // Traditional development story
import PlanningPage from "./pages/sdlc/planning";                   // Project planning phase
import AnalysisPage from "./pages/sdlc/analysis";                   // Requirements analysis phase
import DesignPage from "./pages/sdlc/design";                       // System design phase
import ImplementationPage from "./pages/sdlc/implementation";       // Coding/development phase
import TestingPage from "./pages/sdlc/testing";                     // Quality assurance phase
import DeploymentPage from  "./pages/sdlc/deployment";              // Production deployment phase
import MaintenancePage from "./pages/sdlc/maintenance";             // Post-deployment maintenance
import ReviewPage from "./pages/sdlc/review";                       // Process review and retrospection

// AI-augmented SDLC page imports - modern development with AI assistance
import AIPlanningPage from "./pages/ai-sdlc/planning";               // AI-assisted project planning
import AnalysisWithAIPage from "./pages/ai-sdlc/analysis";           // AI-enhanced requirements analysis
import AIDesignPage from "./pages/ai-sdlc/design";                   // AI-powered system design
import AIImplementationPage from "./pages/ai-sdlc/implementation";   // AI-assisted coding and development
import AITestingPage from "./pages/ai-sdlc/testing";                 // AI-driven testing strategies
import AIDeploymentPage from "./pages/ai-sdlc/deployment";           // AI-optimized deployment processes
import AIMaintenancePage from "./pages/ai-sdlc/maintenance";         // AI-supported maintenance and monitoring
import AIReviewPage from "./pages/ai-sdlc/review";                   // AI-enhanced process review and analytics

// Interactive learning components for hands-on education
import SimulationHub from "./components/SimulationHub";       // Central hub for accessing all simulations
import SimulationEngine from "./components/SimulationEngine"; // Core simulation runner with decision-making scenarios

// Interactive assessment components
import DragDropQuiz from "./components/DragDropQuiz";         // Drag-and-drop quiz interface for phase ordering

// Real-world learning components
import CaseStudyList from "./components/CaseStudyList";       // List view of available case studies
import CaseStudy from "./components/CaseStudy";               // Individual case study viewer with detailed scenarios


/**
 * Main App Component
 * 
 * Sets up the complete routing structure for the educational platform.
 * Organizes routes into logical groups for better maintainability.
 * 
 * @returns {JSX.Element} The main application with all routes configured
 */
function App() {
  return (
    // Router wrapper enables client-side navigation throughout the app
    <Router>
      <Routes>
        {/* Landing and overview pages */}
        <Route path="/" element={<IntroPage />} />                                    {/* Home page with app introduction */}
        <Route path="/learn-software-development" element={<LearnSoftwareDev />} />   {/* Main learning dashboard */}
        <Route path="/story" element={<DevelopmentProcessStory />} />                 {/* Traditional SDLC narrative */}
        <Route path="/ai-augmented-development" element={<AiAugmentedSoftwareDevelopment />} /> {/* AI-SDLC overview */}
        <Route path="/ai-augmented-story" element={<AiAugmentedDevelopmentStory />} /> {/* AI development story */}
        
        {/* Traditional SDLC phase routes - classic software development methodology */}
        <Route path="/planning" element={<PlanningPage />} />           {/* Project planning and requirement gathering */}
        <Route path="/analysis" element={<AnalysisPage />} />           {/* Detailed requirements analysis and documentation */}
        <Route path="/design" element={<DesignPage />} />               {/* System architecture and design specifications */}
        <Route path="/implementation" element={<ImplementationPage />} /> {/* Coding and development phase */}
        <Route path="/testing" element={<TestingPage />} />             {/* Quality assurance and testing methodologies */}
        <Route path="/deployment" element={<DeploymentPage />} />       {/* Production deployment and go-live processes */}
        <Route path="/maintenance" element={<MaintenancePage />} />     {/* Post-deployment support and updates */}
        <Route path="/review" element={<ReviewPage />} />               {/* Project retrospective and lessons learned */
        
        {/* AI-augmented SDLC phase routes - modern development with AI integration */}
        <Route path="/ai-planning" element={<AIPlanningPage />} />           {/* AI-assisted project planning with smart recommendations */}
        <Route path="/ai-analysis" element={<AnalysisWithAIPage />} />       {/* AI-enhanced requirements analysis and validation */}
        <Route path="/ai-design" element={<AIDesignPage />} />               {/* AI-powered design patterns and architecture suggestions */}
        <Route path="/ai-implementation" element={<AIImplementationPage />} /> {/* AI-assisted coding with automated code generation */}
        <Route path="/ai-testing" element={<AITestingPage />} />             {/* AI-driven test case generation and execution */}
        <Route path="/ai-deployment" element={<AIDeploymentPage />} />       {/* AI-optimized deployment with predictive analytics */}
        <Route path="/ai-maintenance" element={<AIMaintenancePage />} />     {/* AI-supported monitoring and predictive maintenance */}
        <Route path="/ai-review" element={<AIReviewPage />} />               {/* AI-enhanced analytics and process optimization */}
        
        {/* Interactive simulation routes for hands-on learning */}
        <Route path="/simulation" element={<SimulationHub />} />                        {/* Main simulation selection hub */}
        <Route path="/simulation/:type" element={<SimulationHub />} />                  {/* Filtered simulations by type (sdlc/ai-sdlc) */}
        <Route path="/simulation/:type/:scenarioId" element={<SimulationEngine />} />   {/* Individual simulation with decision-making scenarios */}
        
        {/* Interactive assessment routes */}
        <Route path="/drag-drop-quiz/:type" element={<DragDropQuiz />} />               {/* Drag-and-drop phase ordering quiz */}
        
        {/* Real-world case study routes */}
        <Route path="/case-studies/:type" element={<CaseStudyList />} />               {/* Case study library filtered by type */}
        <Route path="/case-study/:type/:caseId" element={<CaseStudy />} />             {/* Individual case study with detailed analysis */
      </Routes>
    </Router>
  );
}
export default App;
