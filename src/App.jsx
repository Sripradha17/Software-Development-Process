import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/sdlc/IntroPage";
import LearnSoftwareDev from "./pages/sdlc/learnSoftwareDevelopment";
import AiAugmentedSoftwareDevelopment from "./pages/ai-sdlc/aiAugmentedSoftwareDevelopment";
import AiAugmentedDevelopmentStory from "./pages/ai-sdlc/aiAugmentedSoftwareDevelopmentStory";
import DevelopmentProcessStory from "./pages/sdlc/story";
import PlanningPage from "./pages/sdlc/planning";
import AnalysisPage from "./pages/sdlc/analysis";
import DesignPage from "./pages/sdlc/design";
import ImplementationPage from "./pages/sdlc/implementation";
import TestingPage from "./pages/sdlc/testing";
import DeploymentPage from  "./pages/sdlc/deployment";
import MaintenancePage from "./pages/sdlc/maintenance";
import ReviewPage from "./pages/sdlc/review";

import AIPlanningPage from "./pages/ai-sdlc/planning";
import AnalysisWithAIPage from "./pages/ai-sdlc/analysis";
import AIDesignPage from "./pages/ai-sdlc/design";
import AIImplementationPage from "./pages/ai-sdlc/implementation";
import AITestingPage from "./pages/ai-sdlc/testing";
import AIDeploymentPage from "./pages/ai-sdlc/deployment";
import AIMaintenancePage from "./pages/ai-sdlc/maintenance";
import AIReviewPage from "./pages/ai-sdlc/review";

// Simulation components
import SimulationHub from "./components/SimulationHub";
import SimulationEngine from "./components/SimulationEngine";


function App() {
  // Main menu items for all pages
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/learn-software-development" element={<LearnSoftwareDev />} />
        <Route path="/story" element={<DevelopmentProcessStory />} />
        <Route path="/ai-augmented-development" element={<AiAugmentedSoftwareDevelopment />} />
        <Route path="/ai-augmented-story" element={<AiAugmentedDevelopmentStory />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/implementation" element={<ImplementationPage />} />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/deployment" element={<DeploymentPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/ai-planning" element={<AIPlanningPage />} />
        <Route path="/ai-analysis" element={<AnalysisWithAIPage />} />
        <Route path="/ai-design" element={<AIDesignPage />} />
        <Route path="/ai-implementation" element={<AIImplementationPage />} />
        <Route path="/ai-testing" element={<AITestingPage />} />
        <Route path="/ai-deployment" element={<AIDeploymentPage />} />
        <Route path="/ai-maintenance" element={<AIMaintenancePage />} />
        <Route path="/ai-review" element={<AIReviewPage />} />
        
        {/* Simulation routes */}
        <Route path="/simulation" element={<SimulationHub />} />
        <Route path="/simulation/:type" element={<SimulationHub />} />
        <Route path="/simulation/:type/:scenarioId" element={<SimulationEngine />} />
      </Routes>
    </Router>
  );
}
export default App;
