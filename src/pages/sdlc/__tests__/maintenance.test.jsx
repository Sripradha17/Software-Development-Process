import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../../test/testUtils';
import MaintenancePage from '../maintenance';

// Mock the constants
vi.mock('../../../constants/sdlc/maintenance', () => ({
  maintenanceSteps: [
    {
      step: "1",
      title: "Bug Fixes",
      description: "Fix issues found in production",
      details: "Address reported bugs and issues",
      importance: "High",
      output: "Updated Software"
    }
  ],
  maintenanceTypes: [
    {
      type: "Corrective Maintenance",
      description: "Fixing bugs and issues",
      when: "As needed"
    }
  ],
  drawbacks: [
    {
      title: "Technical Debt",
      description: "Accumulated shortcuts affecting maintenance",
      impact: "High",
      mitigation: "Regular code cleanup"
    }
  ]
}));

describe('MaintenancePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Successful Scenarios', () => {
    it('renders the page successfully', () => {
      renderWithRouter(<MaintenancePage />);
      
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Maintenance.*Software.*Development/i)).toBeInTheDocument();
    });

    it('displays maintenance information', async () => {
      const user = userEvent.setup();
      renderWithRouter(<MaintenancePage />);
      
      const stepsButton = screen.getByRole('button', { name: /view process visualization/i });
      await user.click(stepsButton);
      
      expect(screen.getByText('Bug Fixes')).toBeInTheDocument();
    });
  });

  describe('Failure Scenarios', () => {
    it('handles missing maintenance data', () => {
      vi.doMock('../../../constants/sdlc/maintenance', () => ({
        maintenanceSteps: null
      }));
      
      renderWithRouter(<MaintenancePage />);
      expect(screen.getByText(/Maintenance.*Software.*Development/i)).toBeInTheDocument();
    });
  });
});



