// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-axe'
import 'cypress-real-events/support'

// Load test data
beforeEach(() => {
  cy.fixture('testData.json').then((data) => {
    cy.wrap(data).as('testData')
  })
})

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Handle uncaught exceptions to prevent test failures from React warnings
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore React warnings and framer-motion warnings
  if (err.message.includes('Warning:') || 
      err.message.includes('whileHover') || 
      err.message.includes('whileTap')) {
    return false
  }
  // Let other errors fail the test
  return true
})