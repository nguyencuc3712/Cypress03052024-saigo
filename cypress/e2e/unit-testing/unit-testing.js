describe('Product Search Test', () => {
    it('Should search for a product and display the correct results', () => {
        // Step 1: Visit the website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Step 2: Type 'carrot' into the search box and press enter
        cy.get('.search-keyword').type('carrot');
        cy.get('.search-button').click();

        // Step 3: Check if the product results include 'Carrot'
        // We wait for 2 seconds to ensure the items have loaded (could also use cy.wait() with a specific request to complete)
        cy.wait(2000); // This is not the best practice. Prefer waiting for network calls to finish.
        cy.get('.products').find('.product').should('have.length.at.least', 1);
        cy.get('.product-name').first().should('contain', 'Carrot');

        // Step 4: Optionally, you can check for the visibility of the product image
        cy.get('.products .product:visible').first().within(() => {
            cy.get('img').should('be.visible');
            cy.get('.product-name').should('contain', 'Carrot');
        });
    });
});