import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    fixturesFolder: 'fixtures',
    setupNodeEvents(on, config) {},
    baseUrl: process.env.CYPRESS_URL ?? 'http://localhost:3000',
  },
});
