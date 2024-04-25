describe('Home', () => {
  it('should register store', async () => {
    cy.visit('/', {
      headers: {
        'Cookie': '__client_uat=0'
      }
    });
    cy.contains('Create store')
    cy.get('#dialog-close').click()
    cy.contains('Create store')
    cy.get('input').type('Test Store')
    cy.get("[type='submit']").click()
    cy.request('POST', '/api/store')
      .then(() => cy.contains("[type='submit']").should('be.disabled'))
  });

  it('should show error message if store name is empty', () => {
    cy.visit('/', {
      headers: {
        'Cookie': '__client_uat=0'
      }
    });
    cy.contains('Create store')
    cy.get("[type='submit']").click()
    cy.contains('String must contain at least 1 character(s)')
  });
});
