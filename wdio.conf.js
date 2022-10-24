exports.config = {
    specs: [
        './src/features/*.feature'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [
        // {
        //     browserName: 'firefox',
        //     acceptInsecureCerts: true
        // },
        {
            browserName: 'chrome',
            acceptInsecureCerts: true
        },
    ],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'geckodriver'],
    framework: 'cucumber',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    cucumberOpts: {
        require: ['./src/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
