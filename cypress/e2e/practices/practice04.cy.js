/// <reference types="cypress" />
import GitHubHomePage from "../../pages/GitHubHomePage";
import GitHubLoginPage from "../../pages/GitHubLoginPage";

const gitHubHomePage = new GitHubHomePage();
const gitHubLoginPage = new GitHubLoginPage();

describe("Static Tables", () => {
  beforeEach(() => {
    cy.visit("https://github.com/");
  });

  it("TASK-1: Validate the GitHub Home Page Logo and Header Menu Items", () => {
    gitHubHomePage.getLogo().should("be.visible");

    const headerMenuItems = ["Product", "Solutions", "Open Source", "Pricing"];

    gitHubHomePage.getHeaderInfo().each(($el, index) => {
      cy.wrap($el).should("contain", headerMenuItems[index]);
    });
  });

  it("TASK-2: Validate the GitHub Home Page Search and Signing Header Items", () => {
    gitHubHomePage
      .getSearchInput()
      .should("have.attr", "placeholder", "Search or jump to...");
    gitHubHomePage.getSignInButton().should("contain", "Sign in");
    gitHubHomePage.getSignUpButton().should("contain", "Sign up");
  });

  it("TASK-3: Validate the GitHub Login Page Sign in Form", () => {
    const labels = ["Username or email address", "Password"];
    
    gitHubHomePage.clickSignInButton();
    gitHubLoginPage.getHeaderLogo().should("be.visible");
    gitHubLoginPage.getFormHeader().should("contain", "Sign in to GitHub");

    gitHubLoginPage.getInputLabels().each(($el, index) => {
      cy.wrap($el).should("contain", labels[index]);
    });

    gitHubLoginPage.getUsernameAndPasswordInputFields().should("be.visible").and("be.enabled");
    gitHubLoginPage
      .getForgotPasswordLink()
      .should("have.text", "Forgot password?");
    gitHubLoginPage
      .getPasskeyButton()
      .should("have.text", "Sign in with a passkey");
    gitHubLoginPage
      .getCreateAnAccountLink()
      .should("have.text", "Create an account")
      .and("be.visible");
    gitHubLoginPage
      .getSignInButton()
      .should("be.visible")
      .and("contain", "Sign in");
  });

  it("TASK-4: Validate the GitHub Login Page Footer Links ", () => {
    const footerLinks = [
      "Terms",
      "Privacy",
      "Docs",
      "Contact GitHub Support",
      "Manage cookies",
      "Do not share my personal information",
    ];

    gitHubHomePage.clickSignInButton();

    gitHubLoginPage.getFooterLinks().should("have.length", footerLinks.length);

    gitHubLoginPage.getFooterLinks().each(($el, index) => {
      cy.wrap($el).should("contain", footerLinks[index]);
    });
  });

  it("TASK-5: Validate the GitHub Login Page Invalid Login Attempt ", () => {
    gitHubHomePage.clickSignInButton();
    gitHubLoginPage.signIn("johndoe", "test1234");
    gitHubLoginPage.clickSignInButton();
    gitHubLoginPage
      .getErrorMessage()
      .should("include.text", "Incorrect username or password.");
  });
});
