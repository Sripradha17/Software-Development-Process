import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import LearnSoftwareDev from "./pages/learnSoftwareDevelopment";
import DevelopmentProcessStory from "./pages/story";
import PlanningPage from "./pages/planning";
import AnalysisPage from "./pages/analysis";
import DesignPage from "./pages/design";
import ImplementationPage from "./pages/implementation";
import TestingPage from "./pages/testing";
import DeploymentPage from  "./pages/deployment";
import MaintenancePage from "./pages/maintenance";
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
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/implementation" element={<ImplementationPage />} />
        <Route path="/testing" element={<TestingPage />} />
        <Route path="/deployment" element={<DeploymentPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
}
export default App;
