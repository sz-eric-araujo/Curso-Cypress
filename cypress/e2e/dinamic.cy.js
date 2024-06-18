/// <reference types="cypress" />

describe("Dinamic tests", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  const foods = ["Carne", "Frango", "Pizza", "Vegetariano"];
  foods.forEach((food) => {
    it(`Cadastro com Comida ${food}`, function () {
      cy.get("#formNome").type("Usuario");
      cy.get("#formSobrenome").type("Qualquer");
      cy.get(`[name=formSexo][value=F]`).click();
      cy.xpath(
        `//label[contains(., '${food}')]/preceding-sibling::input`
      ).click();
      cy.get("#formEscolaridade").select("Doutorado");
      cy.get("#formEsportes").select("Corrida");
      cy.get("#formCadastrar").click();
      cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
    });
  });

  it.only("Deve selecionar todas as comidas usando Each", function () {
    cy.get("#formNome").type("Usuario");
    cy.get("#formSobrenome").type("Qualquer");
    cy.get(`[name=formSexo][value=F]`).click();
    cy.get("[name=formComidaFavorita]").each(($el) => {
      if ($el.val() != "vegetariano") cy.wrap($el).click();
    });
    cy.get("#formEscolaridade").select("Doutorado");
    cy.get("#formEsportes").select("Corrida");
    cy.get("#formCadastrar").click();
    cy.get("#resultado > :nth-child(1)").should("contain", "Cadastrado!");
    //cy.clickAlert("#formCadastrar", "Tem certeza que voce eh vegetariano?");
  });
});
