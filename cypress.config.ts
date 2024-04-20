import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    fixturesFolder: 'fixtures',
    setupNodeEvents(on, config) {},
    baseUrl: `http://localhost:${process.env.PORT ?? '3000'}`,
  },
});
