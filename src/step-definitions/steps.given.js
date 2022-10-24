require('dotenv').config();
const { Given, When } = require('@wdio/cucumber-framework');
const search = require('../pageobjects/search.page');
const login = require('../pageobjects/login.page');
const menu = require('../pageobjects/menu.page');
const methods = require('./methods');
const signup = require('../pageobjects/signup.page');
const userList = require('../pageobjects/userlist.page');

Given("I am logged in with user {string}", async (typeUser) => {
    await browser.pause(3000);
    if (typeUser === "admin") {
        var userListExist = await menu.aUserList.isExisting();

        if (!(await userListExist)) {
            if (await menu.btnLogout.isExisting()) {
                await methods.setClick(await menu.btnLogout);
            }
            await browser.url(process.env.URL_BASE);
            await login.setLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASS);
        }
    } else {
        var cartExist = await menu.aCart.isExisting();

        if (!(await cartExist)) {
            if (await menu.btnLogout.isExisting()) {
                await methods.setClick(await menu.btnLogout);
            }
            await browser.url(process.env.URL_BASE);
            await login.setLogin(process.env.NO_ADMIN_EMAIL, process.env.NO_ADMIN_PASS);
        }
    }


    // if (!(await menu.btnLogout.isExisting())) {
    //     var email = process.env.NO_ADMIN_EMAIL;
    //     var pass = process.env.NO_ADMIN_PASS;

    //     if (typeUser === "admin") {
    //         var email = process.env.ADMIN_EMAIL;
    //         var pass = process.env.ADMIN_PASS;
    //     }

    //     await browser.url(process.env.URL_BASE);
    //     await login.setLogin(email, pass);
    // }
});

Given("I have only user {string} registered", async (email) => {
    await login.setLogin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASS);
    await methods.setClick(await menu.aUserList);
    await userList.deleteUsersDifferentBy(email);
});

Given("I am on Home Page", async () => {
    if (!(await search.txtProducts.isExisting())) {
        await methods.setClick(await menu.aHome);
    }
});

Given("I am on Login Page", async () => {
    if (!(await login.btnSubmit.isExisting())) {
        await methods.setClick(await menu.btnLogout);
    }
});

Given("I am on SignUp Public page", async () => {
    var txtTitle = await signup.txtTittlePublic;
    var btnLogout = await menu.btnLogout;

    if (!(await txtTitle.isExisting())) {
        if (await btnLogout.isExisting()) {
            await methods.setClick(await btnLogout);
        }
        await browser.url(process.env.URL_SIGNUP);
    }
});

Given("I am on Sign Up Private page", async () => {
    if (!(await signup.txtTittleAdminInterface.isExisting())) {
        await methods.setClick(await menu.aSignUp);
    }
});

Given("I am on User List page", async () => {
    if (!(await userList.txtTitle.isExisting())) {
        await methods.setClick(await menu.aUserList);
    }
});