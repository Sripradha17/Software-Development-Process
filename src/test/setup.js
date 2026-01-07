/**
 * Test Environment Setup Configuration
 * 
 * This file configures the testing environment for the Software Development Process
 * educational platform. It sets up mocks for external dependencies and provides
 * a consistent testing foundation across all test files.
 * 
 * Key Configurations:
 * - Jest DOM matchers for enhanced assertion capabilities
 * - React Router mocks for navigation testing without actual routing
 * - Framer Motion mocks to avoid animation complications in tests
 * - Consistent mock implementations for UI components
 * 
 * The setup ensures tests can run in isolation without external dependencies
 * while maintaining realistic behavior for user interactions.
 */

// Import testing library extensions for enhanced DOM assertions
import '@testing-library/jest-dom';     // Provides additional matchers like toBeInTheDocument()
import { vi } from 'vitest';             // Vitest mocking utilities
import React from 'react';              // React core for mock component creation

/**
 * React Router Mock Configuration
 * 
 * Mocks React Router components and hooks to enable testing of components
 * that use navigation without requiring actual routing setup.
 * 
 * Mocked functionality:
 * - useNavigate: Returns a mock function for navigation testing
 * - useParams: Returns predefined parameters for consistent testing
 * - MemoryRouter: Simplified router for test environments
 * - Link: Mock link component that renders as standard anchor tag
 */
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),              // Preserve other React Router exports
  useNavigate: () => vi.fn(),                          // Mock navigation function
  useParams: () => ({ type: 'sdlc', caseId: '1' }),   // Mock URL parameters for consistent testing
  MemoryRouter: vi.fn().mockImplementation((props) => {
    const { children, initialEntries } = props;
    // Render a simple div container instead of actual router
    return React.createElement('div', { 'data-testid': 'memory-router' }, children);
  }),
  Link: vi.fn().mockImplementation((props) => {
    const { children, to, ...restProps } = props;
    // Render as anchor tag for testing link behavior
    return React.createElement('a', { href: to, ...restProps }, children);
  }),
}));

/**
 * Framer Motion Mock Configuration
 * 
 * Mocks the Framer Motion animation library to avoid animation-related issues in tests.
 * Animations can interfere with testing by introducing timing dependencies and
 * complex state changes that are not relevant to functional testing.
 * 
 * All motion components are replaced with their static HTML equivalents.
 */
vi.mock('framer-motion', () => ({
  motion: {
    div: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      // Replace motion.div with regular div element
      return React.createElement('div', restProps, children);
    }),
    h1: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      // Replace motion.h1 with regular h1 element
      return React.createElement('h1', restProps, children);
    }),
    h2: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('h2', restProps, children);
    }),
    h3: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('h3', restProps, children);
    }),
    p: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('p', restProps, children);
    }),
    button: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('button', restProps, children);
    }),
    section: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('section', restProps, children);
    }),
    span: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('span', restProps, children);
    }),
  },
  AnimatePresence: vi.fn().mockImplementation((props) => props.children),
}));

// Mock lottie-react
vi.mock('lottie-react', () => ({
  __esModule: true,
  default: vi.fn().mockImplementation((props) => {
    const { animationData, ...restProps } = props;
    return React.createElement('div', { 'data-testid': 'lottie-animation', ...restProps }, 'Lottie Animation');
  }),
}));

// Mock react-icons
vi.mock('react-icons/fa', () => ({
  FaPlay: vi.fn().mockImplementation(() => React.createElement('span', { 'data-testid': 'fa-play' }, '▶')),
  FaCheck: vi.fn().mockImplementation(() => React.createElement('span', { 'data-testid': 'fa-check' }, '✓')),
  FaTimes: vi.fn().mockImplementation(() => React.createElement('span', { 'data-testid': 'fa-times' }, '✗')),
}));

// Global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

global.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(), // deprecated
  removeListener: vi.fn(), // deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));