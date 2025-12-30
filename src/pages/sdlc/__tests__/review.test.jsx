import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import ReviewPage from '../review';

// Mock the constants
vi.mock('../../../constants/sdlc/review', () => ({
  reviewSteps: [
    {
      step: "1",
      title: "Code Review",
      description: "Review code for quality and standards",
      details: "Ensure code meets quality standards",
      importance: "High",
      output: "Review Report"
    }
  ],
  reviewTypes: [
    {
      type: "Peer Review",
      description: "Review by team members",
      when: "Before merging code"
    }
  ],
  drawbacks: [
    {
      title: "Time Consuming",
      description: "Reviews can slow down development",
      impact: "Medium",
      mitigation: "Efficient review processes"
    }
  ]
}));

describe('ReviewPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<ReviewPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Review.*Software.*Development/i)).toBeInTheDocument();
    });

    it('displays review steps', async () => {
      const user = userEvent.setup();
      renderWithRouter(<ReviewPage />);
      
      const stepsButton = screen.getAllByRole('button', { name: /Steps/i })[0];
      await user.click(stepsButton);
      
      expect(screen.getAllByText('Code Review')[0]).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles review data errors', () => {
      vi.doMock('../../../constants/sdlc/review', () => ({
        reviewSteps: []
      }));
      
      renderWithRouter(<ReviewPage />);
      expect(screen.getByText(/Review.*Software.*Development/i)).toBeInTheDocument();
    });
  });
});



