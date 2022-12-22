const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})
/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ycxi65',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
*/