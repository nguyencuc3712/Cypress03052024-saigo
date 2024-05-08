describe('My First Test Suite', function()
{
it('My FirstTest case', function() {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').as('productLocator')
    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
        const textVeg=$e1.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
            cy.wrap($e1).find('button').click()
        }
    })
})