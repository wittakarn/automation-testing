describe('example.cypress.io', () => {
  it('should visit example.cypress.io', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('focus');
  })
})