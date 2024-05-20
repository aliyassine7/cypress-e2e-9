// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("clickCard", (link) => {
  cy.get(".cards").contains(link).click();
});

Cypress.Commands.add("selectDropdownOption", (element, option) => {
  cy.get(element).select(option);
});

Cypress.Commands.add("login", (email, name) => {
  cy.get('[type="email"]').type(email);
  cy.get('.mt-3 > [type="text"]').type(name);
  cy.get(".mt-3 + button").click();
});

Cypress.Commands.add("haveText", { prevSubject: true }, (subject, value) => {
  // expect(subject.text()).equal(value);
  cy.wrap(subject).should("have.text", value);
});

Cypress.Commands.add("haveText2", (el, value) => {
  cy.get(element).should("have.text", value);
});

Cypress.Commands.add("logText", { prevSubject: true }, (subject) => {
  const text = subject.text();

  cy.log(text);

  return cy.wrap(subject);
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add('assertAttribute', {prevSubject: true}, (subject, attribute, value) => {
  cy.wrap(subject).should('have.attr', attribute, value)
});

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
