describe('Add to Cart Feature', () => {
    it('allows a user to add a product to the cart', () => {
        // Step 1: Navigate to the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Step 2: Search for 'Cucumber' and add it to the cart
        cy.get('.search-keyword').type('cucumber');
        cy.get('.search-button').click();

        // Wait for search results to appear
        cy.wait(2000); // Example of explicit wait (not recommended practice)

        // Click the 'ADD TO CART' button for the first item
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();

        // Step 3: Open the cart
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        // Step 4: Verify that the cart contains the product
        cy.get('.product-name').should('contain', 'Cucumber');
    });
});