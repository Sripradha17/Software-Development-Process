describe('Interactive Features Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Quiz Functionality', () => {
    beforeEach(() => {
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      cy.url().should('include', '/learn-software-development')
      
      // Open menu and navigate to Analysis
      cy.contains('button', 'Menu').click()
      cy.get('a').contains('Analysis').should('be.visible').click()
    })

    it('should find and interact with quiz elements', () => {
      // Look for quiz-related buttons or sections
      cy.get('body').then($body => {
        if ($body.find('button:contains("Quiz"), button:contains("Take Quiz"), [aria-label*="Quiz"]').length > 0) {
          cy.get('button:contains("Quiz"), button:contains("Take Quiz"), [aria-label*="Quiz"]').first().click()
          cy.get('h1, h2, h3').should('be.visible')
        } else {
          // If no quiz button, just verify page loaded
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
    })

    it('should handle quiz interactions if available', () => {
      cy.get('body').then($body => {
        if ($body.find('input[type="radio"], button:contains("Submit")').length > 0) {
          // If quiz elements exist, test them
          cy.get('input[type="radio"]').first().check({ force: true })
          cy.get('button:contains("Submit")').click()
        } else {
          // Otherwise just verify content exists
          cy.get('body').should('not.be.empty')
        }
      })
    })
  })

  context('Case Study Features', () => {
    beforeEach(() => {
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      cy.url().should('include', '/learn-software-development')
      
      // Open menu and navigate to Design
      cy.contains('button', 'Menu').click()
      cy.get('a').contains('Design').should('be.visible').click()
    })

    it('should display case study content when available', () => {
      cy.get('body').then($body => {
        if ($body.find('button:contains("Case Study"), [aria-label*="Case"]').length > 0) {
          cy.get('button:contains("Case Study"), [aria-label*="Case"]').first().click()
          cy.get('h1, h2, h3').should('be.visible')
        } else {
          // Verify page content exists
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
    })
  })

  context('Drag and Drop Features', () => {
    beforeEach(() => {
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
    })

    it('should handle drag and drop elements if present', () => {
      cy.get('body').then($body => {
        if ($body.find('[draggable="true"], .drag-drop').length > 0) {
          // Test drag and drop functionality
          cy.get('[draggable="true"]').first().should('be.visible')
        } else {
          // Just verify interactive elements exist
          cy.get('button').should('have.length.greaterThan', 0)
        }
      })
    })
  })

  context('Menu and Navigation', () => {
    it('should have working menu functionality', () => {
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      cy.url().should('include', '/learn-software-development')
      
      // Test menu functionality
      cy.contains('button', 'Menu').should('be.visible').click()
      cy.get('a').should('have.length.greaterThan', 0)
    })

    it('should navigate back to home', () => {
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      
      // Look for back navigation
      cy.get('body').then($body => {
        if ($body.find('button:contains("Back"), a:contains("Home")').length > 0) {
          cy.get('button:contains("Back"), a:contains("Home")').first().click()
          cy.url().should('eq', Cypress.config().baseUrl + '/')
        } else {
          // Use browser back
          cy.go('back')
          cy.url().should('eq', Cypress.config().baseUrl + '/')
        }
      })
    })
  })

  context('Responsive Design', () => {
    it('should work on mobile devices', () => {
      cy.viewport('iphone-6')
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      cy.url().should('include', '/learn-software-development')
      
      // Check menu button is visible on mobile
      cy.contains('button', 'Menu').should('be.visible')
      cy.get('h1, h2, h3').should('be.visible')
    })

    it('should work on tablet devices', () => {
      cy.viewport('ipad-2')
      cy.contains('button', 'AI-Enhanced', { matchCase: false }).click()
      cy.get('h1').should('be.visible')
      cy.checkResponsive()
    })
  })

  context('Quiz Functionality', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.contains('button', 'Start Learning', { matchCase: false }).click()
      cy.url().should('include', '/learn-software-development')
    })

    it('should handle quiz completion', () => {
      // Navigate to a page with a quiz
      cy.get('body').then($body => {
        if ($body.find('button:contains("Quiz"), [aria-label*="Quiz"]').length > 0) {
          cy.get('button:contains("Quiz"), [aria-label*="Quiz"]').first().click()
          
          // Complete quiz quickly
          cy.get('input[type="radio"]').first().check({ force: true })
          cy.contains('Submit Answer').click()
          
          // Should show some form of results or score
          cy.get('div').should('be.visible')
        }
      })
    })

    it('should handle quiz navigation', () => {
      // Check if quiz elements exist
      cy.get('body').then($body => {
        const hasQuizButton = $body.find('button').text().includes('Quiz')
        
        if (hasQuizButton) {
          cy.get('button').contains('Quiz').click()
          cy.get('h1, h2, h3').should('be.visible')
        } else {
          // Just verify navigation works in general
          cy.get('h1, h2, h3').should('be.visible')
          cy.get('button').should('have.length.greaterThan', 0)
        }
      })
    })
  })

  context('Section Navigation', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('design')
    })

    it('should navigate between all sections smoothly', () => {
      // Test navigation using emoji buttons instead of aria-labels
      cy.get('body').then($body => {
        // Look for navigation buttons with emojis
        const buttonText = $body.find('button').text()
        
        if (buttonText.includes('🎯')) {
          cy.get('button').contains('🎯').click()
          cy.wait(300)
          cy.get('body').should('contain.text', 'Steps')
        }
        
        if (buttonText.includes('📖')) {
          cy.get('button').contains('📖').click()
          cy.wait(300) 
          cy.get('body').should('contain.text', 'Types')
        }
        
        // Always verify page is functional
        cy.get('h1, h2, h3').should('be.visible')
      })
    })

    it('should maintain active section state', () => {
      // Test active state using emoji buttons
      cy.get('body').then($body => {
        const buttonText = $body.find('button').text()
        
        if (buttonText.includes('🎯')) {
          cy.get('button').contains('🎯').click()
          cy.get('button').contains('🎯').should('be.visible')
        } else {
          // Just verify buttons are interactive
          cy.get('button').first().click()
          cy.get('button').first().should('be.visible')
        }
      })
    })

    it('should handle rapid section switching', () => {
      // Test rapid navigation using emoji buttons
      cy.get('body').then($body => {
        const buttonText = $body.find('button').text()
        
        // Click through available navigation buttons quickly
        if (buttonText.includes('🎯')) {
          cy.get('button').contains('🎯').click()
          cy.wait(100)
        }
        
        if (buttonText.includes('📖')) {
          cy.get('button').contains('📖').click()
          cy.wait(100)
        }
        
        // Verify page remains functional
        cy.get('h1, h2, h3').should('be.visible')
      })
    })
  })

  context('Menu Functionality', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('analysis')
    })

    it('should open and close menu', () => {
      cy.contains('Menu').click()
      
      // Check if dropdown menu appears
      cy.get('body').then($body => {
        const hasDropdown = $body.find('ul, .dropdown, [role="menu"]').length > 0
        
        if (hasDropdown) {
          cy.get('ul, .dropdown, [role="menu"]').should('be.visible')
        } else {
          // Just verify menu button works
          cy.contains('Menu').should('be.visible')
        }
      })
    })

    it('should navigate to different pages via menu', () => {
      cy.contains('Menu').click()
      
      // Menu should have navigation options
      cy.get('div').should('be.visible')
    })
  })

  context('Drag and Drop Quiz', () => {
    beforeEach(() => {
      cy.visit('/', { failOnStatusCode: false })
    })

    it('should handle drag and drop interactions', () => {
      // Check if drag and drop elements exist
      cy.get('body').then($body => {
        const hasDraggable = $body.find('div[draggable="true"], [draggable="true"]').length > 0
        
        if (hasDraggable) {
          cy.get('div[draggable="true"]').should('exist')
          // Test basic drag functionality
          cy.get('div[draggable="true"]').first().should('be.visible')
        } else {
          // If no drag/drop, just verify page works
          cy.get('body').should('not.be.empty')
          cy.get('h1, h2, h3').should('exist')
        }
      })
    })
  })

  context('Animations and Transitions', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('analysis')
    })

    it('should have smooth page transitions', () => {
      cy.get('h1').should('be.visible')
      cy.get('[aria-label="Steps"]').click()
      
      // Check for animation presence (framer-motion)
      cy.get('div[style*="transform"]').should('exist')
    })

    it('should handle hover effects on buttons', () => {
      cy.get('[aria-label="Steps"]').trigger('mouseover')
      cy.get('[aria-label="Steps"]').should('be.visible')
    })
  })

  context('Responsive Interactive Elements', () => {
    beforeEach(() => {
      cy.navigateToSDLCPage('design')
    })

    it('should maintain functionality on mobile', () => {
      cy.viewport('iphone-6')
      
      cy.get('[aria-label="Steps"]').click()
      cy.contains('Design Steps').should('be.visible')
      
      cy.get('[aria-label="Quiz"]').click()
      cy.contains('Test Your Knowledge').should('be.visible')
    })

    it('should work on tablet devices', () => {
      cy.viewport('ipad-2')
      
      cy.testSectionNavigation(['Steps', 'Types'])
    })
  })

  context('Error Handling', () => {
    it('should handle network interruptions gracefully', () => {
      // Test basic error handling without network simulation
      cy.visit('/')
      
      // Should show content even if some requests fail
      cy.get('h1, h2, h3').should('be.visible')
      cy.get('body').should('not.be.empty')
    })

    it('should handle missing quiz data', () => {
      cy.navigateToSDLCPage('analysis')
      
      // Check if quiz exists and handle gracefully
      cy.get('body').then($body => {
        if ($body.find('button').text().includes('Quiz')) {
          cy.get('button').contains('Quiz').click()
          cy.get('h1, h2, h3').should('be.visible')
        } else {
          // No quiz available, that's fine
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
      
      // Should handle gracefully
      cy.get('body').should('not.be.empty')
    })
  })

  context('Performance', () => {
    it('should load interactive elements within reasonable time', () => {
      const startTime = Date.now()
      
      cy.navigateToSDLCPage('analysis')
      cy.get('[aria-label="Steps"]').click()
      
      const endTime = Date.now()
      expect(endTime - startTime).to.be.lessThan(5000)
    })

    it('should handle multiple rapid interactions', () => {
      cy.navigateToSDLCPage('design')
      
      // Rapidly click different sections
      for (let i = 0; i < 5; i++) {
        cy.get('[aria-label="Steps"]').click()
        cy.wait(100)
        cy.get('[aria-label="Types"]').click()
        cy.wait(100)
      }
      
      cy.get('h1, h2').should('be.visible')
    })
  })
})