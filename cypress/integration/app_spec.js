describe('My First Test', () => {
    it('Verifies Hello Cypress Shows', () => {
        cy.visit('http://localhost:8080')
        cy.contains('Hello Cypress')
    })
  })