describe('SDLC Pages Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to SDLC learning hub', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    cy.get('h1').should('be.visible')
  })

  it('should load analysis page correctly', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    
    // Wait for page to load
    cy.get('h1').should('be.visible')
    
    // Open menu and click on Analysis
    cy.contains('button', 'Menu').click()
    cy.contains('a', 'Analysis').should('be.visible').click()
    
    // Verify we're on the analysis page
    cy.url().should('include', '/analysis')
    cy.get('h1, h2').should('be.visible')
    cy.get('body').should('not.be.empty')
  })

  it('should navigate between different SDLC phases', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    
    // Test navigation to first few phases
    const testPhases = ['Planning', 'Analysis', 'Design']
    testPhases.forEach(phase => {
      // Open menu
      cy.contains('button', 'Menu').click()
      cy.contains('a', phase).should('be.visible').click()
      cy.url().should('include', `/${phase.toLowerCase()}`)
      cy.get('h1, h2, h3').should('be.visible')
      
      // Wait briefly before next navigation
      cy.wait(500)
    })
  })

  it('should have working interactive elements', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    
    // Open menu and navigate to Planning
    cy.contains('button', 'Menu').click()
    cy.contains('a', 'Planning').should('be.visible').click()
    cy.url().should('include', '/planning')
    
    // Check for buttons and interactive elements
    cy.get('button').should('have.length.greaterThan', 0)
    cy.get('h1, h2').should('be.visible')
    cy.get('body').should('not.be.empty')
  })

  it('should have proper page structure', () => {
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    
    // Open menu and navigate to Analysis
    cy.contains('button', 'Menu').click()
    cy.contains('a', 'Analysis').should('be.visible').click()
    cy.url().should('include', '/analysis')
    
    // Check essential elements exist
    cy.get('h1, h2, h3').should('be.visible')
    cy.get('p, div').should('have.length.greaterThan', 0)
  })

  it('should be responsive on mobile devices', () => {
    cy.viewport('iphone-6')
    cy.contains('button', 'Start Learning', { matchCase: false }).click()
    cy.url().should('include', '/learn-software-development')
    
    // Check if menu button is visible on mobile
    cy.contains('button', 'Menu').should('be.visible')
    cy.checkResponsive()
  })

  context('Design Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('Design')
    })

    it('should display design overview content', () => {
      cy.contains('Creating the Blueprint').should('be.visible')
    })

    it('should display design steps section', () => {
      cy.get('[aria-label="Steps"]').click()
      cy.contains('Design Steps').should('be.visible')
    })

    it('should display design types section', () => {
      cy.get('[aria-label="Types"]').click()
      cy.contains('Types of Design').should('be.visible')
    })

    it('should have interactive design elements', () => {
      cy.get('button').should('have.length.at.least', 5)
      cy.get('[aria-label="Steps"]').should('be.visible')
      cy.get('[aria-label="Types"]').should('be.visible')
      cy.get('[aria-label="Drawbacks"]').should('be.visible')
      cy.get('[aria-label="Quiz"]').should('be.visible')
    })
  })

  context('Planning Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('planning')
    })

    it('should load planning page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.contains('The Foundation of Every Successful Project').should('be.visible')
    })

    it('should navigate to planning steps', () => {
      cy.get('button').contains('🎯').click()
      cy.get('body').should('contain.text', 'Steps')
    })
  })

  context('Implementation Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('implementation')
    })

    it('should load implementation page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.get('body').should('not.be.empty')
    })

    it('should display implementation sections', () => {
      // Look for navigation buttons with emojis
      cy.get('body').then($body => {
        if ($body.text().includes('🎯')) {
          cy.get('button').contains('🎯').click()
          cy.wait(500)
        }
        
        if ($body.text().includes('📖')) {
          cy.get('button').contains('📖').click()
          cy.wait(500)
        }
      })
      
      cy.get('h1, h2, h3').should('be.visible')
    })
  })

  context('Testing Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('testing')
    })

    it('should load testing page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.contains('Ensuring Quality and Reliability').should('be.visible')
    })

    it('should display testing methodology sections', () => {
      // Look for steps navigation button
      cy.get('body').then($body => {
        if ($body.text().includes('🎯')) {
          cy.get('button').contains('🎯').click()
          cy.wait(500)
        }
      })
      
      cy.get('h1, h2, h3').should('be.visible')
    })
  })

  context('Deployment Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('deployment')
    })

    it('should load deployment page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.get('body').should('not.be.empty')
    })

    it('should show deployment strategies', () => {
      cy.get('[aria-label="Steps"]').click()
      cy.contains('Deployment Steps').should('be.visible')
    })
  })

  context('Maintenance Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('maintenance')
    })

    it('should load maintenance page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.contains('Keeping Your Software Healthy').should('be.visible')
    })
  })

  context('Review Page', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('review')
    })

    it('should load review page correctly', () => {
      cy.get('h1, h2, h3').should('be.visible')
      cy.contains('Learning and Continuous Improvement').should('be.visible')
    })
  })

  context('Cross-Page Navigation', () => {
    it('should maintain state when navigating between SDLC pages', () => {
      // Start at analysis
      cy.navigateToSDLCPage('analysis')
      cy.get('[aria-label="Steps"]').click()
      cy.contains('Analysis Steps').should('be.visible')
      
      // Navigate to design
      cy.navigateToSDLCPage('design')
      cy.checkPageLoad()
      
      // Navigate to implementation
      cy.navigateToSDLCPage('implementation')
      cy.checkPageLoad()
      
      // Each page should load independently
      cy.get('h1').should('be.visible')
      cy.get('button').should('have.length.at.least', 1)
    })

    it('should handle rapid page transitions', () => {
      const pages = ['analysis', 'design', 'planning', 'implementation']
      
      pages.forEach(page => {
        cy.navigateToSDLCPage(page)
        cy.get('h1').should('be.visible')
        cy.wait(200) // Brief pause between transitions
      })
    })
  })
})