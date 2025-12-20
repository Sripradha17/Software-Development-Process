import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import DeploymentPage from '../deployment';

// Mock the constants
vi.mock('../../../constants/sdlc/deployment', () => ({
  deploymentSteps: [
    {
      step: "1",
      title: "Production Deployment",
      description: "Deploy to production environment",
      details: "Release software to end users",
      importance: "Critical",
      output: "Live System"
    }
  ],
  deploymentTypes: [
    {
      type: "Blue-Green Deployment",
      description: "Zero-downtime deployment strategy",
      when: "Production releases"
    }
  ],
  drawbacks: [
    {
      title: "Deployment Failures",
      description: "Issues during deployment",
      impact: "High",
      mitigation: "Proper testing and rollback plans"
    }
  ]
}));

describe('DeploymentPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<DeploymentPage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Deployment in Software Development/i)).toBeInTheDocument();
    });

    it('displays deployment steps', async () => {
      const user = userEvent.setup();
      renderWithRouter(<DeploymentPage />);
      
      const stepsButton = screen.getByRole('button', { name: /Steps/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('6 Essential Deployment Steps')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles deployment errors gracefully', () => {
      vi.doMock('../../../constants/sdlc/deployment', () => ({
        deploymentSteps: []
      }));
      
      renderWithRouter(<DeploymentPage />);
      expect(screen.getByText(/Deployment in Software Development/i)).toBeInTheDocument();
    });
  });
});



