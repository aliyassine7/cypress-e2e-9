beforeEach(() => {
  cy.visit('https://www.google.com/')
})

describe('Practice01 Validate Google Home Page', () => {
  it('TASK-1: Validate the Google Home Page Title and URL', () => {
    cy.title().should('equal', 'Google')
    
    cy.url().should('eq', 'https://www.google.com/')
  })

  it('TASK-2: Validate the Google Logo Presence', () => {
    cy.get('.lnXdpd').should('be.visible')
  })

  it('TASK-3: Validate the Google Search Results', () => {
    cy.get('.gLFyf').click().type('cypress{enter}')

    cy.get('#APjFqb').should('be.visible')
  })

  it('TASK-4: Validate the Google Search Autocomplete Suggestions', () => {
    cy.get('.gLFyf').click().type('Artificial Intelligence')

    cy.get('#jZ2SBf').should('be.visible').click()

    cy.url().should('contain','q=artificial+intelligence', { matchCase: false })
  })
})