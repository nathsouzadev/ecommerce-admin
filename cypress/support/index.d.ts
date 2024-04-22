import { Clerk } from '@clerk/types';

declare global {
  namespace Cypress {
    export interface Chainable {
      signOut(): Chainable<void>
      signIn(): Chainable<void>
    }
    interface Window {
      Clerk: Clerk
    }
  }
}
