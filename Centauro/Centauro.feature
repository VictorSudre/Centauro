#language: pt

#Objetivo
Funcionalidade: Validar fluxo de venda  E2E - Centauro

#Cenário a ser testado
Cenario: Validar fluxo de venda E2E - Centauro
#Comportamentos
Dado que eu acesse a aplicação web da Centauro
E realize a busca pelo produto desejado
Quando eu acionar o botão "comprar"
E ser redirecionado para página "Meu carrinho"
E clicar no botão continuar
Entao devo preencher meus dados de login
E finalizar minha compra
 
 #Dado = Given 
 #E = And 
 #Quando = When
 #Entao = Then
 