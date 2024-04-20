import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    fixturesFolder: 'fixtures',
    setupNodeEvents(on, config) {},
    baseUrl: Cypress.env('NEXT_PUBLIC_APP_URL'),
  },
});
