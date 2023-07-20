describe('visit home', () => {
  it('should be able visit the home page', () => {
    cy.visit('/')
    cy.dataCy('Acessar como visitante').click()
    cy.url().should('include', '/home')
  })
})
