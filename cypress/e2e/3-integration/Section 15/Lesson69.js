import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

describe("My Second Test Suite", function() {

            before(function() {

                cy.fixture('example').then(function(data) {
                    this.data = data
                })

            })

            it('My FirstTest case', function() {
                const homePage = new HomePage()
                const productPage = new ProductPage()
                cy.visit(Cypress.env('url') + "/angularpractice/")

                homePage.getEditBox().type(this.data.name)
                homePage.getGender().select(this.data.gender)
                homePage.getTwoWayDataBinding().should('have.value', this.data.name)
                homePage.getEditBox().should('have.attr', 'minlength', '2')
                homePage.getEntrepreneaur().should('be.disabled')
                Cypress.config('defaultCommandTimeout', 8000)
                homePage.getShopTab().click()
            })
        }