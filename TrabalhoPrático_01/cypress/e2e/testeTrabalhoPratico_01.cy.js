/// <reference types="cypress"/>

describe('Criando cenario de teste para o site demoblaze', ()=>{
  
  let info = criarUsuario()

  it.skip('Caso de teste 01: Adicionando um item ao carrinho com sucesso', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.success > :nth-child(2)').should('contain.text', 'Samsung galaxy s6')
  });

  it.skip('Caso de teste 02: Removendo um item ao carrinho com sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('#totalp').should('contain.text', '')
  });

  it.skip('Caso de teste 03: Registrando um usuário no site com sucesso', () => {

  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#signin2').click()
  cy.get('#sign-username').type(info[0])
  cy.get('#sign-password').type(info[1])
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('#login2').click()
  cy.get('#loginusername').type(info[0])
  cy.get('#loginpassword').type(info[1])
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.get('#nameofuser').should('contain.text', 'Welcome')
  })

  it.skip('Caso de teste 04: Deslogando um usuário com sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').type(info[0])
    cy.get('#loginpassword').type(info[1])
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logout2').click()
    cy.get('#login2').should('contain.text', 'Log in')
  });

  it.skip('Caso de teste 05: Verificando o preço total do carrinho com sucesso', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#nava').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('#totalp').should('contain.text', '1180')

  });

  it('Caso de teste 06 (Teste negativo): Carrinho deveria iniciar vazio mas depois de alguns segundos ele enche de produtos', () => {

    cy.visit('https://www.demoblaze.com/cart.html#')
    cy.wait(20000)
    cy.get('#totalp').should('not.equal', '')

  });
  
})



function criarUsuario(){
  
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas+minutos+segundos+'Id'
  let senha = horas+minutos+segundos+'senha'
  let userInfo = [user, senha]

  return userInfo
}