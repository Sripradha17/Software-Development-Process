/**
 * Main Application Component
 *
 * This is the root component of the Software Development Process educational app.
 * It sets up routing for all pages including:
 * - Traditional SDLC phases (planning, analysis, design, implementation, testing, deployment, maintenance, review)
 * - AI-augmented SDLC phases with modern AI integration
 * - Interactive simulations and quizzes
 * - Case studies for real-world learning
 *
 * Every route is wrapped in PageTransition and rendered inside an
 * AnimatePresence keyed on the current path, so navigating between pages
 * fades/slides instead of hard-cutting. A scroll progress bar and a
 * scroll-to-top button are mounted once here so they persist across routes.
 */

// React Router imports for client-side routing
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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

// Cross-route chrome: persists across navigation, doesn't reset on page change
import PageTransition from "./components/PageTransition";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTopButton from "./components/ScrollToTopButton";

const wrap = (Component) => (
  <PageTransition>
    <Component />
  </PageTransition>
);

/**
 * AnimatedRoutes
 *
 * Keys the Routes tree on the current pathname so AnimatePresence can detect
 * a route change and play the outgoing page's exit animation before the
 * incoming page enters.
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Landing and overview pages */}
        <Route path="/" element={wrap(IntroPage)} />
        <Route path="/learn-software-development" element={wrap(LearnSoftwareDev)} />
        <Route path="/story" element={wrap(DevelopmentProcessStory)} />
        <Route path="/ai-augmented-development" element={wrap(AiAugmentedSoftwareDevelopment)} />
        <Route path="/ai-augmented-story" element={wrap(AiAugmentedDevelopmentStory)} />

        {/* Traditional SDLC phase routes - classic software development methodology */}
        <Route path="/planning" element={wrap(PlanningPage)} />
        <Route path="/analysis" element={wrap(AnalysisPage)} />
        <Route path="/design" element={wrap(DesignPage)} />
        <Route path="/implementation" element={wrap(ImplementationPage)} />
        <Route path="/testing" element={wrap(TestingPage)} />
        <Route path="/deployment" element={wrap(DeploymentPage)} />
        <Route path="/maintenance" element={wrap(MaintenancePage)} />
        <Route path="/review" element={wrap(ReviewPage)} />

        {/* AI-augmented SDLC phase routes - modern development with AI integration */}
        <Route path="/ai-planning" element={wrap(AIPlanningPage)} />
        <Route path="/ai-analysis" element={wrap(AnalysisWithAIPage)} />
        <Route path="/ai-design" element={wrap(AIDesignPage)} />
        <Route path="/ai-implementation" element={wrap(AIImplementationPage)} />
        <Route path="/ai-testing" element={wrap(AITestingPage)} />
        <Route path="/ai-deployment" element={wrap(AIDeploymentPage)} />
        <Route path="/ai-maintenance" element={wrap(AIMaintenancePage)} />
        <Route path="/ai-review" element={wrap(AIReviewPage)} />

        {/* Interactive simulation routes for hands-on learning */}
        <Route path="/simulation" element={wrap(SimulationHub)} />
        <Route path="/simulation/:type" element={wrap(SimulationHub)} />
        <Route path="/simulation/:type/:scenarioId" element={wrap(SimulationEngine)} />

        {/* Interactive assessment routes */}
        <Route path="/drag-drop-quiz/:type" element={wrap(DragDropQuiz)} />

        {/* Real-world case study routes */}
        <Route path="/case-studies/:type" element={wrap(CaseStudyList)} />
        <Route path="/case-study/:type/:caseId" element={wrap(CaseStudy)} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollProgressBar />
      <AnimatedRoutes />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
