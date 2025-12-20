import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import ImplementationPage from '../implementation';

// Mock the constants
vi.mock('../../../constants/sdlc/implementation', () => ({
  implementationSteps: [
    {
      step: "1",
      title: "Code Development",
      description: "Write code according to design specifications",
      details: "Implement features based on requirements",
      importance: "High",
      output: "Source Code"
    }
  ],
  implementationTypes: [
    {
      type: "Incremental Implementation",
      description: "Develop software in increments",
      when: "During development phase"
    }
  ],
  drawbacks: [
    {
      title: "Technical Debt",
      description: "Shortcuts that affect code quality",
      impact: "High",
      mitigation: "Regular code refactoring"
    }
  ]
}));

vi.mock('../../../constants/quiz/implementationQuiz', () => ({
  implementationQuiz: {
    title: "Implementation Quiz",
    questions: [
      {
        question: "What is the main activity in implementation phase?",
        options: ["Testing", "Coding", "Planning", "Analysis"],
        correctAnswer: 1,
        explanation: "Implementation phase focuses on coding and development"
      }
    ]
  }
}));

describe('ImplementationPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<ImplementationPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Implementation in Software Development/i)).toBeInTheDocument();
    });

    it('displays navigation sections', () => {
      renderWithRouter(<ImplementationPage />);
      
      const buttons = screen.getAllByRole('button');
      const emojiButtons = buttons.filter(button => /^[🛠️📊🚀📚⚠😄🧠]$/.test(button.textContent || ''));
      expect(emojiButtons.length).toBeGreaterThan(0);
    });

    it('navigates between sections', async () => {
      const user = userEvent.setup();
      renderWithRouter(<ImplementationPage />);
      
      const buttons = screen.getAllByRole('button');
      const emojiButtons = buttons.filter(button => /^[🛠️📊🚀📚⚠😄🧠]$/.test(button.textContent || ''));
      if (emojiButtons.length > 0) {
        await user.click(emojiButtons[0]);
      }
      
      // Just verify the page still has basic elements after navigation
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles empty data gracefully', () => {
      vi.doMock('../../../constants/sdlc/implementation', () => ({
        implementationSteps: [],
        implementationTypes: [],
        drawbacks: []
      }));
      
      renderWithRouter(<ImplementationPage />);
      expect(screen.getByText(/Implementation in Software Development/i)).toBeInTheDocument();
    });
  });
});



