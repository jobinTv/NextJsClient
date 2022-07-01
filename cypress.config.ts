import { defineConfig } from "cypress"; //eslint-disable-line

export default defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    // },
    baseUrl: 'http://localhost:3000'
  },
});
