const { default: HomePage } = require("../pageObjects/HomePage")

{
    "defaultCommandTimeout": 6000,
    "pageLoadTimeout": 10000
}

homePage.getShopTab().click()

this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
});

productPage.checkOutButton().click()
cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()