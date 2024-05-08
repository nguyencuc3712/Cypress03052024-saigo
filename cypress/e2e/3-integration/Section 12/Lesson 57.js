const { default: HomePage } = require("../pageObjects/HomePage")

{
    //"defaultCommandTimeout": 6000,
    //"pageLoadTimeout": 10000
    Cypress.config('defaultCommandTimeout', 6000);
}

HomePage.getShopTab().click()

this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
});

productPage.checkOutButton().click()
cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click()
cy.get('input[type="submit"]').click()

//cy.get('alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element) {
    const actualText = element.text()
    expect(actualText.includes("Success")).to.be.true
})