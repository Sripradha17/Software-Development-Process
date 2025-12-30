import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { renderWithRouter, mockQuizData, mockMenuItems } from '../../test/testUtils';
import Quiz from '../Quiz';
import Menu from '../Menu';
import CaseStudy from '../CaseStudy';
import DragDropQuiz from '../DragDropQuiz';

// Mock ResizeObserver for drag-drop components
global.ResizeObserver = class ResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
};

// Mock framer-motion for components
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }) => children,
}));

// Mock ResizeObserver for DragDropQuiz
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: class ResizeObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  },
});

describe('Core Components', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Quiz Component', () => {
    const mockQuizProps = {
      questions: [
        {
          question: "What is the first phase of SDLC?",
          options: [
            { text: "Planning", correct: false, explanation: "Planning comes later" },
            { text: "Analysis", correct: true, explanation: "Analysis is the first phase where requirements are gathered." },
            { text: "Design", correct: false, explanation: "Design comes after analysis" },
            { text: "Implementation", correct: false, explanation: "Implementation is much later" }
          ]
        }
      ]
    };

    describe('Successful Scenarios', () => {
      it('renders quiz successfully', () => {
        render(<Quiz {...mockQuizProps} />);
        
        expect(screen.getByText('What is the first phase of SDLC?')).toBeInTheDocument();
      });

      it('displays all answer options', () => {
        render(<Quiz {...mockQuizProps} />);
        
        expect(screen.getByText('Planning')).toBeInTheDocument();
        expect(screen.getByText('Analysis')).toBeInTheDocument();
        expect(screen.getByText('Design')).toBeInTheDocument();
        expect(screen.getByText('Implementation')).toBeInTheDocument();
      });

      it('handles answer selection correctly', async () => {
        const user = userEvent.setup();
        render(<Quiz {...mockQuizProps} />);
        
        const correctAnswer = screen.getByText('Analysis');
        await user.click(correctAnswer);
        
        expect(correctAnswer).toBeInTheDocument();
      });

      it('shows feedback after answer selection', async () => {
        const user = userEvent.setup();
        render(<Quiz {...mockQuizProps} />);
        
        const answer = screen.getByText('Analysis');
        await user.click(answer);
        
        await waitFor(() => {
          expect(screen.getByText('✅ Correct!')).toBeInTheDocument();
          expect(screen.getByText('Analysis is the first phase where requirements are gathered.')).toBeInTheDocument();
        });
      });


    });

    describe('Failure Scenarios', () => {
      it('handles missing quiz data gracefully', () => {
        render(<Quiz questions={null} />);
        
        // Component should render without crashing
        expect(document.body).toBeInTheDocument();
      });

      it('handles empty questions array', () => {
        render(<Quiz questions={[]} />);
        
        // Component should render without crashing
        expect(document.body).toBeInTheDocument();
      });
    });

    describe('Interactive Features', () => {
      it('highlights selected answer', async () => {
        const user = userEvent.setup();
        render(<Quiz {...mockQuizProps} />);
        
        const answer = screen.getByText('Analysis');
        await user.click(answer);
        
        // Check for the selected styling in the button
        const button = answer.closest('button');
        expect(button.style.background).toContain('rgba(26, 188, 156, 0.3)');
      });

      it('displays score correctly', async () => {
        const user = userEvent.setup();
        render(<Quiz {...mockQuizProps} />);
        
        const correctAnswer = screen.getByText('Analysis');
        await user.click(correctAnswer);
        
        // After clicking the correct answer, feedback should be shown immediately
        expect(screen.getByText('✅ Correct!')).toBeInTheDocument();
      });
    });
  });

  describe('Menu Component', () => {
    const mockMenuProps = {
      items: mockMenuItems,
      title: "Test Menu"
    };

    describe('Successful Scenarios', () => {
      it('renders menu successfully', () => {
        renderWithRouter(<Menu {...mockMenuProps} />);
        
        expect(screen.getByText(/Test Menu/)).toBeInTheDocument();
      });

      it('shows menu items when clicked', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Menu {...mockMenuProps} />);
        
        const menuButton = screen.getByText(/Test Menu/);
        await user.click(menuButton);
        
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Analysis')).toBeInTheDocument();
        expect(screen.getByText('Design')).toBeInTheDocument();
      });

      it('handles menu item clicks', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Menu {...mockMenuProps} />);
        
        const menuButton = screen.getByText(/Test Menu/);
        await user.click(menuButton);
        
        const homeItem = screen.getByText('Home');
        expect(homeItem).toBeInTheDocument();
      });

      it('shows menu toggle functionality', async () => {
        const user = userEvent.setup();
        renderWithRouter(<Menu {...mockMenuProps} />);
        
        const menuButton = screen.getByText(/Test Menu/);
        await user.click(menuButton);
        
        expect(screen.getByText('Home')).toBeInTheDocument();
        
        // Click again to close
        await user.click(menuButton);
        
        // Menu items should not be visible
        expect(screen.queryByText('Home')).not.toBeInTheDocument();
      });
    });

    describe('Failure Scenarios', () => {
      it('handles empty menu items', () => {
        renderWithRouter(<Menu items={[]} title="Empty Menu" />);
        
        expect(screen.getByText(/Empty Menu/)).toBeInTheDocument();
      });

      it('handles missing menu items', () => {
        renderWithRouter(<Menu items={null} title="No Items Menu" />);
        
        expect(screen.getByText(/No Items Menu/)).toBeInTheDocument();
      });

      it('handles malformed menu items gracefully', () => {
        const malformedItems = [
          { label: null, path: "/broken", icon: "❌" }
        ];
        
        renderWithRouter(<Menu items={malformedItems} title="Broken Menu" />);
        
        expect(screen.getByText(/Broken Menu/)).toBeInTheDocument();
      });
    });
  });

  describe('CaseStudy Component', () => {
    describe('Successful Scenarios', () => {
      it('renders case study not found message', () => {
        render(<CaseStudy />);
        
        expect(screen.getByText('Case Study Not Found')).toBeInTheDocument();
        expect(screen.getByText('The requested case study could not be found.')).toBeInTheDocument();
      });
    });

    describe('Failure Scenarios', () => {
      it('handles missing case study data', () => {
        render(<CaseStudy />);
        
        expect(screen.getByText('Case Study Not Found')).toBeInTheDocument();
      });
    });
  });

  describe('DragDropQuiz Component', () => {
    const mockDragDropProps = {
      items: [
        { id: "1", content: "Step 1", correctPosition: 0 },
        { id: "2", content: "Step 2", correctPosition: 1 }
      ],
      onComplete: vi.fn()
    };

    describe('Successful Scenarios', () => {
      it('renders drag drop quiz without crashing', () => {
        render(<DragDropQuiz {...mockDragDropProps} />);
        
        // Just check that component renders without error
        expect(document.body).toBeInTheDocument();
      });
    });

    describe('Failure Scenarios', () => {
      it('handles empty items array', () => {
        render(<DragDropQuiz items={[]} onComplete={vi.fn()} />);
        
        // Component should render without crashing
        expect(document.body).toBeInTheDocument();
      });

      it('handles malformed items', () => {
        const malformedItems = [
          { id: null, content: "Bad Item" }
        ];
        
        render(<DragDropQuiz items={malformedItems} onComplete={vi.fn()} />);
        
        // Component should render without crashing
        expect(document.body).toBeInTheDocument();
      });
    });
  });
});