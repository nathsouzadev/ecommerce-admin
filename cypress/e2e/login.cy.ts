describe('Signed out', () => {
    it('should redirect to login', () => {
        cy.visit('/dashboard', {
            headers: {
              'Cookie': '__client_uat=0'
            }
          });
        cy.url().should('include', '/sign-in');
    })
})

describe.only('Signed in', () => {
    beforeEach(async () => {
        cy.session("signed-in", () => {
          cy.signIn();
        });
      });

    it('should redirect to dashboard', async () => {
        cy.visit('/dashboard');
        cy.contains('Dashboard')
    })
})