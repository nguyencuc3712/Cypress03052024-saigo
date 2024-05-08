describe('My Second Test Suite', function() {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    it('My FirstTest case', function() {
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
            //cy.get('form input.form-control:nth-child(1)').type("Bob")
        cy.get('input[name="name"]:nth-child(1)').type(this.data.name)
        cy.get('select').select(this.data.gender)
    })
})