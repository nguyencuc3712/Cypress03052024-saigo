describe('My Second Test Suite', function() {
    before(function() {})
    it('My FirstTest case', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
            //cy.get('form input.form-control:nth-child(1)').type("Bob")
        cy.get('input[name="name"]:nth-child(2)').type("Bob")
        cy.get('select').select("Female")
    })
})