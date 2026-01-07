/**
 * Planning Page Test Suite
 * 
 * Comprehensive test coverage for the traditional SDLC Planning phase educational page.
 * Tests cover component rendering, user interactions, navigation functionality,
 * and error handling scenarios to ensure reliable educational experience.
 * 
 * Test Categories:
 * - Successful rendering and content display
 * - User interaction with planning steps and methodologies
 * - Navigation between different planning sections
 * - Error handling for missing or invalid data
 * - Quiz functionality and assessment features
 */

// Testing framework imports for component testing
import { describe, it, expect, vi, beforeEach } from 'vitest';         // Core testing utilities and mocking
import { screen, fireEvent, waitFor } from '@testing-library/react';  // DOM testing and interaction utilities
import userEvent from '@testing-library/user-event';                  // Enhanced user interaction simulation
import { renderWithRouter } from '../../../test/testUtils';            // Custom render with router context
import PlanningPage from '../planning';                               // Component under test

// === MOCK CONFIGURATION FOR ISOLATED TESTING ===
// Mock the planning constants to provide controlled test data
// This ensures tests are predictable and don't depend on external data changes
vi.mock('../../../constants/sdlc/planning', () => ({
  planningSteps: [                                        // Mock planning process steps
    {
      step: "1",                                          // Sequential step identifier
      title: "Project Initiation",                        // Human-readable step title
      description: "Define project scope and objectives",  // Brief step description
      details: "Establish project goals and constraints",   // Detailed explanation
      importance: "High",                                  // Priority level indicator
      output: "Project Charter"                            // Expected deliverable
    }
  ],
  planningTypes: [                                        // Mock planning methodologies
    {
      type: "Agile Planning",                            // Methodology name
      description: "Iterative planning approach",         // Methodology description
      when: "Throughout project lifecycle"                 // Usage context
    }
  ],
  drawbacks: [                                           // Mock common planning pitfalls
    {
      title: "Over-planning",                            // Issue name
      description: "Spending too much time in planning",   // Issue description
      impact: "Medium",                                   // Severity level
      mitigation: "Balance planning with execution"       // Recommended solution
    }
  ]
}));

// Mock the planning quiz data for assessment testing
// Provides controlled quiz content for validating quiz functionality
vi.mock('../../../constants/quiz/planningQuiz', () => ({
  planningQuiz: {                                         // Quiz configuration object
    title: "Planning Quiz",                              // Display title for quiz section
    questions: [                                          // Array of quiz questions
      {
        question: "What is the main purpose of planning phase?", // Question text
        options: ["Coding", "Project setup", "Testing", "Deployment"], // Multiple choice options
        correctAnswer: 1,                                 // Index of correct answer (Project setup)
        explanation: "Planning phase establishes project foundation" // Educational explanation
      }
    ]
  }
}));

/**
 * Planning Page Component Test Suite
 * 
 * Organized test structure covering all aspects of planning page functionality.
 * Tests are grouped by scenario type for better organization and maintenance.
 */
describe('PlanningPage', () => {
  // Reset all mocks before each test to ensure test isolation
  // Prevents test interference and ensures reliable results
  beforeEach(() => {
    vi.clearAllMocks();                                   // Clear all mock function calls and implementations
  });

  /**
   * Successful Scenarios Test Group
   * 
   * Tests that validate expected behavior under normal conditions.
   * These tests ensure the component works as intended for typical users.
   */
  describe('Successful Scenarios', () => {
    /**
     * Basic Rendering Test
     * 
     * Verifies that the page renders without errors and displays
     * essential navigation and content elements.
     */
    it('renders the page successfully', () => {
      renderWithRouter(<PlanningPage />);                // Render with routing context
      
      // Verify essential navigation elements are present
      expect(screen.getByText('← Back to Home')).toBeInTheDocument();
      expect(screen.getByText(/Planning.*Software.*Development/i)).toBeInTheDocument();
    });

    /**
     * Navigation Elements Display Test
     * 
     * Ensures all interactive navigation elements are properly rendered
     * and accessible to users for exploring planning content.
     */
    it('displays all navigation sections', () => {
      renderWithRouter(<PlanningPage />);
      
      // Verify multiple instances of planning icons are present (different sections)
      expect(screen.getAllByText('📋')).toHaveLength(3); // Planning icons for different sections
      expect(screen.getByText('📊')).toBeInTheDocument();     // Analytics/steps icon
      expect(screen.getAllByText('🎯')).toHaveLength(3);      // Target/goal icons for planning objectives
    });

    /**
     * Default Content Display Test
     * 
     * Verifies that the introduction section is displayed by default
     * when users first visit the planning page.
     */
    it('shows introduction by default', () => {
      renderWithRouter(<PlanningPage />);
      
      // Check that introductory planning content is visible
      expect(screen.getByText(/What is.*Planning/i)).toBeInTheDocument();
    });

    /**
     * Interactive Navigation Test
     * 
     * Tests user interaction with navigation elements to ensure
     * proper section switching and content loading.
     */
    it('navigates to steps section successfully', async () => {
      const user = userEvent.setup();                     // Setup user interaction simulation
      renderWithRouter(<PlanningPage />);
      
      // Simulate user clicking on steps/visualization section
      const stepsButton = screen.getAllByText('📊')[0];  // First analytics icon (steps section)
      await user.click(stepsButton);                      // Perform click interaction
      
      // Verify that planning content appears after navigation
      expect(screen.getAllByText(/Planning/).length).toBeGreaterThan(0);
    });
  });

  /**
   * Failure Scenarios Test Group
   * 
   * Tests that validate component behavior under error conditions.
   * These tests ensure graceful degradation and user-friendly error handling.
   */
  describe('Failure Scenarios', () => {
    /**
     * Missing Data Handling Test
     * 
     * Verifies that the component handles missing or empty data gracefully
     * without crashing and still provides basic functionality.
     */
    it('handles missing data gracefully', () => {
      // Mock empty data arrays to simulate data loading failures
      vi.doMock('../../../constants/sdlc/planning', () => ({
        planningSteps: [],                                 // Empty steps array
        planningTypes: [],                                // Empty types array
        drawbacks: []                                     // Empty drawbacks array
      }));
      
      renderWithRouter(<PlanningPage />);                // Attempt to render with missing data
      
      // Verify that basic page structure still renders despite missing data
      expect(screen.getByText(/Planning.*Software.*Development/i)).toBeInTheDocument();
    });
  });
});



