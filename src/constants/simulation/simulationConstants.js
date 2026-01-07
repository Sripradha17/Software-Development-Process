/**
 * Unified Simulation System Configuration
 * 
 * Central configuration file that combines and manages all simulation scenarios
 * for both traditional SDLC and AI-augmented development processes.
 * 
 * This file provides:
 * - Type definitions for different simulation categories
 * - Unified access to all simulation scenarios regardless of type
 * - Appropriate calculation functions for different simulation types
 * - Navigation configuration for simulation hub interface
 * - Performance evaluation thresholds for outcome assessment
 * 
 * The simulation system allows students to experience realistic software
 * development scenarios with decision-making consequences that affect
 * project outcomes like budget, timeline, quality, and stakeholder satisfaction.
 */

// Import simulation scenarios and calculation functions
// Traditional SDLC simulations with classic development methodologies
import { 
  sdlcSimulationScenarios,    // Array of traditional SDLC simulation scenarios
  calculateFinalOutcome       // Outcome calculation function for traditional simulations
} from './sdlcSimulationScenarios';

// AI-augmented SDLC simulations with modern AI integration
import { 
  aiSdlcSimulationScenarios,  // Array of AI-enhanced simulation scenarios
  calculateAiFinalOutcome     // Outcome calculation function for AI simulations
} from './aiSdlcSimulationScenarios';

/**
 * Simulation Type Constants
 * 
 * Defines the two main categories of simulations available in the platform.
 * These types determine which scenarios are loaded and which calculation
 * functions are used for outcome evaluation.
 */
export const SIMULATION_TYPES = {
  SDLC: 'sdlc',           // Traditional software development life cycle simulations
  AI_SDLC: 'ai-sdlc'      // AI-augmented software development simulations
};

/**
 * Unified Scenario Access Function
 * 
 * Provides a single interface to access simulation scenarios regardless of type.
 * Supports filtering by simulation type or returning all available scenarios.
 * 
 * @param {string|null} type - Optional simulation type filter (SDLC or AI_SDLC)
 * @returns {Array} Array of simulation scenario objects
 */
export const getAllSimulationScenarios = (type = null) => {
  if (type === SIMULATION_TYPES.SDLC) {
    return sdlcSimulationScenarios;           // Return only traditional SDLC scenarios
  }
  if (type === SIMULATION_TYPES.AI_SDLC) {
    return aiSdlcSimulationScenarios;         // Return only AI-augmented scenarios
  }
  // Return combined array of all available scenarios for general browsing
  return [...sdlcSimulationScenarios, ...aiSdlcSimulationScenarios];
};

/**
 * Calculation Function Resolver
 * 
 * Returns the appropriate outcome calculation function based on simulation type.
 * Different simulation types may have different metrics and calculation logic.
 * 
 * @param {string} scenarioType - The type of simulation (SDLC or AI_SDLC)
 * @returns {Function} Appropriate calculation function for the scenario type
 */
export const getCalculationFunction = (scenarioType) => {
  // AI simulations include additional metrics like AI efficiency
  return scenarioType === SIMULATION_TYPES.AI_SDLC ? calculateAiFinalOutcome : calculateFinalOutcome;
};

/**
 * Simulation Hub Navigation Configuration
 * 
 * Defines the navigation structure and metadata for the simulation selection interface.
 * Each simulation type has its own navigation card with description and routing.
 */
export const simulationNavItems = {
  [SIMULATION_TYPES.SDLC]: {
    title: "Traditional SDLC Simulations",                        // Display title for navigation card
    description: "Experience software development using traditional methodologies", // Card description
    icon: "⚙️",                                                  // Visual icon for the simulation type
    path: "/simulation/sdlc"                                    // URL path for this simulation type
  },
  [SIMULATION_TYPES.AI_SDLC]: {
    title: "AI-Augmented SDLC Simulations",                      // Display title for AI simulation card
    description: "Explore AI-enhanced development processes and tools", // Card description
    icon: "🤖",                                                  // AI-themed icon
    path: "/simulation/ai-sdlc"                                 // URL path for AI simulations
  }
};

/**
 * Performance Evaluation Thresholds
 * 
 * Defines the score ranges used to categorize simulation outcomes.
 * These thresholds determine the final grade and feedback provided to users.
 */
export const PERFORMANCE_THRESHOLDS = {
  EXCELLENT: 80,    // 80-100: Outstanding performance with minimal issues
  GOOD: 60,         // 60-79: Good performance with minor challenges
  FAIR: 40,         // 40-59: Acceptable performance with some significant issues
  POOR: 20          // 0-39: Poor performance with major problems
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