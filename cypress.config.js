const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  screenshotsFolder: 'cypress/screenshots',
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: true,
  videoCompression: 32,
  pageLoadTimeout: 150000,
  videosFolder: 'cypress/videos',
  e2e: {
    // video: false,
    defaultCommandTimeout: 15000,
    watchForFileChanges: false,
    viewportWidth: 1980,
    viewportHeight: 1080,
    baseUrl: 'https://buggy.justtestit.org/',
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'cypress/reports/junit/test-results.[hash].xml',
      attachments: true,
      toConsole: true,
    },
  }
});
