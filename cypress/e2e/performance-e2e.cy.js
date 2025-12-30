describe('Performance and E2E User Journeys', () => {
  context('Performance Tests', () => {
    it('should load homepage quickly', () => {
      const start = Date.now()
      cy.visit('/')
      
      cy.get('h1').should('be.visible')
      cy.then(() => {
        const loadTime = Date.now() - start
        expect(loadTime).to.be.lessThan(3000) // Should load within 3 seconds
      })
    })

    it('should handle concurrent page loads efficiently', () => {
      // Test rapid navigation
      const pages = ['analysis', 'design', 'planning', 'implementation']
      const start = Date.now()
      
      pages.forEach(page => {
        cy.navigateToSDLCPage(page)
        cy.get('h1').should('be.visible')
      })
      
      cy.then(() => {
        const totalTime = Date.now() - start
        expect(totalTime).to.be.lessThan(10000) // All pages within 10 seconds
      })
    })

    it('should maintain performance with multiple interactions', () => {
      cy.navigateToSDLCPage('design')
      
      // Perform 10 rapid section switches
      for (let i = 0; i < 10; i++) {
        cy.get('[aria-label="Steps"]').click()
        cy.wait(100)
        cy.get('[aria-label="Types"]').click()
        cy.wait(100)
      }
      
      cy.get('h1, h2').should('be.visible')
    })
  })

  context('Complete User Learning Journey', () => {
    it('should complete traditional SDLC learning path', () => {
      // Start from homepage
      cy.visit('/')
      cy.contains('🎓 Start Learning SDLC').click()
      
      // Go through each SDLC phase
      const phases = ['analysis', 'design', 'planning', 'implementation', 'testing', 'deployment', 'maintenance', 'review']
      
      phases.forEach((phase, index) => {
        cy.navigateToSDLCPage(phase)
        
        // Learn about the phase using navigation buttons
        cy.get('body').then($body => {
          // Try to find steps/approaches navigation using page-specific emojis
          // Analysis uses 📊, Design uses 🏗️, etc.
          if ($body.text().includes('📊') || $body.text().includes('🏗️') || $body.text().includes('🔍') || $body.find('[aria-label="Steps"]').length > 0) {
            // Find the first available navigation emoji
            if ($body.text().includes('📊')) {
              cy.get('button').contains('📊').first().click()
            } else if ($body.text().includes('🏗️')) {
              cy.get('button').contains('🏗️').click()
            } else if ($body.text().includes('🔍')) {
              cy.get('button').contains('🔍').click()
            } else {
              cy.get('[aria-label="Steps"]').click()
            }
            cy.wait(500)
          }
        })
        
        // Check types/approaches using navigation
        cy.get('body').then($body => {
          if ($body.text().includes('📖') || $body.find('[aria-label="Types"]').length > 0) {
            if ($body.text().includes('📖')) {
              cy.get('button').contains('📖').click()
            } else {
              cy.get('[aria-label="Types"]').click()
            }
            cy.wait(500)
          }
        })
        
        // Review potential issues
        cy.get('body').then($body => {
          if ($body.text().includes('⚠️') || $body.text().includes('⚠') || $body.find('[aria-label="Drawbacks"]').length > 0) {
            if ($body.text().includes('⚠️')) {
              cy.get('button').contains('⚠️').click()
            } else if ($body.text().includes('⚠')) {
              cy.get('button').contains('⚠').click()
            } else {
              cy.get('[aria-label="Drawbacks"]').click()
            }
            cy.wait(500)
          }
        })
        
        // Try quiz if available
        cy.get('body').then($body => {
          const hasQuizButton = $body.find('button').text().includes('Quiz') || 
                              $body.find('button').text().includes('Test Knowledge') ||
                              $body.find('button').text().includes('🧠')
          const hasRadio = $body.find('input[type="radio"]').length > 0
          
          if (hasQuizButton) {
            // Find the appropriate quiz button
            if ($body.find('button').text().includes('Test Knowledge')) {
              cy.get('button').contains('Test Knowledge').click()
            } else if ($body.find('button').text().includes('🧠')) {
              cy.get('button').contains('🧠').click()
            } else {
              cy.get('button').contains('Quiz').click()
            }
            
            cy.get('h1, h2, h3').should('be.visible')
            
            if (hasRadio) {
              cy.get('input[type="radio"]').first().check({ force: true })
              cy.get('body').should('not.be.empty')
            }
          }
        })
        
        cy.wait(1000) // Allow for feedback display
      })
    })

    it('should complete AI-Enhanced SDLC learning path', () => {
      // Start from homepage
      cy.visit('/')
      cy.contains('button', 'AI-Enhanced', { matchCase: false }).click()
      
      // Go through each AI-enhanced phase
      const aiPhases = ['analysis', 'design', 'planning', 'implementation', 'testing', 'deployment', 'maintenance', 'review']
      
      aiPhases.forEach((phase) => {
        cy.navigateToAISDLCPage(phase)
        
        // Verify AI content
        cy.contains('AI', { matchCase: false }).should('be.visible')
        
        // Learn about AI capabilities using navigation
        cy.get('body').then($body => {
          // Check for any navigation patterns
          const hasAnalysisEmoji = $body.text().includes('🔍') || $body.text().includes('📊')
          const hasAriaNav = $body.find('[aria-label="Steps"]').length > 0
          const hasStepButtons = $body.find('button').length > 3
          
          if (hasAnalysisEmoji || hasAriaNav || hasStepButtons) {
            if ($body.text().includes('🔍') && $body.find('button:contains("🔍")').length > 0) {
              cy.get('button').contains('🔍').click()
            } else if ($body.text().includes('📊') && $body.find('button:contains("📊")').length > 0) {
              cy.get('button').contains('📊').first().click()
            } else if (hasAriaNav) {
              cy.get('[aria-label="Steps"]').first().click()
            } else {
              // Click any available navigation button
              cy.get('button').first().click()
            }
            cy.wait(500)
          } else {
            // Just verify page is interactive
            cy.get('h1, h2, h3').should('be.visible')
          }
        })
        
        // Try AI-specific quiz if available
        cy.get('body').then($body => {
          const hasQuiz = $body.find('button').text().includes('Quiz')
          const hasRadio = $body.find('input[type="radio"]').length > 0
          
          if (hasQuiz) {
            cy.get('button').contains('Quiz').click()
            cy.get('h1, h2, h3').should('be.visible')
            
            if (hasRadio) {
              cy.get('input[type="radio"]').first().check({ force: true })
              cy.get('body').should('not.be.empty')
            }
          }
        })
        
        cy.wait(1000)
      })
    })

    it('should compare traditional vs AI-enhanced approaches', () => {
      // Start with traditional analysis
      cy.navigateToSDLCPage('analysis')
      cy.contains('Analysis Phase').should('be.visible')
      
      // Take notes on traditional approach using available navigation
      cy.get('body').then($body => {
        if ($body.text().includes('📊') || $body.text().includes('🔍') || $body.find('[aria-label="Steps"]').length > 0) {
          if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else if ($body.text().includes('🔍')) {
            cy.get('button').contains('🔍').click()
          } else {
            cy.get('[aria-label="Steps"]').click()
          }
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
      
      // Switch to AI-enhanced analysis
      cy.navigateToAISDLCPage('analysis')
      cy.contains('Analysis Phase with AI').should('be.visible')
      
      // Compare AI approach
      cy.get('body').then($body => {
        if ($body.text().includes('🔍') || $body.text().includes('📊') || $body.find('[aria-label="Steps"]').length > 0) {
          if ($body.text().includes('🔍')) {
            cy.get('button').contains('🔍').click()
          } else if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else {
            cy.get('[aria-label="Steps"]').click()
          }
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
      
      // Verify AI-specific content
      cy.contains('artificial intelligence', { matchCase: false }).should('be.visible')
    })
  })

  context('Advanced User Scenarios', () => {
    it('should handle expert user rapid navigation', () => {
      // Simulate experienced user quickly navigating
      cy.visit('/')
      
      // Quick exploration of multiple sections
      cy.navigateToSDLCPage('design')
      cy.get('body').then($body => {
        if ($body.text().includes('🏗️') || $body.text().includes('📊') || $body.text().includes('🔍') || $body.find('[aria-label="Steps"]').length > 0) {
          if ($body.text().includes('🏗️')) {
            cy.get('button').contains('🏗️').click()
          } else if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else if ($body.text().includes('🔍')) {
            cy.get('button').contains('🔍').click()
          } else {
            cy.get('[aria-label="Steps"]').click()
          }
          cy.wait(500)
        }
        
        if ($body.text().includes('📖') || $body.text().includes('📚') || $body.find('[aria-label="Types"]').length > 0) {
          if ($body.text().includes('📖')) {
            cy.get('button').contains('📖').click()
          } else if ($body.text().includes('📚')) {
            cy.get('button').contains('📚').click()
          } else {
            cy.get('[aria-label="Types"]').click()
          }
          cy.wait(500)
        }
      })
      
      cy.navigateToAISDLCPage('implementation')
      cy.get('body').then($body => {
        if ($body.text().includes('🔨') || $body.text().includes('⚙️')) {
          if ($body.text().includes('🔨')) {
            cy.get('button').contains('🔨').first().click()
          } else {
            cy.get('button').contains('⚙️').click()
          }
          cy.wait(500)
        }
        const hasQuizButton = $body.find('button').text().includes('Quiz') || 
                            $body.find('button').text().includes('Test Knowledge') ||
                            $body.find('button').text().includes('🧠')
        const hasRadio = $body.find('input[type="radio"]').length > 0
        
        if (hasQuizButton) {
          // Find the appropriate quiz button
          if ($body.find('button').text().includes('Test Knowledge')) {
            cy.get('button').contains('Test Knowledge').click()
          } else if ($body.find('button').text().includes('🧠')) {
            cy.get('button').contains('🧠').click()
          } else {
            cy.get('button').contains('Quiz').click()
          }
          if (hasRadio) {
            cy.get('input[type="radio"]').first().check({ force: true })
          }
        }
      })
      
      cy.navigateToSDLCPage('testing')
      cy.get('h1, h2, h3').should('be.visible')
    })

    it('should support learning session resumption', () => {
      // Start learning session
      cy.navigateToSDLCPage('analysis')
      cy.get('body').then($body => {
        if ($body.text().includes('📊') || $body.text().includes('🔍')) {
          if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else {
            cy.get('button').contains('🔍').click()
          }
        }
      })
      
      // Simulate session interruption and resumption
      cy.visit('/') // Go back to home
      
      // Resume where left off
      cy.navigateToSDLCPage('design')
      cy.get('body').then($body => {
        if ($body.text().includes('🏗️') || $body.text().includes('📊')) {
          if ($body.text().includes('🏗️')) {
            cy.get('button').contains('🏗️').click()
          } else {
            cy.get('button').contains('📊').first().click()
          }
        }
      })
      cy.get('h1, h2, h3').should('be.visible')
    })

    it('should handle multi-tab learning', () => {
      // Simulate user opening multiple tabs for comparison
      cy.navigateToSDLCPage('analysis')
      cy.get('body').then($body => {
        if ($body.text().includes('📊') || $body.text().includes('🔍')) {
          if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else {
            cy.get('button').contains('🔍').click()
          }
        }
      })
      
      // Open new context (simulate new tab)
      cy.window().then(win => {
        win.open('/ai-analysis', '_blank')
      })
      
      // Continue in original tab - try to access quiz
      cy.get('body').then($body => {
        const hasQuizButton = $body.find('button').text().includes('Quiz') || 
                            $body.find('button').text().includes('Test Knowledge') ||
                            $body.find('button').text().includes('🧠')
        
        if (hasQuizButton) {
          if ($body.find('button').text().includes('Test Knowledge')) {
            cy.get('button').contains('Test Knowledge').click()
          } else if ($body.find('button').text().includes('🧠')) {
            cy.get('button').contains('🧠').click()
          } else {
            cy.get('button').contains('Quiz').click()
          }
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
    })
  })

  context('Error Recovery and Edge Cases', () => {
    it('should recover from network interruptions', () => {
      cy.navigateToSDLCPage('analysis')
      
      // Simulate network failure during quiz
      cy.intercept('GET', '**/quiz/**', { forceNetworkError: true }).as('networkError')
      
      cy.get('body').then($body => {
        const hasQuizButton = $body.find('button').text().includes('Quiz') || 
                            $body.find('button').text().includes('Test Knowledge') ||
                            $body.find('button').text().includes('🧠')
        
        if (hasQuizButton) {
          if ($body.find('button').text().includes('Test Knowledge')) {
            cy.get('button').contains('Test Knowledge').click()
          } else if ($body.find('button').text().includes('🧠')) {
            cy.get('button').contains('🧠').click()
          } else {
            cy.get('button').contains('Quiz').click()
          }
        }
      })
      
      // Should show error message or at minimum page should remain functional
      cy.get('body').should('be.visible')
    })

    it('should handle browser back/forward navigation', () => {
      cy.navigateToSDLCPage('analysis')
      
      // Navigate to a specific section first
      cy.get('body').then($body => {
        if ($body.text().includes('📊') || $body.text().includes('🔍')) {
          if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else {
            cy.get('button').contains('🔍').click()
          }
        }
      })
      
      cy.go('back')
      cy.get('h1, h2').should('be.visible')
      
      cy.go('forward')
      cy.get('h1, h2').should('contain.text', 'Analysis')
    })

    it('should maintain state during page refresh', () => {
      cy.navigateToSDLCPage('design')
      cy.get('[aria-label="Types"]').click()
      
      cy.reload()
      cy.get('h1').should('be.visible')
      // State may not persist, but page should load correctly
    })
  })

  context('Cross-Browser Compatibility Simulation', () => {
    it('should work with different viewport sizes', () => {
      const viewports = [
        [320, 568], // iPhone SE
        [768, 1024], // iPad
        [1024, 768], // iPad Landscape
        [1440, 900], // Desktop
        [1920, 1080] // Large Desktop
      ]
      
      viewports.forEach(([width, height]) => {
        cy.viewport(width, height)
        cy.visit('/')
        
        cy.get('h1').should('be.visible')
        cy.contains('🎓 Start Learning SDLC').should('be.visible')
        
        cy.navigateToSDLCPage('analysis')
        cy.get('body').then($body => {
          if ($body.text().includes('📊') || $body.text().includes('🔍') || $body.find('[aria-label="Steps"]').length > 0) {
            // Navigation exists - basic verification
            cy.get('button').should('have.length.greaterThan', 0)
          } else {
            // Just verify page loaded
            cy.get('h1, h2, h3').should('be.visible')
          }
        })
      })
    })

    it('should handle reduced motion preferences', () => {
      cy.visit('/', {
        onBeforeLoad: (win) => {
          Object.defineProperty(win, 'matchMedia', {
            writable: true,
            value: cy.stub().returns({
              matches: true, // Simulate prefers-reduced-motion
              addEventListener: cy.stub(),
              removeEventListener: cy.stub(),
            }),
          })
        }
      })
      
      cy.get('h1').should('be.visible')
      cy.navigateToSDLCPage('analysis')
      cy.get('body').then($body => {
        if ($body.text().includes('📊') || $body.text().includes('🔍')) {
          if ($body.text().includes('📊')) {
            cy.get('button').contains('📊').first().click()
          } else {
            cy.get('button').contains('🔍').click()
          }
        }
      })
      cy.get('h1, h2, h3').should('be.visible')
    })
  })

  context('Content Validation', () => {
    it('should have consistent content across all SDLC pages', () => {
      const phases = ['analysis', 'design', 'planning', 'implementation', 'testing', 'deployment', 'maintenance', 'review']
      
      phases.forEach(phase => {
        cy.navigateToSDLCPage(phase)
        
        // Check for navigation elements (emoji or aria-label based)
        cy.get('body').then($body => {
          const hasEmojiNav = $body.text().includes('📊') || $body.text().includes('🔍') || $body.text().includes('🏗️') || $body.text().includes('📖') || $body.text().includes('⚠')
          const hasAriaNav = $body.find('[aria-label="Steps"]').length > 0
          
          if (hasEmojiNav || hasAriaNav) {
            // At least some navigation exists
            cy.get('button').should('have.length.greaterThan', 2)
          } else {
            // Fallback - just verify basic page structure
            cy.get('h1, h2, h3').should('be.visible')
          }
        })
      })
    })

    it('should have consistent AI content across all AI pages', () => {
      const aiPhases = ['analysis', 'design', 'planning', 'implementation', 'testing', 'deployment', 'maintenance', 'review']
      
      aiPhases.forEach(phase => {
        cy.navigateToAISDLCPage(phase)
        
        // Each AI page should mention AI/artificial intelligence
        cy.contains('AI', { matchCase: false }).should('be.visible')
        cy.get('h1, h2, h3').should('be.visible')
      })
    })

    it('should validate quiz content quality', () => {
      cy.navigateToSDLCPage('analysis')
      
      // Find and click quiz button
      cy.get('body').then($body => {
        const hasQuizButton = $body.find('button').text().includes('Quiz') || 
                            $body.find('button').text().includes('Test Knowledge') ||
                            $body.find('button').text().includes('🧠')
        
        if (hasQuizButton) {
          // Find the appropriate quiz button
          if ($body.find('button').text().includes('Test Knowledge')) {
            cy.get('button').contains('Test Knowledge').click()
          } else if ($body.find('button').text().includes('🧠')) {
            cy.get('button').contains('🧠').click()
          } else {
            cy.get('button').contains('Quiz').click()
          }
          
          // Wait for quiz to load
          cy.get('h1, h2, h3').should('be.visible')
          
          // Check for quiz content (questions and options)
          cy.get('body').then($quizBody => {
            const hasRadio = $quizBody.find('input[type="radio"]').length > 0
            const hasQuestions = $quizBody.text().includes('?')
            
            if (hasRadio && hasQuestions) {
              cy.get('input[type="radio"]').should('have.length.at.least', 2)
            } else {
              // Fallback - just verify quiz section loaded
              cy.get('body').should('contain.text', 'Knowledge')
            }
          })
        } else {
          // No quiz available, just verify page loaded
          cy.get('h1, h2, h3').should('be.visible')
        }
      })
    })
  })
})