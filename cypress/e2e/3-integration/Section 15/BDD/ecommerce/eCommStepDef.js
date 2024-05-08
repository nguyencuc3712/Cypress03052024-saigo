import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()
const productPage = new ProductPage()
Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to Cart ', () => {
    homePage.getShopTab().click()
    this.data.productName.forEach(function(element) {
        cy.selectProduct(element)
    });
    productPage.checkOutButton().click()
})

AnalyserNode('Validate the total prices', () = )