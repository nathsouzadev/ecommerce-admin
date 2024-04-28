describe('Dashboard page', () => {
  it('should redirected to sign-in page', async () => {
    cy.visit('/dashboard', {
      headers: {
        'Cookie': '__client_uat=0'
      }
    });
    cy.contains('Sign in')
  });

  it('should show dashboard', async () => {
    cy.intercept('GET', `/api/store/${'test_storeId'}`, {
      store: {
        id: 'test_storeId',
        name: 'Test Store'
      }
    }).as('store');
    
    cy.signIn();
    cy.contains('Create store')
    cy.request('GET', `/api/store/${'test_storeId'}`)
      .then(() => cy.contains('Loading'))
    cy.wait('@store')
    cy.contains('Dashboard')
    cy.contains('Store: Test Store')
  });

  it('should show redirect to home when store not exists', async () => {
    cy.intercept('GET', `/api/store/${'test_storeId'}`, {
      statusCode: 404,
      message: 'Store not found',
    }).as('store');
    
    cy.signIn();
    cy.contains('Create store')
    cy.request('GET', `/api/store/${'test_storeId'}`)
      .then(() => cy.contains('Loading'))
    cy.wait('@store')
    cy.contains('Create store')
  });
});
