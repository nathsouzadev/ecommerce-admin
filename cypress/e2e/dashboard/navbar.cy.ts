describe('Dashboard navbar', () => {
    it('should show dashboard', async () => {
      cy.intercept('GET', `/api/store/${'test_storeId'}`, {
        store: {
          id: 'test_storeId',
          name: 'Test Store'
        }
      }).as('store');
      
      cy.signIn();
      cy.request('GET', `/api/store/${'test_storeId'}`)
        .then(() => cy.contains('Loading'))
      cy.wait('@store')
      cy.contains('Settings')
      cy.contains('Store: Test Store')
    });
  
    it('should open modal to create store', async () => {
        cy.intercept('GET', `/api/store/${'test_storeId'}`, {
            store: {
              id: 'test_storeId',
              name: 'Test Store'
            }
          }).as('store');
          
          cy.signIn();
          cy.request('GET', `/api/store/${'test_storeId'}`)
            .then(() => cy.contains('Loading'))
          cy.wait('@store')
          cy.contains('Settings')
          cy.get('button').click()
          cy.contains('Test store')
          cy.contains('Create store').click()
          cy.contains('Create a new store')
    });
  });
  