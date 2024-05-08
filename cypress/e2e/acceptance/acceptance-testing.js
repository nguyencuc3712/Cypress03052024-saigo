describe('Product Purchase Acceptance Test', () => {
    it('checks that a user can search for a product, add it to the cart, and verify the cart contents', () => {
        // Step 1: Navigate to the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Step 2: Search for 'banana' and add it to the cart
        cy.get('.search-keyword').type('banana');
        cy.get('.search-button').click();

        // Ensure that the product list is visible and contains elements
        cy.get('.products').should('be.visible');
        cy.get('.product:visible').should('have.length.greaterThan', 0);

        // Click the 'ADD TO CART' button for the first visible product
        cy.get('.product:visible').first().contains('ADD TO CART').click();

        // Step 3: Navigate to the cart
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        // Step 4: Verify the item in the cart
        cy.get('.product-name').should('contain', 'Banana');
    });
});