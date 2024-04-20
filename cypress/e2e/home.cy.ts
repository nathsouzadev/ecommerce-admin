describe('Home', () => {
  it('should access homepage', () => {
    cy.visit('/', {
      headers: {
        'Cookie': '__client_uat=0'
      }
    });
    cy.contains('Home')
  });
});
