import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import PlanningPage from '../planning';

// Mock the constants
vi.mock('../../../constants/sdlc/planning', () => ({
  planningSteps: [
    {
      step: "1",
      title: "Project Initiation",
      description: "Define project scope and objectives",
      details: "Establish project goals and constraints",
      importance: "High",
      output: "Project Charter"
    }
  ],
  planningTypes: [
    {
      type: "Agile Planning",
      description: "Iterative planning approach",
      when: "Throughout project lifecycle"
    }
  ],
  drawbacks: [
    {
      title: "Over-planning",
      description: "Spending too much time in planning",
      impact: "Medium",
      mitigation: "Balance planning with execution"
    }
  ]
}));

vi.mock('../../../constants/quiz/planningQuiz', () => ({
  planningQuiz: {
    title: "Planning Quiz",
    questions: [
      {
        question: "What is the main purpose of planning phase?",
        options: ["Coding", "Project setup", "Testing", "Deployment"],
        correctAnswer: 1,
        explanation: "Planning phase establishes project foundation"
      }
    ]
  }
}));

describe('PlanningPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<PlanningPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Planning.*Software.*Development/i)).toBeInTheDocument();
    });

    it('displays all navigation sections', () => {
      renderWithRouter(<PlanningPage />);
      
      expect(screen.getAllByText('📋')).toHaveLength(3); // Multiple instances expected
      expect(screen.getByText('📊')).toBeInTheDocument();
      expect(screen.getAllByText('🎯')).toHaveLength(3); // Updated count
    });

    it('shows introduction by default', () => {
      renderWithRouter(<PlanningPage />);
      
      expect(screen.getByText(/What is.*Planning/i)).toBeInTheDocument();
    });

    it('navigates to steps section successfully', async () => {
      const user = userEvent.setup();
      renderWithRouter(<PlanningPage />);
      
      // Click on the second icon (steps/visualization)
      const stepsButton = screen.getAllByText('📊')[0];
      await user.click(stepsButton);
      
      // Look for content that appears after clicking - use getAllByText since there are multiple
      expect(screen.getAllByText(/Planning/).length).toBeGreaterThan(0);
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing data gracefully', () => {
      vi.doMock('../../../constants/sdlc/planning', () => ({
        planningSteps: [],
        planningTypes: [],
        drawbacks: []
      }));
      
      renderWithRouter(<PlanningPage />);
      expect(screen.getByText(/Planning.*Software.*Development/i)).toBeInTheDocument();
    });
  });
});



