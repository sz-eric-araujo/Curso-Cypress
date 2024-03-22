/// <reference types="cypress" />

describe("Working with Waiting", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("should wait the element be available", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").should("exist");
    cy.get("#novoCampo").type("funciona");
  });

  it("use find function", () => {
    cy.get("#buttonList").click();
    cy.get("#lista li").find("span").should("contain", "Item 1");
    cy.get("#lista li span").should("contain", "Item 2");
  });
});
