/**
 * ESLint Configuration for Software Development Process Platform
 * 
 * Modern ESLint configuration using the new flat config format for
 * the educational software development platform. Provides consistent
 * code quality and style enforcement across the entire project.
 * 
 * Configuration Features:
 * - React-specific linting with hooks and refresh support
 * - Modern JavaScript/ES2020 syntax support
 * - Browser globals for client-side development
 * - Custom rules for educational code clarity
 * - JSX syntax support for React components
 * 
 * Rules Customization:
 * - Allows uppercase constants (commonly used in educational examples)
 * - Enforces React hooks rules for proper component behavior
 * - Supports React Fast Refresh for development experience
 * 
 * This configuration ensures code quality while maintaining readability
 * for educational purposes and supporting modern React development.
 */

// ESLint core and plugin imports for comprehensive linting
import js from '@eslint/js'                           // JavaScript core linting rules
import globals from 'globals'                         // Browser and Node.js global variable definitions
import reactHooks from 'eslint-plugin-react-hooks'   // React hooks linting rules
import reactRefresh from 'eslint-plugin-react-refresh' // React Fast Refresh support
import { defineConfig, globalIgnores } from 'eslint/config' // ESLint configuration utilities

export default defineConfig([
  // Global ignore patterns for build artifacts and dependencies
  globalIgnores(['dist']),                            // Ignore build output directory
  
  {
    // File patterns to apply linting rules
    files: ['**/*.{js,jsx}'],                         // All JavaScript and React files
    
    // Extend recommended configurations
    extends: [
      js.configs.recommended,                         // Core JavaScript linting rules
      reactHooks.configs.flat.recommended,           // React hooks best practices
      reactRefresh.configs.vite,                     // Vite + React Fast Refresh integration
    ],
    
    // Language and parsing configuration
    languageOptions: {
      ecmaVersion: 2020,                             // Support modern JavaScript features
      globals: globals.browser,                      // Include browser global variables (window, document, etc.)
      parserOptions: {
        ecmaVersion: 'latest',                       // Use latest ECMAScript features
        ecmaFeatures: { jsx: true },                 // Enable JSX syntax parsing
        sourceType: 'module',                        // Support ES6 modules
      },
    },
    
    // Custom rule overrides for educational platform
    rules: {
      // Allow uppercase variables for constants (common in educational examples)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
