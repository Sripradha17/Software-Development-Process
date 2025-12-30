// ***********************************************
// Custom commands for the Software Development Process application
// ***********************************************

// Custom command to navigate to a specific SDLC page
Cypress.Commands.add('navigateToSDLCPage', (pageName) => {
  cy.visit('/')
  cy.contains('button', 'Start Learning', { matchCase: false }).click()
  cy.url().should('include', '/learn-software-development')
  
  // Wait for page to load
  cy.get('h1').should('be.visible')
  
  // Open menu and click on the page
  cy.contains('button', 'Menu').click()
  cy.contains('a', pageName, { matchCase: false }).should('be.visible').click()
  
  // Wait for new page to load
  cy.url().should('include', `/${pageName.toLowerCase()}`)
  cy.get('h1, h2').should('be.visible')
})

// Custom command to navigate to a specific AI-SDLC page
Cypress.Commands.add('navigateToAISDLCPage', (pageName) => {
  cy.visit('/')
  cy.contains('button', 'AI-Enhanced', { matchCase: false }).click()
  cy.url().should('include', '/ai-augmented-development')
  
  // Open menu and click on the page
  cy.contains('button', 'Menu').click()
  cy.contains('a', pageName, { matchCase: false }).click()
})

// Custom command to check page loading and basic elements
Cypress.Commands.add('checkPageLoad', (expectedTitle) => {
  cy.get('h1, h2, h3').should('be.visible')
  if (expectedTitle) {
    cy.get('h1, h2, h3').should('contain.text', expectedTitle)
  }
  cy.get('body').should('not.be.empty')
})

// Custom command to test quiz functionality
Cypress.Commands.add('testQuizSection', () => {
  cy.get('body').then($body => {
    if ($body.find('button:contains("Quiz"), [aria-label*="Quiz"]').length > 0) {
      cy.get('button:contains("Quiz"), [aria-label*="Quiz"]').first().click()
      cy.get('h1, h2, h3').should('be.visible')
    }
  })
})

// Custom command to test section navigation
Cypress.Commands.add('testSectionNavigation', () => {
  // Just verify that navigation elements exist and page loads
  cy.get('button, a').should('have.length.greaterThan', 0)
  cy.get('h1, h2, h3').should('be.visible')
})

// Custom command to check responsive design
Cypress.Commands.add('checkResponsive', () => {
  // Test mobile view
  cy.viewport('iphone-6')
  cy.get('h1, h2, h3').should('be.visible')
  cy.get('body').should('be.visible')
  
  // Test tablet view
  cy.viewport('ipad-2')
  cy.get('h1, h2, h3').should('be.visible')
  cy.get('body').should('be.visible')
  
  // Test desktop view
  cy.viewport(1280, 720)
  cy.get('h1, h2, h3').should('be.visible')
  cy.get('body').should('be.visible')
})