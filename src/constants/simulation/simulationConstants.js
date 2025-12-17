// Unified Simulation Constants
// Combines SDLC and AI-SDLC simulation scenarios

import { sdlcSimulationScenarios, calculateFinalOutcome } from './sdlcSimulationScenarios';
import { aiSdlcSimulationScenarios, calculateAiFinalOutcome } from './aiSdlcSimulationScenarios';

// Simulation types
export const SIMULATION_TYPES = {
  SDLC: 'sdlc',
  AI_SDLC: 'ai-sdlc'
};

// Combined scenarios for the simulation hub
export const getAllSimulationScenarios = (type = null) => {
  if (type === SIMULATION_TYPES.SDLC) {
    return sdlcSimulationScenarios;
  }
  if (type === SIMULATION_TYPES.AI_SDLC) {
    return aiSdlcSimulationScenarios;
  }
  return [...sdlcSimulationScenarios, ...aiSdlcSimulationScenarios];
};

// Get calculation function based on scenario type
export const getCalculationFunction = (scenarioType) => {
  return scenarioType === SIMULATION_TYPES.AI_SDLC ? calculateAiFinalOutcome : calculateFinalOutcome;
};

// Simulation navigation items
export const simulationNavItems = {
  [SIMULATION_TYPES.SDLC]: {
    title: "Traditional SDLC Simulations",
    description: "Experience software development using traditional methodologies",
    icon: "⚙️",
    path: "/simulation/sdlc"
  },
  [SIMULATION_TYPES.AI_SDLC]: {
    title: "AI-Augmented SDLC Simulations", 
    description: "Explore AI-enhanced development processes and tools",
    icon: "🤖",
    path: "/simulation/ai-sdlc"
  }
};

// Performance thresholds for outcome evaluation
export const PERFORMANCE_THRESHOLDS = {
  EXCELLENT: 80,
  GOOD: 60,
  FAIR: 40,
  POOR: 20
};

// Evaluation criteria weights
export const EVALUATION_WEIGHTS = {
  budget: 0.2,
  timeline: 0.2,
  userSatisfaction: 0.25,
  security: 0.15,
  performance: 0.15,
  reputation: 0.05
};

// AI-specific evaluation weights
export const AI_EVALUATION_WEIGHTS = {
  ...EVALUATION_WEIGHTS,
  aiEfficiency: 0.1,
  userSatisfaction: 0.2, // Reduced to accommodate AI efficiency
  reputation: 0.05
};

export { sdlcSimulationScenarios, aiSdlcSimulationScenarios, calculateFinalOutcome, calculateAiFinalOutcome };