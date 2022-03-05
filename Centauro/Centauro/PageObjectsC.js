const el = require('./ElementosC').ElementosC
class CentauroPo {

    acessar(){
        cy.visit(el.Web)
	cy.get(el.AceitarCookies).click()
    }

    pesquisarProduto(){
        cy.get(el.CaixaPesquisa).type('Camisa palmeiras{enter}')
    }

    selecionarProduto(){
        cy.get(el.CamisaPalmeiras).click()
    }

    adicionarProduto(){
        cy.get(el.TamanhoProduto).click()
        cy.get(el.BotaoComprar).click()
    }

    validarPaginaMeuCarrinho(){
        cy.get(el.TelaMeuCarrinho)
	.should('contain', 'MEU CARRINHO')
    }

    realizarLogin(){
        cy.get(el.UserLogin).type('exemplo@exemplo.com') //<----------- Adicionar email válido
	cy.get(el.SenhaLogin).type('exemplo')//<------ Adicionar senha do email válido
	cy.get(el.BotaoEntrar).click()

    }

 continuar(){
    cy.get(el.ContinuarCompra).click()
 }
}

export default new CentauroPo;