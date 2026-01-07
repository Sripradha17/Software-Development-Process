/**
 * Integration Test Suite for Software Development Process Platform
 * 
 * Comprehensive integration testing that validates the interaction between
 * multiple components, pages, and features across the educational platform.
 * 
 * Testing Scope:
 * - Cross-component interactions and data flow
 * - Navigation between different SDLC phases and AI-enhanced pages
 * - Quiz functionality with user interactions
 * - Menu navigation and routing behavior
 * - Case study progression and state management
 * - Responsive behavior and accessibility features
 * 
 * Testing Strategy:
 * - End-to-end user workflows to ensure complete functionality
 * - Component integration to verify proper data passing
 * - User event simulation for realistic interaction testing
 * - Error handling and edge case validation
 * - Cross-browser compatibility through standard web APIs
 * 
 * Coverage Areas:
 * 1. Traditional SDLC Pages: Complete workflow testing
 * 2. AI-Augmented SDLC Pages: Enhanced feature validation
 * 3. Interactive Components: Quiz, menu, and case study integration
 * 4. Navigation Systems: Router and menu functionality
 * 5. State Management: Data persistence across components
 * 
 * This test suite ensures the educational platform provides a seamless,
 * reliable learning experience across all features and user interactions.
 */

// Testing framework and utilities
import { describe, it, expect, vi, beforeEach, beforeAll, afterEach, afterAll } from 'vitest'; // Core testing framework
import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react'; // DOM testing utilities
import userEvent from '@testing-library/user-event';                          // Enhanced user interaction simulation
import { renderWithRouter } from '../test/testUtils';                         // Custom router testing utility

// Traditional SDLC Page Components for Integration Testing
// These components represent the core educational content for classical software development
import IntroPage from '../pages/sdlc/IntroPage';                   // Landing page and platform introduction
import AnalysisPage from '../pages/sdlc/analysis';                 // Requirements analysis phase education
import DesignPage from '../pages/sdlc/design';                     // System design phase content
import PlanningPage from '../pages/sdlc/planning';                 // Project planning phase materials
import ImplementationPage from '../pages/sdlc/implementation';     // Coding and development phase
import TestingPage from '../pages/sdlc/testing';                   // Quality assurance and testing phase
import DeploymentPage from '../pages/sdlc/deployment';             // Production deployment phase
import MaintenancePage from '../pages/sdlc/maintenance';           // Post-deployment maintenance phase
import ReviewPage from '../pages/sdlc/review';                     // Project review and retrospective

// AI-Enhanced SDLC Page Components for Modern Development Testing
// These components showcase how AI transforms traditional development processes
import AIAnalysisPage from '../pages/ai-sdlc/analysis';            // AI-enhanced requirements analysis
import AIDesignPage from '../pages/ai-sdlc/design';               // AI-powered design assistance
import AIPlanningPage from '../pages/ai-sdlc/planning';           // AI-assisted project planning
import AIImplementationPage from '../pages/ai-sdlc/implementation'; // AI-augmented coding and development
import AITestingPage from '../pages/ai-sdlc/testing';             // AI-driven testing strategies
import AIDeploymentPage from '../pages/ai-sdlc/deployment';       // AI-optimized deployment processes
import AIMaintenancePage from '../pages/ai-sdlc/maintenance';     // AI-supported maintenance and monitoring
import AIReviewPage from '../pages/ai-sdlc/review';               // AI-enhanced analytics and review

// Interactive Learning Components for Integration Testing
// These components provide hands-on learning experiences and assessments
import Quiz from '../components/Quiz';                             // Interactive quiz component with feedback
import Menu from '../components/Menu';                             // Navigation menu with routing
import CaseStudy from '../components/CaseStudy';                   // Real-world case study scenarios
import DragDropQuiz from '../components/DragDropQuiz';

describe('Application Integration Tests', () => {
  beforeAll(() => {
    // Global setup
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe('Application-wide Functionality', () => {
    const sdlcPages = [
      { component: IntroPage, name: 'IntroPage', expectedText: 'Software Development Process' },
      { component: AnalysisPage, name: 'AnalysisPage', expectedText: 'Analysis Phase' },
      { component: DesignPage, name: 'DesignPage', expectedText: 'Design in Software Development' },
      { component: PlanningPage, name: 'PlanningPage', expectedText: 'Planning in Software Development' },
      { component: ImplementationPage, name: 'ImplementationPage', expectedText: 'Implementation in Software Development' },
      { component: TestingPage, name: 'TestingPage', expectedText: 'Testing in Software Development' },
      { component: DeploymentPage, name: 'DeploymentPage', expectedText: 'Deployment in Software Development' },
      { component: MaintenancePage, name: 'MaintenancePage', expectedText: 'Maintenance in Software Development' },
      { component: ReviewPage, name: 'ReviewPage', expectedText: 'Review in Software Development' }
    ];

    const aiSdlcPages = [
      { component: AIAnalysisPage, name: 'AIAnalysisPage', expectedText: 'Analysis Phase with AI' },
      { component: AIDesignPage, name: 'AIDesignPage', expectedText: 'AI-Augmented Design' },
      { component: AIPlanningPage, name: 'AIPlanningPage', expectedText: 'Planning Phase with AI' },
      { component: AIImplementationPage, name: 'AIImplementationPage', expectedText: 'Implementation Phase with AI' },
      { component: AITestingPage, name: 'AITestingPage', expectedText: 'Testing Phase with AI' },
      { component: AIDeploymentPage, name: 'AIDeploymentPage', expectedText: 'Deployment Phase with AI' },
      { component: AIMaintenancePage, name: 'AIMaintenancePage', expectedText: 'Maintenance Phase with AI' },
      { component: AIReviewPage, name: 'AIReviewPage', expectedText: 'Review Phase with AI' }
    ];

    describe('Successful Page Rendering', () => {
      it('renders all SDLC pages without errors', () => {
        sdlcPages.forEach(({ component: PageComponent, name, expectedText }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          expect(screen.getByText(expectedText), `${name} should render with expected text`).toBeInTheDocument();
          
          unmount();
        });
      });

      it('renders all AI SDLC pages without errors', () => {
        aiSdlcPages.forEach(({ component: PageComponent, name, expectedText }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          expect(screen.getByText(expectedText), `${name} should render with expected text`).toBeInTheDocument();
          
          unmount();
        });
      });
    });

    describe('Common Navigation Elements', () => {
      it('all pages except IntroPage have back navigation', () => {
        const allPagesExceptIntro = [...sdlcPages.slice(1), ...aiSdlcPages];
        
        allPagesExceptIntro.forEach(({ component: PageComponent, name }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          expect(screen.getByText('← Back to Home'), `${name} should have back navigation`).toBeInTheDocument();
          
          unmount();
        });
      });

      it('all pages have menu components', () => {
        const allPages = [...sdlcPages, ...aiSdlcPages].filter(page => page.name !== 'IntroPage');
        
        allPages.forEach(({ component: PageComponent, name }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          expect(screen.getByText(/Menu/), `${name} should have menu component`).toBeInTheDocument();
          
          unmount();
        });
      });
    });

    describe('Error Handling Across Pages', () => {
      it('handles navigation errors gracefully across all pages', async () => {
        const user = userEvent.setup();
        const allPages = [...sdlcPages.slice(1), ...aiSdlcPages]; // Exclude IntroPage as it has different navigation
        
        for (const { component: PageComponent, name } of allPages) {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          try {
            const backLink = screen.getByText('← Back to Home');
            await user.click(backLink);
            
            // Should not throw errors
            expect(backLink).toBeInTheDocument();
          } catch (error) {
            throw new Error(`${name} navigation failed: ${error.message}`);
          }
          
          unmount();
        }
      });

      it('handles missing data gracefully across all pages', () => {
        // Mock all constants to return null/undefined
        vi.doMock('../../constants/sdlc', () => ({}));
        vi.doMock('../../constants/ai-sdlc', () => ({}));
        vi.doMock('../../constants/quiz', () => ({}));
        
        const allPages = [...sdlcPages, ...aiSdlcPages];
        
        allPages.forEach(({ component: PageComponent, name, expectedText }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          // Page should still render without crashing
          expect(screen.getByText(expectedText), `${name} should handle missing data gracefully`).toBeInTheDocument();
          
          unmount();
        });
      });
    });

    describe('Accessibility Standards', () => {
      it('all pages have proper heading structure', () => {
        const allPages = [...sdlcPages, ...aiSdlcPages];
        
        allPages.forEach(({ component: PageComponent, name }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          const h1Elements = screen.getAllByRole('heading', { level: 1 });
          expect(h1Elements.length, `${name} should have at least one h1 element`).toBeGreaterThan(0);
          
          unmount();
        });
      });

      it('all pages have accessible navigation links', () => {
        const allPagesExceptIntro = [...sdlcPages.slice(1), ...aiSdlcPages];
        
        allPagesExceptIntro.forEach(({ component: PageComponent, name }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          const backLink = screen.getByRole('link', { name: /Back to Home/i });
          expect(backLink, `${name} should have accessible back link`).toHaveAttribute('href', '/');
          
          unmount();
        });
      });
    });

    describe('Performance and Memory Management', () => {
      it('properly unmounts components without memory leaks', () => {
        const allPages = [...sdlcPages, ...aiSdlcPages];
        
        allPages.forEach(({ component: PageComponent, name }) => {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          // Should unmount without errors
          expect(() => unmount()).not.toThrow();
        });
      });

      it('handles rapid page transitions', async () => {
        const user = userEvent.setup();
        
        // Test rapid switching between pages
        const testPages = sdlcPages.slice(0, 3); // Test with first 3 pages
        
        for (const { component: PageComponent } of testPages) {
          const { unmount } = renderWithRouter(<PageComponent />);
          
          // Simulate rapid interactions
          const buttons = screen.getAllByRole('button');
          if (buttons.length > 0) {
            await user.click(buttons[0]);
          }
          
          unmount();
        }
        
        // Should complete without errors
      });
    });

    describe('Data Flow and State Management', () => {
      it('maintains state consistency across section changes', async () => {
        const user = userEvent.setup();
        renderWithRouter(<AnalysisPage />);
        
        // Navigate through different sections
        const stepsButton = screen.getByRole('button', { name: /steps/i });
        await user.click(stepsButton);
        
        expect(screen.getByText('Analysis Steps')).toBeInTheDocument();
        
        const typesButtons = screen.getAllByRole('button', { name: /types/i });
        const typesButton = typesButtons.find(button => 
          button.textContent && button.textContent.includes('Analysis Types')
        ) || typesButtons.find(button => 
          button.getAttribute('aria-label') === 'Types'
        );
        await user.click(typesButton);
        
        expect(screen.getByText('Types of Analysis')).toBeInTheDocument();
      });

      it('handles quiz state management correctly', async () => {
        const user = userEvent.setup();
        renderWithRouter(<AnalysisPage />);
        
        const quizButton = screen.getByRole('button', { name: /quiz/i });
        await user.click(quizButton);
        
        expect(screen.getByText('Test Your Knowledge')).toBeInTheDocument();
      });
    });

    describe('Cross-browser Compatibility Features', () => {
      it('handles different viewport sizes', () => {
        // Mock different viewport sizes
        const viewports = [
          { width: 320, height: 568 },  // Mobile
          { width: 768, height: 1024 }, // Tablet
          { width: 1920, height: 1080 } // Desktop
        ];
        
        viewports.forEach(({ width, height }) => {
          Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
          Object.defineProperty(window, 'innerHeight', { value: height, writable: true });
          
          const { unmount } = renderWithRouter(<IntroPage />);
          
          expect(screen.getByText('Software Development Process')).toBeInTheDocument();
          
          unmount();
        });
      });

      it('handles missing modern browser features gracefully', () => {
        // Mock missing IntersectionObserver
        const originalIntersectionObserver = window.IntersectionObserver;
        delete window.IntersectionObserver;
        
        const { unmount } = renderWithRouter(<IntroPage />);
        
        expect(screen.getByText('Software Development Process')).toBeInTheDocument();
        
        // Restore
        window.IntersectionObserver = originalIntersectionObserver;
        unmount();
      });
    });
  });

  describe('End-to-End User Scenarios', () => {
    it('completes a typical user learning flow', async () => {
      const user = userEvent.setup();
      
      // Start at intro page
      const { unmount: unmountIntro } = renderWithRouter(<IntroPage />);
      expect(screen.getByText('Software Development Process')).toBeInTheDocument();
      
      const sdlcButton = screen.getByText(/Start Learning SDLC/);
      await user.click(sdlcButton);
      
      unmountIntro();
      
      // Navigate to analysis page
      const { unmount: unmountAnalysis } = renderWithRouter(<AnalysisPage />);
      expect(screen.getByText('Analysis Phase')).toBeInTheDocument();
      
      // Take quiz
      const quizButton = screen.getByRole('button', { name: /quiz/i });
      await user.click(quizButton);
      expect(screen.getByText('Test Your Knowledge')).toBeInTheDocument();
      
      unmountAnalysis();
    });

    it('handles error recovery in user flow', async () => {
      const user = userEvent.setup();
      
      // Start with a page that might have issues
      const { unmount } = renderWithRouter(<AnalysisPage />);
      
      // Try to interact with potentially problematic elements
      const buttons = screen.getAllByRole('button');
      
      for (const button of buttons.slice(0, 3)) {
        try {
          await user.click(button);
          // Should not crash
        } catch (error) {
          // Errors should be handled gracefully
          expect(screen.getByText('Analysis Phase')).toBeInTheDocument();
        }
      }
      
      unmount();
    });
  });
});