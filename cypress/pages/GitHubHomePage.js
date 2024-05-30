class GitHubHomePage {

  /* Locators */
  getLogo() {
    return cy.get('div.width-lg-auto')
  }

  getHeaderInfo() {
    return cy.get('.HeaderMenu-item>button, .HeaderMenu-item>a')
  }

  getSearchInput() {
    return cy.get('.header-search-button')
  }

  getSignInButton() {
    return cy.get('.HeaderMenu-link--sign-in')
  }

  getSignUpButton() {
    return cy.get('.HeaderMenu-link--sign-up')
  }

  /* Methods */
  clickSignInButton() {
    this.getSignInButton().click()
  }
}

// ES6
export default GitHubHomePage