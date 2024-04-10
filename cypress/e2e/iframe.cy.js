/// <reference types="cypress" />

describe("Working with iframes", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  it("Deve preencher campo de texto", () => {
    cy.get("#frame1").then((iframe) => {
      const body = iframe.contents().find("body");
      cy.wrap(body)
        .find("#tfield")
        .type("funciona?")
        .should("have.value", "funciona?");
    });
  });
  /* Os iframes só conseguem ser testado caso vá para a url do mesmo, então usando o teste acima como exemplo, 
    ele escreveu no campo do iframe mas acessar o bnt apenas indo a url, é uma baita gambiarra*/
  it("Deve testar frame diretamente", () => {
    cy.visit("https://www.wcaquino.me/cypress/frame.html");
    cy.get("#otherButton").click();
    cy.on("window:alert", (msg) => {
      expect(msg).to.be.equal("Click OK!");
    });
  });
});
