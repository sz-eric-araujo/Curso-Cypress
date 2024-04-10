/// <reference types="cypress" />

describe("Work with basic elements", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("using jquery selector", () => {
    cy.get("table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input");
    cy.get("[onclick*='Francisco']");
    cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~~~~ > input");
    cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) input");
  });

  it("using xpath", () => {
    cy.xpath("//input");
  });
});
