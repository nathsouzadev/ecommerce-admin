const login = () => cy.visit('/', {
  headers: {
    'Cookie': '__client_uat=0'
  }
});

describe('Home', () => {
  beforeEach(() => login())
  it('should register store', async () => {
    cy.contains('Create store')
    cy.get('#dialog-close').click()
    cy.contains('Create store')
    cy.get('input').type('Test Store')
    cy.get("[type='submit']").click()
    cy.request('POST', '/api/store')
      .then(() => cy.contains("[type='submit']").should('be.disabled'))
  });

  it('should show error if request fail', async () => {
    cy.intercept('POST', '/api/store', {
      statusCode: 500,
    }).as('store');
    
    cy.contains('Create store')
    cy.get('#dialog-close').click()
    cy.contains('Create store')
    cy.get('input').type('Test Store')
    cy.get("[type='submit']").click()
    cy.wait('@store')
    cy.contains('Something went wrong. Please try again.')
  });

  it('should show error message if store name is empty', async () => {
    cy.contains('Create store')
    cy.get("[type='submit']").click()
    cy.contains('String must contain at least 1 character(s)')
  });

  it('should redirect to dashboard if user have store', async () => {
    cy.intercept('GET', '/api/store', {
      statusCode: 200,
      body: {
        store: {
          id: 'test_storeId',
          userId: 'user_123',
          name: 'Test Store',
          createdAt: '2021-09-01T00:00:00.000Z',
          updatedAt: '2021-09-01T00:00:00.000Z',
        },
      }
    }).as('store');

    cy.signIn();
    cy.contains('Loading')
    cy.wait('@store')
    cy.url().should('include', '/test_storeId')
  })
});
