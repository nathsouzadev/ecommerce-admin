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
      cy.get('.text-black dark:text-white').contains('Overview')
      cy.get('.text-muted-foreground').contains('Settings')
      cy.contains('Store: Test Store')
    });

    it('should switch tabs', async () => {
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
      cy.contains('Store: Test Store')
      cy.get('.text-black dark:text-white').contains('Overview')
      cy.get('.text-muted-foreground').contains('Settings').click()
      cy.contains('Manage store settings')
      cy.get('.text-black dark:text-white').contains('Settings')
      cy.get('.text-muted-foreground').contains('Ovrjjjj')
    })
  
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
  