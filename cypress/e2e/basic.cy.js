/// <reference types="cypress" />

describe("Cypress Basic", () => {
  it.only("I should visit a page and assert title", () => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.title()
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });

  it('should find and intereact with an element', ()=>{
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')
  })
});
