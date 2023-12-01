const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://demoqa.com/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: [
      "securepubads.g.doubleclick.net",
    ],
  },
  chromeWebSecurity: true
});
