/// <reference types="Cypress"/>

describe('App' , () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000');
    });

    it('Should show title', () => {
        cy.get('#header').should('have.text', 'Users');
    });
});

export {};