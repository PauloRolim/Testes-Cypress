/// <reference types="cypress" />

describe('Testa se o check box está marcado', () => {
    it('realiza a busca, marca o elemento e testa', () => {
        cy.visit('https://www.portaltransparencia.gov.br/');
        cy.get('#tipoBuscaPortal').select('liquidacoes');
        cy.get('#termoBuscaPortal').type('07434866411');
        cy.get('fieldset > button').click();
        cy.get('#pagamentos').check();
        cy.get('#pagamentos').should('be.checked');
    })
})