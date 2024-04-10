/// <reference types="cypress" />

describe("Working with Waiting", () => {
    beforeEach(() => {
      cy.visit("https://www.wcaquino.me/cypress/componentes.html");
    });
  
  it('its', ()=>{
    const obj = {name: 'User', Age: 20}
    cy.wrap(obj).should('have.property', 'name', 'User')
    cy.wrap(obj).its('name').should('be.equal', 'User')

    const obj2 = {name: 'User', Age: 20, address: {rua: 'dos bobos'}}
    cy.wrap(obj2).its('address').should('have.property', 'rua')

  })

  it.only('invoke',()=>{
    const getValue = () => 1
    cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
  })
  });