import HomePage from '../pageObjects/HomePage';
import ProductPage from '../pageObjects/ProductPage';

describe('My Second Test Suite', function() {
    let homePage;
    let productPage;

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data;
        });
        homePage = new HomePage();
        productPage = new ProductPage();
    });
    it('My FirstTest case', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
        //cy.get('form input.form-control:nth-child(1)').type("Bob")
        //cy.get('input[name="name"]:nth-child(2)').type(this.data.name)

        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');
        homePage.getShopTab().click();
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element);
        });
        //productPage.checkOutButton.click();
        productPage.checkOutButton().click();
    });
});