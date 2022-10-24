const methods = require("../step-definitions/methods");

class SearchPage {

    get aProductDetails(){
        return $(".card-link");
    }

    get btnProductAdd(){
        return $("//button[@data-testid='adicionarNaLista']");
    }

    get btnSearch() {
        return $("//button[@data-testid = 'botaoPesquisar']");
    }

    get imgProduct(){
        return $("//div[@class = 'card-body']//img[@class = 'imagem']");
    }
    
    get inpSearch() {
        return $("//input[@data-testid = 'pesquisar']");
    }

    get lstProducts(){
        return $$(".card.col-3");
    }

    get txtProductPrice(){
        return $("//div[@class = 'card-body']/h6[@class = 'card-subtitle mb-2 text-muted']");
    }

    get txtProducts() {
        return $("//h4[text() = 'Produtos']");
    }

    get txtProductTitle(){
        return $("//div[@class = 'card-body']/h5[@class = 'card-title negrito']");
    }
   
    async setSearch(txt) {
        await methods.setText(this.inpSearch, txt);
        await methods.setClick(this.btnSearch);
    }
}

module.exports = new SearchPage();