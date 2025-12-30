describe('Homepage and Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage successfully', () => {
    cy.get('h1').should('contain', 'Software Development Process')
    cy.get('p').should('contain', 'Master the complete software development lifecycle')
    
    // Check main navigation buttons (more flexible text matching)
    cy.contains('button', 'Start Learning', { matchCase: false }).should('be.visible')
    cy.contains('button', 'AI-Enhanced', { matchCase: false }).should('be.visible')
    
    // Check feature stats
    cy.contains('7').should('be.visible') // SDLC Phases
    cy.contains('50+').should('be.visible') // Interactive Activities
    cy.contains('20+').should('be.visible') // Case Studies
  })

  it('should navigate to SDLC learning path', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    cy.get('h1').should('be.visible')
  })

  it('should navigate to AI-Enhanced SDLC path', () => {
    cy.contains('button', 'AI-Enhanced', { matchCase: false }).click()
    cy.url().should('include', '/ai-augmented-development')
    cy.get('h1').should('be.visible')
  })

  it('should be responsive on mobile devices', () => {
    cy.checkResponsive()
  })

  it('should have proper meta information', () => {
    cy.title().should('not.be.empty')
  })

  it('should load the animated GIF', () => {
    cy.get('img[alt="Development Process"]').should('be.visible')
    cy.get('img[alt="Development Process"]').should('have.attr', 'src').and('include', 'introPage.gif')
  })

  it('should have interactive feature cards with hover effects', () => {
    cy.get('div').contains('SDLC Phases').parent().should('be.visible')
    cy.get('div').contains('Interactive Activities').parent().should('be.visible')
    cy.get('div').contains('Case Studies').parent().should('be.visible')
  })
})