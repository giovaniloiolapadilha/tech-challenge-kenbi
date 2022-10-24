require('dotenv').config();
const { Then } = require('@wdio/cucumber-framework');
const search = require('../pageobjects/search.page');
const menu = require('../pageobjects/menu.page');
const methods = require('./methods');
const userList = require('../pageobjects/userlist.page');

Then("show Home page", async () => {
    await expect(await menu.lstMenus).toBeExisting();
});

Then("show list {string} products", async (qtdProdutcs) => {
    await expect(await search.lstProducts).toBeElementsArrayOfSize(Number(qtdProdutcs));
});

Then("show menus {string}", async (txt) => {
    let menusExpect = txt.split(" && ");
    await expect(await menu.lstMenus).toHaveText(menusExpect);
    await browser.pause(10000);
});

Then("show message {string}", async (txt) => {
    let messages = txt.split("&&");
    for (let i = 0; i < messages.length; i++) {
        var element = await methods.getElementByText(messages[i].trim());
        await expect(await element).toBeExisting();
    }
});

Then("show product {string} with price {string}", async (product, price) => {
    await expect(await search.imgProduct).toBeExisting();
    await expect(await search.txtProductTitle).toHaveText(product);
    await expect(await search.txtProductPrice).toHaveText(price);
    await expect(await search.aProductDetails).toBeExisting();
    await expect(await search.btnProductAdd).toBeExisting();
});

Then("show User List with user {string} {string} {string} {string}", async (name, email, pass, admin) => {
    let position;
    let list = await userList.lstUsers;
    
    for (let i = 0; i < await list.length; i++) {
        if (await methods.getText(await userList.txtEmail[i]) === email) {
            position = i;
            break;
        }
    }
    await expect(await userList.txtName[position]).toHaveText(name);
    await expect(await userList.txtEmail[position]).toHaveText(email);
    await expect(await userList.txtPass[position]).toHaveText(pass);
    await expect(await userList.txtAdmin[position]).toHaveText(admin);
});
