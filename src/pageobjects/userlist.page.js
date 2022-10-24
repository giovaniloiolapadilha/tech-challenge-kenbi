const methods = require("../step-definitions/methods");

class UserListPage {

  get btnDelete() {
    return $$("//button[text() = 'Excluir']");
  }

  get lstUsers() {
    return $$("//tbody/tr");
  }
  
  get txtAdmin() {
    return $$("//td[4]");
  }
  
  get txtEmail() {
    return $$("//td[2]");
  }
  
  get txtName() {
    return $$("//td[1]");
  }
  
  get txtPass() {
    return $$("//td[3]");
  }
  
  get txtTitle() {
    return $("//h1[text() = 'Lista dos usuários']");
  }
  

  async deleteUsersDifferentBy(email) {
    for (let i = 0; i < await this.lstUsers.length; i++) {
      let txtCurrentEmail = await methods.getText(this.txtEmail[i]);
      if (txtCurrentEmail != email) {
        await methods.setClick(await this.btnDelete[i]);
      }
    }
  }
}

module.exports = new UserListPage();