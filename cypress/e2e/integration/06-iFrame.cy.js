describe("Handling iFrames", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.contains(".cards", "IFrames").click();
  });

  it("iFrame", () => {
    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .find("#first_name")
      .type("Ali");

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#last_name")
      .type("Yassine");

    cy.get("#form_frame").its("0.contentDocument.body").find("#submit").click();
  });

  it("iFrame", () => {
    // cy.get('#form_frame')
    // .its('0.contentDocument.body')
    // .should('not.be.empty')
    // .find('#first_name').type('MyName')

    const arr = ["tech", "global"];

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#first_name, #last_name")
      .each(($el, index) => {
        cy.wrap($el).type(arr[index]);
      });
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */

  const name = ["John", "Doe"];

  const result = `You entered: ${name[0]} ${name[1]}`;

  it.only("iFrame Test Case", () => {
    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#first_name, #last_name")
      .each(($el, index) => {
        cy.wrap($el).type(name[index]);
      });

    cy.get("#form_frame").its("0.contentDocument.body").find("#submit").click();

    cy.get("#result").should("have.text", result);
    // cy.get('#result').should('have.text', `You entered: ${name.join(' ')}`)
  });
});
