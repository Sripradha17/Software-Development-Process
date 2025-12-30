import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import React from 'react';

// Custom render function that wraps components with necessary providers
export function renderWithRouter(ui, options = {}) {
  const { initialEntries = ['/'], ...renderOptions } = options;
  
  const Wrapper = ({ children }) => React.createElement(MemoryRouter, { initialEntries }, children);

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Mock data for testing
export const mockQuizData = {
  title: "Test Quiz",
  questions: [
    {
      question: "What is the first phase of SDLC?",
      options: ["Planning", "Analysis", "Design", "Implementation"],
      correctAnswer: 1,
      explanation: "Analysis is the first phase where requirements are gathered."
    }
  ]
};

export const mockStepsData = [
  {
    step: "Step 1",
    title: "Test Step",
    description: "This is a test step",
    details: "Detailed information about the test step",
    importance: "High",
    output: "Test output"
  }
];

export const mockMenuItems = [
  { label: "Home", path: "/", icon: "🏠" },
  { label: "Analysis", path: "/analysis", icon: "📊" },
  { label: "Design", path: "/design", icon: "🎨" }
];

// Helper functions for common test scenarios
export const createMockProps = (overrides = {}) => ({
  navigate: vi.fn(),
  ...overrides
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