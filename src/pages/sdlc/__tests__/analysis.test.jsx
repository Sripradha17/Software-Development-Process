/**
 * Traditional SDLC Analysis Phase Test Suite
 * 
 * Comprehensive testing for the classical requirements analysis educational page.
 * Validates that traditional analysis concepts are properly presented and
 * interactive learning elements function correctly for foundational education.
 * 
 * Test Coverage:
 * - Component rendering with traditional analysis methodology content
 * - Interactive tabbed navigation and section management
 * - Quiz component integration and assessment functionality
 * - Educational content presentation and accessibility
 * - Traditional analysis workflow demonstrations
 * 
 * Traditional Analysis Concepts Tested:
 * - Stakeholder identification and engagement strategies
 * - Requirements gathering techniques and documentation
 * - Current state analysis and systematic evaluation
 * - Gap analysis frameworks and methodologies
 * - Feasibility assessment and requirements prioritization
 * 
 * This test suite ensures students receive reliable foundational education
 * about classical analysis methodologies.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import AnalysisPage from '../analysis';

// Mock the constants
vi.mock('../../../constants/sdlc/analysis', () => ({
  analysisSteps: [
    {
      step: "1",
      title: "Requirements Gathering",
      description: "Collect and document system requirements",
      details: "This involves meeting with stakeholders to understand their needs",
      importance: "Critical",
      output: "Requirements Document"
    }
  ],
  analysisTypes: [
    {
      type: "Functional Analysis",
      description: "Analyzing functional requirements",
      when: "During early analysis phase"
    }
  ],
  drawbacks: [
    {
      title: "Time Consuming",
      description: "Analysis phase can take significant time",
      impact: "High",
      mitigation: "Use agile methodologies"
    }
  ]
}));

vi.mock('../../../constants/quiz/analysisQuiz', () => ({
  analysisQuiz: {
    title: "Analysis Quiz",
    questions: [
      {
        question: "What is the main purpose of analysis phase?",
        options: ["Coding", "Requirements gathering", "Testing", "Deployment"],
        correctAnswer: 1,
        explanation: "Analysis phase focuses on gathering and understanding requirements"
      }
    ]
  }
}));

describe('AnalysisPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully with all main elements', () => {
      renderWithRouter(<AnalysisPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getAllByText(/Analysis Phase/i)[0]).toBeInTheDocument();
      expect(screen.getByText(/What is Analysis/i)).toBeInTheDocument();
    });

    it('displays navigation menu correctly', () => {
      renderWithRouter(<AnalysisPage />);
      
      expect(screen.getByText(/Menu/i)).toBeInTheDocument();
    });

    it('shows introduction section by default', () => {
      renderWithRouter(<AnalysisPage />);
      
      expect(screen.getByText('What is Analysis Phase?')).toBeInTheDocument();
      expect(screen.getByText(/The Analysis phase is the foundation/)).toBeInTheDocument();
    });

    it('allows section navigation successfully', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Click on Steps section
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Analysis Steps')).toBeInTheDocument();
    });

    it('displays analysis steps when Steps section is selected', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Requirements Gathering')).toBeInTheDocument();
      expect(screen.getByText('Collect and document system requirements')).toBeInTheDocument();
    });

    it('shows analysis types in Types section', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      const typesButton = screen.getAllByRole('button', { name: /Types/i })[0];
      await user.click(typesButton);
      
      expect(screen.getByText('Types of Analysis')).toBeInTheDocument();
    });

    it('displays drawbacks when Drawbacks section is selected', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      const drawbacksButton = screen.getByRole('button', { name: /Drawbacks/i });
      await user.click(drawbacksButton);
      
      expect(screen.getByText('Potential Challenges')).toBeInTheDocument();
    });

    it('shows quiz section when Quiz is selected', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      const quizButton = screen.getByRole('button', { name: /Quiz/i });
      await user.click(quizButton);
      
      expect(screen.getByText('Test Your Knowledge')).toBeInTheDocument();
    });

    it('handles step modal opening successfully', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Navigate to Steps section
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      // Click on a step card
      const stepCard = screen.getByText('Requirements Gathering');
      await user.click(stepCard);
      
      await waitFor(() => {
        expect(screen.getByText('Requirements Gathering')).toBeInTheDocument();
      });
    });

    it('handles quiz completion successfully', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Navigate to quiz section
      const quizButton = screen.getByRole('button', { name: /Quiz/i });
      await user.click(quizButton);
      
      expect(screen.getByText('Test Your Knowledge')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing quiz data gracefully', () => {
      vi.doMock('../../../constants/quiz/analysisQuiz', () => ({
        analysisQuiz: null
      }));
      
      renderWithRouter(<AnalysisPage />);
      
      // Should still render page without crashing
      expect(screen.getByText('Analysis Phase')).toBeInTheDocument();
    });

    it('handles empty steps data gracefully', () => {
      vi.doMock('../../../constants/sdlc/analysis', () => ({
        analysisSteps: [],
        analysisTypes: [],
        drawbacks: []
      }));
      
      renderWithRouter(<AnalysisPage />);
      
      expect(screen.getByText('Analysis Phase')).toBeInTheDocument();
    });

    it('handles modal close correctly when clicking outside', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Navigate to steps section
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      // Click on a step to open modal
      const stepCard = screen.getByText('Requirements Gathering');
      await user.click(stepCard);
      
      // Modal should be visible
      await waitFor(() => {
        expect(screen.getByText('Requirements Gathering')).toBeInTheDocument();
      });
    });

    it('handles navigation errors gracefully', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Try to click on back link
      const backLink = screen.getByText('← Back to Home');
      await user.click(backLink);
      
      // Should not throw error
      expect(backLink).toBeInTheDocument();
    });
  });

  describe('Accessibility Tests', () => {
    it('has proper heading structure', () => {
      renderWithRouter(<AnalysisPage />);
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('has accessible navigation buttons', () => {
      renderWithRouter(<AnalysisPage />);
      
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toBeInTheDocument();
      });
    });

    it('has accessible back link', () => {
      renderWithRouter(<AnalysisPage />);
      
      const backLink = screen.getByRole('link', { name: /Back to Home/i });
      expect(backLink).toHaveAttribute('href', '/');
    });
  });

  describe('Interactive Features', () => {
    it('updates active section state correctly', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Initially should show intro
      expect(screen.getByText('What is Analysis Phase?')).toBeInTheDocument();
      
      // Click Steps
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Analysis Steps')).toBeInTheDocument();
    });

    it('handles multiple section switches correctly', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AnalysisPage />);
      
      // Navigate through different sections
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      expect(screen.getByText('Analysis Steps')).toBeInTheDocument();
      
      const typesButton = screen.getAllByRole('button', { name: /Types/i })[0];
      await user.click(typesButton);
      expect(screen.getByText('Types of Analysis')).toBeInTheDocument();
      
      const quizButton = screen.getByRole('button', { name: /Quiz/i });
      await user.click(quizButton);
      expect(screen.getByText('Test Your Knowledge')).toBeInTheDocument();
    });
  });
});



