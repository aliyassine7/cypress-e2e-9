class GitHubLoginPage  {

  /* Locators */
  getHeaderLogo() {
    return cy.get('.header-logo')
  }

  getFormHeader() {
    return cy.get('.auth-form-header')
  }

  getInputLabels() {
    return cy.get('label')
  }

  getInputFields() {
    return cy.get('#login_field, #password')
  }

  getForgotPasswordLink() {
    return cy.get('#forgot-password')
  }

  getPasskeyButton() {
    return cy.get('.Button-label').first()
  }

  getCreateAnAccountLink() {
    return cy.get('.mt-1').find('a')
  }

  getSignInButton() {
    return cy.get('.js-sign-in-button')
  }

  getFooterInfo() {
    return cy.get('.Link--secondary')
  }

  /* Methods */
  clickSignInButton() {
    this.getSignInButton().click()  
  }

  userLogin(username, password) {
    this.getInputFields[0].type(username)
    this.getInputFields[1].type(password)
  }
}

// ES6
export default GitHubLoginPage