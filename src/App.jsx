import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/sdlc/IntroPage";
import LearnSoftwareDev from "./pages/sdlc/learnSoftwareDevelopment";
import AiAugmentedSoftwareDevelopment from "./pages/aisdlc/aiAugmentedSoftwareDevelopment";
import AiAugmentedDevelopmentStory from "./pages/aisdlc/aiAugmentedSoftwareDevelopmentStory";
import DevelopmentProcessStory from "./pages/sdlc/story";
import PlanningPage from "./pages/sdlc/planning";
import AnalysisPage from "./pages/sdlc/analysis";
import DesignPage from "./pages/sdlc/design";
import ImplementationPage from "./pages/sdlc/implementation";
import TestingPage from "./pages/sdlc/testing";
import DeploymentPage from  "./pages/sdlc/deployment";
import MaintenancePage from "./pages/sdlc/maintenance";
import ReviewPage from "./pages/sdlc/review";

import AIPlanningPage from "./pages/aisdlc/planning";
import AnalysisWithAIPage from "./pages/aisdlc/analysis";
import AIDesignPage from "./pages/aisdlc/design";
import AIImplementationPage from "./pages/aisdlc/implementation";
import AITestingPage from "./pages/aisdlc/testing";
import AIDeploymentPage from "./pages/aisdlc/deployment";
import AIMaintenancePage from "./pages/aisdlc/maintenance";
import AIReviewPage from "./pages/aisdlc/review";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route
          path="/learn-software-development"
          element={<LearnSoftwareDev />}
        />
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
      </Routes>
    </Router>
  );
}
export default App;
