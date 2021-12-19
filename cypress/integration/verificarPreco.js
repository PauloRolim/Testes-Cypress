/// <reference types="cypress" />

describe('TestePreco', () => {
    it('Checando o valor do produto', () =>{
        cy.visit('https://loja.codigofonte.com.br/');
        cy.get('.js-search-form > .js-search-input').type('camiseta');
        cy.get('.desktop-search-submit').click();
        cy.get('[data-product-id="23836255"]').click();
        cy.get('#price_display').should('include.text', 'R$39,90')
        
    })
})
