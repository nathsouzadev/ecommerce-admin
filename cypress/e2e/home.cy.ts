describe('Home', () => {
  it('should register store', () => {
    cy.visit('/', {
      headers: {
        'Cookie': '__client_uat=0'
      }
    });
    cy.contains('Create store')
    cy.get('#dialog-close').click()
    cy.contains('Create store')
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
