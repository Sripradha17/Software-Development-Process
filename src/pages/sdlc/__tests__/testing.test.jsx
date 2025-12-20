import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import TestingPage from '../testing';

// Mock the constants
vi.mock('../../../constants/sdlc/testing', () => ({
  testingSteps: [
    {
      step: "1",
      title: "Unit Testing",
      description: "Test individual components",
      details: "Verify each unit works correctly",
      importance: "High",
      output: "Test Results"
    }
  ],
  testingTypes: [
    {
      type: "Automated Testing",
      description: "Using tools for testing",
      when: "Throughout development"
    }
  ],
  drawbacks: [
    {
      title: "Incomplete Testing",
      description: "Not covering all scenarios",
      impact: "High",
      mitigation: "Comprehensive test planning"
    }
  ]
}));

describe('TestingPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<TestingPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText('Testing in Software Development')).toBeInTheDocument();
    });

    it('displays testing steps', async () => {
      const user = userEvent.setup();
      renderWithRouter(<TestingPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps|view process visualization/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Unit Testing')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing testing data', () => {
      vi.doMock('../../../constants/sdlc/testing', () => ({
        testingSteps: null
      }));
      
      renderWithRouter(<TestingPage />);
      expect(screen.getByText('Testing in Software Development')).toBeInTheDocument();
    });
  });
});



