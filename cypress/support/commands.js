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
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locators";

Cypress.Commands.add("clickAlert", function (locator, message) {
  cy.get(locator).click();
  cy.on("window:alert", (msg) => {
    console.log(msg);
    expect(msg).to.be.equal(message);
  });
});

Cypress.Commands.add("login", function (user, password) {
  cy.visit("https://barrigareact.wcaquino.me/");
  cy.get(loc.LOGIN.USER).type(user);
  cy.get(loc.LOGIN.PASSWORD).type(password);
  cy.get(loc.LOGIN.BTN_LOGIN).click();
  cy.get(loc.MESSAGE)
    .should("contain.text", "Bem vindo, Eric Vinicius!")
    .and("be.visible");
});

Cypress.Commands.add("restart", function () {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.RESET).click();
  cy.get(loc.MESSAGE)
    .should("contain.text", "Dados resetados com sucesso!")
    .and("be.visible");
});
