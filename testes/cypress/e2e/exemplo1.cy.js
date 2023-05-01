/// <reference types="cypress"/>

describe('Criando cenpario de teste para o site globalsqa', ()=>{

  it('Caso de teste: Registrando um usuário no site com sucesso', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful') // tem q ta contido
  })

  it('Caso de teste: Registrando um usuário com falha (faltando senha)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('inatel')
    cy.get('#Text1').type('inatel')
    cy.get('#username').type('inatel')
    cy.get('#password').type('inatel')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required') // unica coisa que pode ter
    //cy.get('.btn-primary').click()
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Caso de teste: Realizando login com sucesso', () => {
    let info = criarUsuario()
    loginSucesso(info[0], info[1])
    cy.get('h1.ng-binding').should('contain.text', info[0])
  })

  it('Caso de teste: Realizando login com falha', () => {
    let info = criarUsuario()
    loginSucesso(info[0], 'senhaerrada')
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
  })

})

function loginSucesso(user, senha){
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
}

function criarUsuario(){
  
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas+minutos+segundos+'Id'
  let senha = horas+minutos+segundos+'senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful') // tem q ta contido

  return userInfo
}