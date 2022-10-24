const methods = require("../step-definitions/methods");

class LoginPage {
  
  get btnCloseAlert(){
    return $("//button[@aria-label='Close']");
  }
  get btnSubmit() {
    return $("//button[@data-testid = 'entrar']");
  }

  get inpEmail() {
    return $("#email");
  }

  get inpPassword() {
    return $("#password");
  }

  async setLogin(email, password) {
    await methods.setText(this.inpEmail, email);
    await methods.setText(this.inpPassword, password);
    await methods.setClick(this.btnSubmit);
  }
}

module.exports = new LoginPage();