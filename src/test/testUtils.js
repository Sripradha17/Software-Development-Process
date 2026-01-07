/**
 * Test Utilities for Software Development Process Platform
 * 
 * Comprehensive testing utility library that provides reusable functions,
 * mock data, and helper utilities for testing React components and functionality
 * across the educational platform.
 * 
 * Key Features:
 * - Custom render functions with router context for navigation testing
 * - Mock data generators for consistent test scenarios
 * - Helper functions for common testing patterns
 * - Standardized mock configurations for external dependencies
 * 
 * Testing Philosophy:
 * - Provide realistic mock data that mirrors actual application data structures
 * - Enable testing of components that depend on React Router without complex setup
 * - Create reusable patterns to reduce test code duplication
 * - Support both unit tests and integration tests with appropriate mocking
 * 
 * Usage:
 * Import specific utilities as needed in test files to maintain clean,
 * focused test code that accurately validates component behavior.
 */

// Testing library imports for component rendering and interaction
import { render } from '@testing-library/react';     // Core testing utility for component rendering
import { MemoryRouter } from 'react-router-dom';     // In-memory router for navigation testing
import { vi } from 'vitest';                         // Vitest mocking utilities
import React from 'react';                          // React for creating wrapper components

/**
 * Custom Render Function with Router Context
 * 
 * Enhanced render function that wraps components with MemoryRouter to enable
 * testing of components that use React Router hooks and navigation.
 * 
 * @param {ReactElement} ui - Component to render
 * @param {Object} options - Rendering options
 * @param {Array} options.initialEntries - Initial router entries (default: ['/'])
 * @returns {RenderResult} Testing library render result with router context
 */
export function renderWithRouter(ui, options = {}) {
  const { initialEntries = ['/'], ...renderOptions } = options;
  
  // Create wrapper component that provides router context
  const Wrapper = ({ children }) => React.createElement(MemoryRouter, { initialEntries }, children);

  // Render component with router wrapper and pass through additional options
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

/**
 * Mock Quiz Data for Testing
 * 
 * Standardized quiz data structure that mirrors the actual quiz format
 * used throughout the application. Provides consistent test data for
 * quiz components and related functionality.
 */
export const mockQuizData = {
  title: "Test Quiz",                                    // Quiz title for display
  questions: [
    {
      question: "What is the first phase of SDLC?",      // Question text
      options: ["Planning", "Analysis", "Design", "Implementation"], // Multiple choice options
      correctAnswer: 1,                                   // Index of correct answer (0-based)
      explanation: "Analysis is the first phase where requirements are gathered." // Educational explanation
    }
  ]
};

/**
 * Mock Step Data for Testing
 * 
 * Standardized step/phase data structure for testing educational content
 * components that display SDLC phases or process steps.
 */
export const mockStepsData = [
  {
    step: "Step 1",                                       // Step identifier
    title: "Test Step",                                  // Human-readable step title
    description: "This is a test step",                  // Brief step description
    details: "Detailed information about the test step", // Comprehensive step information
    importance: "High",                                  // Priority or importance level
    output: "Test output"                                // Expected deliverables or outcomes
  }
];

/**
 * Mock Menu Items for Testing
 * 
 * Standardized navigation menu data for testing menu components
 * and navigation-related functionality.
 */
export const mockMenuItems = [
  { label: "Home", path: "/", icon: "🏠" },            // Home page navigation
  { label: "Analysis", path: "/analysis", icon: "📊" },   // Analysis phase navigation
  { label: "Design", path: "/design", icon: "🎨" }      // Design phase navigation
];

/**
 * Mock Props Generator
 * 
 * Utility function for creating standardized mock props with common
 * patterns used across components. Allows for easy customization
 * while providing sensible defaults.
 * 
 * @param {Object} overrides - Custom prop values to override defaults
 * @returns {Object} Mock props object with navigation and other common props
 */
export const createMockProps = (overrides = {}) => ({
  navigate: vi.fn(),                                      // Mock navigation function
  ...overrides                                            // Custom overrides for specific test needs
});

export const waitForElementToLoad = async (getByTestId, testId, timeout = 3000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Element with testid ${testId} did not load within ${timeout}ms`));
    }, timeout);

    const checkForElement = () => {
      try {
        const element = getByTestId(testId);
        clearTimeout(timer);
        resolve(element);
      } catch (error) {
        setTimeout(checkForElement, 100);
      }
    };

    checkForElement();
  });
};