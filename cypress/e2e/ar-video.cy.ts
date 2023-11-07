describe('sign-up ar-video', () => {
  it('should visit ar video', () => {
    cy.visit('https://thaisoftplus.com/ar/profile/#/sign-up')
  });

  it('should not able to sign-up without fill all information', () => {
    cy.visit('https://thaisoftplus.com/ar/profile/#/sign-up');
    cy.get('#firstName').type('first-name');
    cy.get('button[type="submit"]').click();

    cy.get('input:invalid').should('have.length', 2)
  });

  it('should not able to sign-up without fill a proper email format', () => {
    cy.visit('https://thaisoftplus.com/ar/profile/#/sign-up');
    cy.get('#firstName').type('first-name');
    cy.get('#lastName').type('last-name');
    cy.get('#email').type('email');
    cy.get('button[type="submit"]').click();

    cy.get('input:invalid').should('have.length', 1)
  });
})