require('dotenv').config();
const {When} = require('@wdio/cucumber-framework');
const search = require('../pageobjects/search.page');
const login = require('../pageobjects/login.page');
const signup = require('../pageobjects/signup.page');
const methods = require('./methods');

When("I submit Login page values {string} {string}", async (email, password) => {
    if(await login.btnCloseAlert.isExisting()){
        await methods.setClick(await login.btnCloseAlert);
    }
    await login.setLogin(email, password);
});

When("I submit Search page value {string}", async (product) => {
    await search.setSearch(product);
});

When("I submit SignUp page values {string} {string} {string} {string}", async (name, email, password, admin) => {
    await signup.setSignup(name, email, password, admin);
});
