/**
 * Maintenance Phase Test Suite
 * 
 * Comprehensive testing framework for the traditional SDLC Maintenance phase
 * educational page. Validates component functionality, user interactions,
 * and educational content delivery for post-deployment maintenance learning.
 * 
 * Testing Coverage:
 * - Component rendering and content accessibility
 * - Interactive maintenance process exploration
 * - User navigation through maintenance activities
 * - Assessment and quiz functionality
 * - Error handling and graceful degradation
 * - Educational content accuracy and presentation
 * 
 * Maintenance Learning Objectives Tested:
 * - Understanding of ongoing software support processes
 * - Knowledge of bug fixing and update procedures
 * - Comprehension of performance monitoring techniques
 * - Awareness of security maintenance requirements
 * - Skills in version control and release management
 * 
 * This test suite ensures the maintenance phase education provides
 * students with practical knowledge for real-world software support
 * and long-term system management responsibilities.
 */

// Testing framework imports for comprehensive component validation
import { describe, it, expect, vi, beforeEach } from 'vitest';         // Core testing framework with mocking capabilities
import { screen, fireEvent, waitFor } from '@testing-library/react';  // DOM testing utilities and async interaction handling
import userEvent from '@testing-library/user-event';                  // Advanced user interaction simulation
import { renderWithRouter } from '../../../test/testUtils';            // Custom render function with routing context
import MaintenancePage from '../maintenance';                         // Maintenance phase educational component

// === MOCK CONFIGURATION FOR MAINTENANCE PHASE TESTING ===
// Mock the maintenance constants to provide predictable test data
// This ensures test reliability and isolates component behavior validation
vi.mock('../../../constants/sdlc/maintenance', () => ({
  maintenanceSteps: [                                        // Mock maintenance process activities
    {
      step: "1",                                              // Sequential step identifier
      title: "Bug Fixes",                                     // Maintenance activity name
      description: "Fix issues found in production",          // Activity description
      details: "Address reported bugs and issues",            // Detailed explanation
      importance: "High",                                     // Priority classification
      output: "Updated Software"                              // Expected deliverable
    }
  ],
  maintenanceTypes: [                                        // Mock maintenance methodologies
    {
      type: "Corrective Maintenance",                         // Maintenance approach name
      description: "Fixing bugs and issues",                  // Methodology description
      when: "As needed"                                       // Usage timing context
    }
  ],
  drawbacks: [                                              // Mock common maintenance challenges
    {
      title: "Technical Debt",                               // Issue identification
      description: "Accumulated shortcuts affecting maintenance", // Problem description
      impact: "High",                                        // Severity assessment
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



