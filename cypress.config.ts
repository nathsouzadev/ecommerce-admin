import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    fixturesFolder: 'fixtures',
    setupNodeEvents(on, config) {},
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  },
});
