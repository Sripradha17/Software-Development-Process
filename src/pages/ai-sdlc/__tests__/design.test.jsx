import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import AIDesignPage from '../design';

// Mock the constants
vi.mock('../../../constants/ai-sdlc/aiDesign', () => ({
  aiDesignSteps: [
    {
      step: "1",
      title: "AI-Assisted Design Generation",
      description: "Generate design patterns using AI",
      details: "Use machine learning for optimal designs",
      importance: "High",
      output: "AI-Generated Designs"
    }
  ],
  aiDesignTypes: [
    {
      type: "Generative Design",
      description: "AI creates multiple design alternatives",
      when: "Design phase"
    }
  ],
  aiDesignDrawbacks: [
    {
      title: "Over-reliance on AI",
      description: "Losing human creativity in design",
      impact: "Medium",
      mitigation: "Balance AI suggestions with human insight"
    }
  ]
}));

describe('AI Design Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the AI design page successfully', () => {
      renderWithRouter(<AIDesignPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText('AI-Augmented Design')).toBeInTheDocument();
    });

    it('displays AI design enhancement features', () => {
      renderWithRouter(<AIDesignPage />);

      expect(screen.getByText('What is AI-Augmented Design?')).toBeInTheDocument();
    });

    it('shows AI design steps', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIDesignPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential AI Design Steps')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing AI design data', () => {
      vi.doMock('../../../constants/ai-sdlc/aiDesign', () => ({
        aiDesignSteps: null
      }));
      
      renderWithRouter(<AIDesignPage />);
      expect(screen.getByText('AI-Augmented Design')).toBeInTheDocument();
    });
  });
});
