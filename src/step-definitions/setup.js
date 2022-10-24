require('dotenv').config();
const {BeforeAll} = require('@wdio/cucumber-framework');

BeforeAll(async () => {
    await browser.setTimeout({
        'pageLoad': 10000,
        'script': 60000,
        'implicit': 3000
    });
    await browser.url(process.env.URL_BASE);
    await browser.maximizeWindow();
});

