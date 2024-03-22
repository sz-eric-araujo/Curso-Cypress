/// <reference types="cypress" />

describe("Work with basic elements", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("text", () => {
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });

  it("links", () => {
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();
    cy.get("#resultado").should("have.not.text", "Voltou!");
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });

  it("TextFields", () => {
    cy.get("#formNome")
      .type("Cypress test")
      .should("have.value", "Cypress test");

    cy.get("#elementosForm\\:sugestoes")
      .type("Text Area")
      .should("have.value", "Text Area");

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
    ).type("???");

    cy.get('[data-cy="dataSobrenome"]')
      .type("12345{backspace}{backspace}")
      .should("have.value", "123");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Errou{selectall}acertou")
      .should("have.value", "acertou");
  });

  it("Radio buttons", () => {
    cy.get("#formSexoFem").click().should("be.checked");
    cy.get("#formSexoMasc").should("not.be.checked");
  });

  it("Checkboxes", () => {
    /*cy.get("#formComidaCarne");
    cy.get("#formComidaFrango");
    cy.get("#formComidaPizza");
    cy.get("#formComidaVegetariana");*/

    cy.get("[name=formComidaFavorita]")
      .check({ multiple: true })
      .should("be.checked");
  });

  it("Combo", () => {
    cy.get('[data-test="dataEscolaridade"]')
      .select("2o grau completo")
      .should("have.value", "2graucomp");

    //validar opções do combo
  });

  it("Multi Combo", () => {
    cy.get('[data-testid="dataEsportes"]').select([
      "natacao",
      "Corrida",
      "nada",
    ]);

    // validar opções selecionadas do combo multiplo
  });
});
