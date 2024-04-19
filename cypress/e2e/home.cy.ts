describe('Home', () => {
  it('should access homepage', () => {
    cy.visit('/');
    cy.contains('Admin dashboard')
  });
});
