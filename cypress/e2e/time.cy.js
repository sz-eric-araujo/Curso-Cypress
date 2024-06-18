/// <reference types="cypress" />

describe("Fixtures tests", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("Back to the Past", function () {
    //cy.get("#buttonNow").click();
    // cy.get('#resultado > span').should('')

    const dt = new Date(2012, 3, 10, 15, 23, 50);
    cy.clock(dt.getTime());
    cy.get("#buttonNow").click();
    cy.get("#resultado > span").should("contain", "10/04/2012");
  });

  it.only("Go to the Future", function () {
    cy.get("#buttonTimePassed").click();
    cy.get("#resultado > span").invoke("text").should("gt", 1713989681);
  });
});
