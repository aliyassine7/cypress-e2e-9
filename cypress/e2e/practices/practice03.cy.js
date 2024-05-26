beforeEach(() => {
  cy.visit("https://www.wikipedia.org/");
});

describe("Practice03 Wikipedia Home Page", {tags:["WikiTag"]}, () => {
  it("TASK-1: Validate the Wikipedia Logo and Slogan", () => {
    // 2. Validate that the logo is displayed, and its text is "Wikipedia"
    // 3.	Validate that the slogan is displayed, and its text is "The Free Encyclopedia"
    cy.get(".central-textlogo")
      .should("be.visible")
      .and('contain', "Wikipedia")
      .and("contain", "The Free Encyclopedia");
  });

  it("TASK-2: Validate the Wikipedia Top Ten Languages", () => {
    // 2.	Validate that there are top ten languages are displayed
    // 3.	Validate that the top language is "English"
    cy.get(".central-featured")
    .should('be.visible')
    .children()
    .eq(0)
    .should('contain', 'English');
  });

  it("TASK-3: Validate the Wikipedia Search Results", () => {
    // 2.	Search for "Cypress" in the search bar
    cy.get("#searchInput").type('Cypress{enter}');
    // 3.	Validate that "Cypress" is displayed in the title of the new page
    cy.title().should('contain', 'Cypress')
    // 4.	Validate that "Cypress" is displayed in the url of the new page
    cy.url().then((el) => {
      cy.wrap(el.toLowerCase()).should('contain', 'cypress')
    });
    // 5.	Validate that "Cypress" is displayed in the main heading of the page
    cy.get('#firstHeading').should('have.text', 'Cypress');
  });

  it("TASK-4: Validate the Wikipedia Article Numbers for All Languages", () => {
    cy.get("#js-lang-list-button").realClick();

    const numOfLangs = [18, 53, 99, 126, 29];
    
    for(let i = 0; i <= 4; i++) {
      cy.get('.hlist').eq(i).find('a').should('have.length', numOfLangs[i])
    }

  //   cy.get('.hlist>ul').each(($el, index) => {
  //     cy.wrap($el).find('a').should('have.length', numOfLangs[index])
  // })
  });
});
