describe('Simple System Test', () => {
    it('should add a single item to the cart and check the cart contents', () => {
        // Step 1: Navigate to the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Step 2: Search for 'apple' and add it to the cart
        cy.get('.search-keyword').type('apple');
        cy.get('.search-button').click();

        // Wait for the results to load and verify at least one item is displayed
        cy.get('.product').should('have.length.at.least', 1);

        // Click the 'ADD TO CART' button for the first found item
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();

        // Step 3: Navigate to the cart
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        // Verify the item in the cart
        cy.get('.product-name').should('contain', 'Apple');
    });
});