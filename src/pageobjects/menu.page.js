class MenuPage {

  
  get aCart() {
    return $("//a[@data-testid = 'carrinho']");
  }

  get aHome() {
    return $("//a[text() = 'Home']");
  }

  get aSignUp() {
    return $("//a[@data-testid = 'cadastrar-usuarios']");
  }

  get aUserList() {
    return $("//a[@data-testid = 'listar-usuarios']");
  }

  get btnLogout() {
    return $("//button[@data-testid='logout']");
  }

  get lstMenus() {
    return $$("//li[@class = 'nav-item']");
  }
}

module.exports = new MenuPage();