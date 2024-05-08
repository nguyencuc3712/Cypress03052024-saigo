/// <reference types="Cypress" />

describe('My FirstTest case', function() {

    it('My FirstTest case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})