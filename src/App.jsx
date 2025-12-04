import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import LearnSoftwareDev from "./pages/learnSoftwareDevelopment";
import DevelopmentProcessStory from "./pages/story";
import PlanningPage from "./pages/planning";
import AnalysisPage from "./pages/analysis";
import DesignPage from "./pages/design";
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
      </Routes>
    </Router>
  );
}
export default App;
