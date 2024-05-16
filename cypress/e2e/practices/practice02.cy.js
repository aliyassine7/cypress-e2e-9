const { expect } = require("chai");

beforeEach(() => {
  cy.visit('https://www.amazon.com/');
});

describe('Practice01 Validate Google Home Page', () => {
  it('TASK-1: Validate the Amazon Header', () => {
    // Step 2
    cy.get('#nav-logo-sprites').should('be.visible');
    // Step 3
    cy.get('#nav-global-location-popover-link').should('be.visible');
    // Step 4
    cy.get('.nav-search-scope').eq(0).should('be.visible');
    // Step 5
    cy.get('#twotabsearchtextbox').should('be.visible');
    // Step 6
    cy.get('.nav-search-submit-text').should('be.visible');
    // Step 7
    cy.get('.icp-nav-link-inner').should('be.visible');
    // Step 8
    cy.get('#nav-link-accountList').should('be.visible');
    // Step 9
    cy.get('#nav-orders').should('be.visible');
    // Step 10
    cy.get('#nav-cart-count').should('have.text', '0')
  });

  it('Validate the Amazon Location Update', () => {
    // Step 2
    cy.get('#nav-global-location-popover-link').click();
    // Step 3
    cy.get('#GLUXZipUpdateInput').type('60018');
    // Step 4
    cy.get('#GLUXZipUpdate').click();
    // Step 5
    cy.get('#GLUXZipConfirmationValue').should('have.text', '60018');
    // Step 6
    cy.get('#a-autoid-1-announce').click();
    // Step 7
    cy.get('#glow-ingress-line2').contains('Des Plaines 60018');
  })

  it.only('TASK-3: Validate the Amazon Search Results', () => {
    // Step 2
    cy.get('#twotabsearchtextbox').click().type('Mug{enter}');
    // Step 3. Validate that result statistics show more than zero results
    cy.get('.a-section.a-spacing-small.a-spacing-top-small span').eq(0).then(($el) => {
      const str = $el.text();

      expect(Number(str.slice(str.indexOf('over') + 5, str.indexOf('results') - 1))

      .replace(',', '')).to.be.greaterThan(0)
    })
  })

});