/// <reference types="cypress" />

describe('PrimeiroTeste', () => {
    
    it('deve fazer uma busca', () => {
        cy.visit('https://www.youtube.com/');
        //cy.viewport(1780, 860);
        cy.wait(1000);
        cy.get('#search-input').type('4k');
        cy.get('#search-icon-legacy').click();
        cy.get().find()
    });
});