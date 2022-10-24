const methods = require("../step-definitions/methods");

class SignupPage {

  get btnSubmit() {
    return $("//button[@type = 'submit']");
  }

  get chkAdmin() {
    return $("#administrador");
  }

  get inpEmail() {
    return $("#email");
  }

  get inpName() {
    return $("#nome");
  }

  get inpPassword() {
    return $("#password");
  }

  get txtTittlePublic() {
    return $("//h2[text() = 'Cadastro']");
  }

  get txtTittleAdminInterface() {
    return $("//h1[text() = 'Cadastro de usuários']");
  }
  
  async setSignup(name, email, password, admin) {
    if(admin == "true"){
      admin = true;
    }
    if(admin == "false"){
      admin = false;
    }
    await methods.setText(await this.inpName, name);
    await methods.setText(await this.inpEmail, email);
    await methods.setText(await this.inpPassword, password);
    
    if(admin != await this.chkAdmin.isSelected()){
      await methods.setClick(await this.chkAdmin);
    }

    await methods.setClick(await this.btnSubmit);
  }
}

module.exports = new SignupPage();