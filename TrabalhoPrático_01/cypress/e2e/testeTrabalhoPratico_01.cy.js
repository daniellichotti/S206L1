/// <reference types="cypress"/>git

describe('Criando cenario de teste para o site demoblaze', ()=>{

  it('Caso de teste 01: Adicionando um item ao carrinho com sucesso', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.success > :nth-child(2)').should('contain.text', 'Samsung galaxy s6')
  });

  it('Caso de teste 02: Zerando o carrinho com sucesso', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('#totalp').should('contain.text', '')
  });

  it('Caso de teste 03: Verificando o preço total do carrinho com sucesso', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#nava').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('#totalp').should('contain.text', '1180')

  });

  it('Caso de teste 04: Verificando se ao tirar um produto, o preço total do carrinho diminui', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#nava').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()
    cy.get('#totalp').should('contain.text', '820')

  });

  it('Caso de teste 05: Verificando o botao de compra do carrinho', () => {

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('.col-lg-1 > .btn').click
    cy.get('.col-lg-1 > .btn').should('have.text', 'Place Order')
  });
  

  it('Caso de teste 06 (Teste negativo): Carrinho deveria iniciar vazio mas depois de alguns segundos ele enche de produtos', () => {

    cy.visit('https://www.demoblaze.com/cart.html#')
    cy.wait(20000)
    cy.get('#totalp').should('not.equal', '')

  });
  
})