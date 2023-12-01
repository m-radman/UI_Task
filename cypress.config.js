const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    tableUrl: "https://demoqa.com/webtables"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
