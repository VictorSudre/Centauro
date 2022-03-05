import CentauroPo from './PageObjectsC'


// Cenário 1 :

Given(/^que eu acesse a aplicação web da Centauro$/, () => {
	CentauroPo.acessar()
    
});

And(/^realize a busca pelo produto desejado$/, () => {
	CentauroPo.pesquisarProduto()
	CentauroPo.selecionarProduto()
});

When(/^eu acionar o botão "([^"]*)"$/, (args1) => {
    CentauroPo.adicionarProduto()
});

And(/^ser redirecionado para página "([^"]*)"$/, (args1) => {
	CentauroPo.validarPaginaMeuCarrinho()
});


And(/^clicar no botão continuar$/, () => {
	CentauroPo.continuar()
});

Then(/^devo preencher meus dados de login$/, () => {
	CentauroPo.realizarLogin()

});

And(/^finalizar minha compra$/, () => {
	return true; //<------------------------ Continuar script
});

