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

  getUsernameAndPasswordInputFields() {
    return cy.get('#login_field, #password')
  }

  getUsernameOrEmailAdressInputField() {
    return cy.get('#login_field')
  }

  getPasswordInputField() {
    return cy.get('#password')
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

  getFooterLinks() {
    return cy.get('.Link--secondary')
  }

  getErrorMessage() {
    return cy.get('.js-flash-alert')
  }

  /* Methods */
  clickSignInButton() {
    this.getSignInButton().click()  
  }

  signIn(username, password) {
    this.getUsernameOrEmailAdressInputField().type(username)
    this.getPasswordInputField().type(password)
  }
}

// ES6
export default GitHubLoginPage