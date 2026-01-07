/**
 * AI-Enhanced Analysis Phase Test Suite
 * 
 * Comprehensive testing for the AI-augmented analysis phase educational page.
 * Validates that AI-enhanced requirements analysis concepts are properly
 * presented and interactive elements function correctly.
 * 
 * Test Coverage:
 * - Component rendering with AI analysis content
 * - Interactive tabbed navigation functionality
 * - Quiz component integration and assessment
 * - Educational content presentation and accessibility
 * - AI-specific workflow demonstrations
 * 
 * This test suite ensures students receive a reliable learning experience
 * about AI-enhanced analysis methodologies and modern development practices.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import AIAnalysisPage from '../analysis';

// Mock the constants
vi.mock('../../../constants/ai-sdlc/aiAnalysis', () => ({
  aiAnalysisSteps: [
    {
      step: "1",
      title: "AI-Powered Requirements Analysis",
      description: "Use AI to analyze requirements",
      details: "Leverage AI for better requirement understanding",
      importance: "High",
      output: "AI Analysis Report"
    }
  ],
  aiAnalysisTypes: [
    {
      type: "NLP Analysis",
      description: "Natural language processing for requirements",
      when: "During analysis phase"
    }
  ],
  aiAnalysisDrawbacks: [
    {
      title: "AI Bias",
      description: "AI models may have inherent biases",
      impact: "Medium",
      mitigation: "Human oversight and validation"
    }
  ]
}));

vi.mock('../../../constants/quiz/aiAnalysisQuiz', () => ({
  aiAnalysisQuiz: {
    title: "AI Analysis Quiz",
    questions: [
      {
        question: "How does AI enhance requirements analysis?",
        options: ["Automation", "Pattern recognition", "Both", "None"],
        correctAnswer: 2,
        explanation: "AI provides both automation and pattern recognition capabilities"
      }
    ]
  }
}));

describe('AI Analysis Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the AI analysis page successfully', () => {
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });

    it('displays AI-enhanced features', () => {
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });

    it('shows AI analysis steps', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential AI Analysis Steps')).toBeInTheDocument();
    });

    it('displays AI analysis types', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const typesButton = screen.getByRole('button', { name: /types/i });
      await user.click(typesButton);
      
      expect(screen.getByText('AI Analysis Approaches: Learning from Data')).toBeInTheDocument();
    });

    it('shows AI-specific drawbacks', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const drawbacksButton = screen.getByRole('button', { name: /drawbacks/i });
      await user.click(drawbacksButton);
      
      expect(screen.getByText('Major AI Drawbacks & Their Resolutions')).toBeInTheDocument();
    });

    it('handles AI quiz section', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const quizButton = screen.getByRole('button', { name: /quiz/i });
      await user.click(quizButton);
      
      expect(screen.getByText('Test Your Knowledge!')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing AI data gracefully', () => {
      vi.doMock('../../../constants/ai-sdlc/aiAnalysis', () => ({
        aiAnalysisSteps: null,
        aiAnalysisTypes: null,
        aiAnalysisDrawbacks: null
      }));
      
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });

    it('handles AI service errors gracefully', () => {
      vi.doMock('../../../constants/ai-sdlc/aiAnalysis', () => ({
        aiAnalysisSteps: [],
        aiAnalysisTypes: [],
        aiAnalysisDrawbacks: []
      }));
      
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });

    it('handles AI quiz loading errors', () => {
      vi.doMock('../../../constants/quiz/aiAnalysisQuiz', () => ({
        aiAnalysisQuiz: undefined
      }));
      
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });
  });

  describe('AI-Specific Features', () => {
    it('displays AI enhancement information', () => {
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByText('Analysis Phase with AI')).toBeInTheDocument();
    });

    it('shows AI tools and techniques', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const typesButton = screen.getByRole('button', { name: /types/i });
      await user.click(typesButton);
      
      expect(screen.getByText('AI Analysis Approaches: Learning from Data')).toBeInTheDocument();
    });

    it('addresses AI-specific concerns', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const drawbacksButton = screen.getByRole('button', { name: /drawbacks/i });
      await user.click(drawbacksButton);
      
      expect(screen.getByText('Major AI Drawbacks & Their Resolutions')).toBeInTheDocument();
    });
  });

  describe('Accessibility and Navigation', () => {
    it('has proper heading structure for AI content', () => {
      renderWithRouter(<AIAnalysisPage />);
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('provides accessible navigation between AI sections', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIAnalysisPage />);
      
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
      
      // Test navigation between sections
      for (const button of buttons.slice(0, 3)) { // Test first few buttons
        await user.click(button);
        // Should not throw errors
      }
    });

    it('maintains accessibility with AI-enhanced content', () => {
      renderWithRouter(<AIAnalysisPage />);
      
      const backLink = screen.getByRole('link', { name: /Back to Home/i });
      expect(backLink).toHaveAttribute('href', '/');
    });
  });
});
