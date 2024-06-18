import loc from "./locators";

Cypress.Commands.add("acessarMenuConta", function () {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.CONTAS).click();
});

Cypress.Commands.add("inserirConta", function () {
  cy.get(loc.CONTA.NOME).type("Conta Qualquer");
  cy.get(loc.CONTA.BTN_SALVAR).click();
});
