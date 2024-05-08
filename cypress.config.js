const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    return config;
}

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: ["cypress/e2e/3-integration/example/*.js",
            "cypress/e2e/1-getting-started/*.js",
            "cypress/e2e/2-advanced-examples/*.js",
            "cypress/e2e/3-integration/Section 5/*.js",
            "cypress/e2e/3-integration/Section 6/*.js",
            "cypress/e2e/3-integration/Section 7/*.js",
            "cypress/e2e/3-integration/Section 8/*.js",
            "cypress/e2e/3-integration/Section 9/*.js",
            "cypress/e2e/3-integration/Section 10/*.js",
            "cypress/e2e/3-integration/Section 11/*.js",
            "cypress/e2e/3-integration/Section 12/*.js",
            "cypress/e2e/3-integration/Section 13/*.js",
            "cypress/e2e/3-integration/Section 14/*.js",
            "cypress/e2e/3-integration/Section 15/*.js",
            "cypress/e2e/3-integration/Section 15/BDD/*.feature",
            "cypress/e2e/unit-testing/*.js",
            "cypress/e2e/integration/*.js",
            "cypress/e2e/system-testing/*.js",
            "cypress/e2e/acceptance/*.js",
        ]
    },
});