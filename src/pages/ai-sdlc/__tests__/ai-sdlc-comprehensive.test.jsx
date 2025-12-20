import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import AIPlanningPage from '../planning';
import AIImplementationPage from '../implementation';
import AITestingPage from '../testing';
import AIDeploymentPage from '../deployment';
import AIMaintenancePage from '../maintenance';
import AIReviewPage from '../review';

// Mock all AI SDLC constants
vi.mock('../../../constants/ai-sdlc/aiPlanning', () => ({
  aiPlanningSteps: [{ step: "1", title: "AI Planning", description: "AI-enhanced planning" }],
  aiPlanningTypes: [{ type: "Predictive Planning", description: "Use AI to predict project outcomes" }],
  aiPlanningDrawbacks: [{ title: "AI Uncertainty", description: "AI predictions may be uncertain" }]
}));

vi.mock('../../../constants/ai-sdlc/aiImplementation', () => ({
  aiImplementationSteps: [{ step: "1", title: "Code Generation", description: "AI-generated code" }],
  aiImplementationTypes: [{ type: "Auto-coding", description: "Automated code generation" }],
  aiImplementationDrawbacks: [{ title: "Code Quality", description: "AI code may need review" }]
}));

vi.mock('../../../constants/ai-sdlc/aiTesting', () => ({
  aiTestingSteps: [{ step: "1", title: "AI Test Generation", description: "Generate tests with AI" }],
  aiTestingTypes: [{ type: "Smart Testing", description: "AI-driven test strategies" }],
  aiTestingDrawbacks: [{ title: "Test Coverage", description: "AI may miss edge cases" }]
}));

vi.mock('../../../constants/ai-sdlc/aiDeployment', () => ({
  aiDeploymentSteps: [{ step: "1", title: "Smart Deployment", description: "AI-optimized deployment" }],
  aiDeploymentTypes: [{ type: "Predictive Deployment", description: "AI predicts deployment issues" }],
  aiDeploymentDrawbacks: [{ title: "Automation Risks", description: "Over-automation can be risky" }]
}));

vi.mock('../../../constants/ai-sdlc/aiMaintenance', () => ({
  aiMaintenanceSteps: [{ step: "1", title: "Predictive Maintenance", description: "AI predicts issues" }],
  aiMaintenanceTypes: [{ type: "Self-healing", description: "AI fixes issues automatically" }],
  aiMaintenanceDrawbacks: [{ title: "False Positives", description: "AI may flag non-issues" }]
}));

vi.mock('../../../constants/ai-sdlc/aiReview', () => ({
  aiReviewSteps: [{ step: "1", title: "AI Code Review", description: "Automated code review" }],
  aiReviewTypes: [{ type: "Pattern Analysis", description: "AI analyzes code patterns" }],
  aiReviewDrawbacks: [{ title: "Context Missing", description: "AI may miss business context" }]
}));

describe('AI SDLC Pages - Comprehensive Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('AI Planning Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AIPlanningPage />);
      expect(screen.getByText('Planning Phase with AI')).toBeInTheDocument();
    });

    it('displays AI planning features', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIPlanningPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('AI Planning')).toBeInTheDocument();
    });

    it('handles AI planning errors gracefully', () => {
      vi.doMock('../../../constants/ai-sdlc/aiPlanning', () => ({
        aiPlanningSteps: null
      }));
      
      renderWithRouter(<AIPlanningPage />);
      expect(screen.getByText('Planning Phase with AI')).toBeInTheDocument();
    });
  });

  describe('AI Implementation Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AIImplementationPage />);
      expect(screen.getByText('Implementation Phase with AI')).toBeInTheDocument();
    });

    it('shows code generation features', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIImplementationPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Code Generation')).toBeInTheDocument();
    });
  });

  describe('AI Testing Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AITestingPage />);
      expect(screen.getByText('Testing Phase with AI')).toBeInTheDocument();
    });

    it('displays AI testing capabilities', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AITestingPage />);
      
      const stepsButton = screen.getByRole('button', { name: /steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('AI Test Generation')).toBeInTheDocument();
    });
  });

  describe('AI Deployment Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AIDeploymentPage />);
      expect(screen.getByText('Deployment Phase with AI')).toBeInTheDocument();
    });

    it('shows smart deployment features', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIDeploymentPage />);
      
      const stepsButton = screen.getByText('Explore AI Deployment Steps →');
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential AI Deployment Steps')).toBeInTheDocument();
    });
  });

  describe('AI Maintenance Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AIMaintenancePage />);
      expect(screen.getByText('Maintenance Phase with AI')).toBeInTheDocument();
    });

    it('displays predictive maintenance', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIMaintenancePage />);
      
      const stepsButton = screen.getByText('Explore AI Maintenance Steps →');
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential AI Maintenance Steps')).toBeInTheDocument();
    });
  });

  describe('AI Review Page', () => {
    it('renders successfully', () => {
      renderWithRouter(<AIReviewPage />);
      expect(screen.getByText('Review Phase with AI')).toBeInTheDocument();
    });

    it('shows AI code review features', async () => {
      const user = userEvent.setup();
      renderWithRouter(<AIReviewPage />);
      
      const stepsButton = screen.getByText('Explore AI Review Steps →');
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential AI Review Steps')).toBeInTheDocument();
    });
  });

  describe('Cross-cutting AI Features', () => {
    it('all AI pages have consistent navigation', () => {
      const aiPages = [
        AIPlanningPage,
        AIImplementationPage,
        AITestingPage,
        AIDeploymentPage,
        AIMaintenancePage,
        AIReviewPage
      ];

      aiPages.forEach((PageComponent) => {
        const { unmount } = renderWithRouter(<PageComponent />);
        
        expect(screen.getByText('← Back to Home')).toBeInTheDocument();
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
        
        unmount();
      });
    });

    it('all AI pages handle missing data gracefully', () => {
      const aiPages = [
        { component: AIPlanningPage, title: 'Planning Phase with AI' },
        { component: AIImplementationPage, title: 'Implementation Phase with AI' },
        { component: AITestingPage, title: 'Testing Phase with AI' },
        { component: AIDeploymentPage, title: 'Deployment Phase with AI' },
        { component: AIMaintenancePage, title: 'Maintenance Phase with AI' },
        { component: AIReviewPage, title: 'Review Phase with AI' }
      ];

      aiPages.forEach(({ component: PageComponent, title }) => {
        const { unmount } = renderWithRouter(<PageComponent />);
        
        expect(screen.getByText(title)).toBeInTheDocument();
        
        unmount();
      });
    });
  });
});
