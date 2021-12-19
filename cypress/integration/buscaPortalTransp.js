/// <reference types="cypress" />

describe('Busca no Portal da Transparencia', () => {
    it('Teste de busca', () =>{
        cy.visit('https://www.portaltransparencia.gov.br/');
        cy.get('#termoBuscaPortal').type('07434866411');
        cy.get('fieldset > button').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .busca-portal-title-text-1 > a').click();
        cy.get('.col-sm-4 > span').should('include.text', 'PAULO');
    })
})