import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => vi.fn(),
  useParams: () => ({ type: 'sdlc', caseId: '1' }),
  MemoryRouter: vi.fn().mockImplementation((props) => {
    const { children, initialEntries } = props;
    return React.createElement('div', { 'data-testid': 'memory-router' }, children);
  }),
  Link: vi.fn().mockImplementation((props) => {
    const { children, to, ...restProps } = props;
    return React.createElement('a', { href: to, ...restProps }, children);
  }),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
      return React.createElement('div', restProps, children);
    }),
    h1: vi.fn().mockImplementation((props) => {
      const { children, ...restProps } = props;
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