/// <reference types="cypress" />

import loc from "../support/locators";
import "../support/commandsContas";

describe("Aplicação Real", () => {
  beforeEach(() => {
    cy.login("ericvinicius848@gmail.com", "12345");
  });

  it("Criar Conta", function () {
    cy.acessarMenuConta();
    cy.inserirConta();
    cy.get(loc.MESSAGE)
      .should("contain.text", "Conta inserida com sucesso!")
      .and("be.visible");

    cy.restart();
  });

  it("Editar Conta", function () {
    cy.acessarMenuConta();
    cy.inserirConta();

    cy.contains("tr", "Conta Qualquer").find(loc.CONTA.BTN_ALTERAR).click();
    cy.get(loc.CONTA.NOME).clear().type("Conta Alterada");
    cy.get(loc.CONTA.BTN_SALVAR).click();

    cy.get(loc.MESSAGE)
      .should("contain.text", "Conta atualizada com sucesso!")
      .and("be.visible");

    cy.restart();
  });

  it("Erro ao tentar cadastrar conta repetida", function () {
    cy.acessarMenuConta();

    cy.get(loc.CONTA.NOME).type("Conta mesmo nome");
    cy.get(".btn").click();
    cy.get(loc.MESSAGE)
      .should(
        "contain.text",
        "Erro: Error: Request failed with status code 400"
      )
      .and("be.visible");

    cy.restart();
  });

  it("Cadastrar movimentação", function () {
    cy.get('a.nav-link[data-test="menu-movimentacao"]').click();
    cy.get(".btn-secondary").click();
    cy.get("#descricao").type("Tem que pagar");
    cy.get("#envolvido").type("Seu Madruga");
    cy.get('[placeholder="Valor"]').type("7000");

    cy.get('button[data-test="status"]').click();
    cy.get('select[data-test="conta"]').select("Conta para movimentacoes");
    cy.get(".btn-primary").click();

    cy.get(loc.MESSAGE)
      .should("contain.text", "Movimentação inserida com sucesso!")
      .and("be.visible");

    cy.restart();
  });

  it("Validar calculo de movimentação", function () {
    cy.get("td")
      .contains("Conta para movimentacoes")
      .parent("tr")
      .find("td:nth-child(2)")
      .should("contain", "1.500,00");

    cy.get('a.nav-link[data-test="menu-movimentacao"]').click();
    cy.get(".btn-secondary").click();
    cy.get("#descricao").type("Tem que pagar");
    cy.get("#envolvido").type("Seu Madruga");
    cy.get('[placeholder="Valor"]').type("7000");

    cy.get('button[data-test="status"]').click();
    cy.get('select[data-test="conta"]').select("Conta para movimentacoes");
    cy.get(".btn-primary").click();

    cy.get(loc.MESSAGE)
      .should("contain.text", "Movimentação inserida com sucesso!")
      .and("be.visible");

    cy.get('a.nav-link[data-test="menu-home"]').click();
    cy.get("td")
      .contains("Conta para movimentacoes")
      .parent("tr")
      .find("td:nth-child(2)")
      .should("contain", "8.500,00");

    cy.restart();
  });
});
