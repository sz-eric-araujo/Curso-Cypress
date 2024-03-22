/// <reference types="cypress" />

describe("Working with Waiting", () => {
    beforeEach(() => {
      cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    });
  
  it('Wrap', ()=>{
    const obj = {name: 'User', Age: 20}
    expect(obj).to.have.property('name')
  })
  });