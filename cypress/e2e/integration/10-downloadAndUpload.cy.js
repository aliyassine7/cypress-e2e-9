/// <reference types="cypress" />

describe("File Download & File Upload", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/");
    cy.clickCard("File Download & Upload");
  });

  it("File Download", () => {
    cy.get('#file_download').click()

    const fileName = 'SampleText.txt';

    cy.readFile(`cypress/downloads/${fileName}`)
  })
});