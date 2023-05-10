# S206L1
Repositório da matéria de S206 - Qualidade de software - 28-09-22

Como executar o projeto? 
O projeto se encontra na pasta TrabalhoPrático_01 onde é necessário rodar dentro da pasta o comando:
```
./node_modules/.bin/cypress open
```
Escolher a opção E2E Testing, o navegador de sua preferência e clicar em start.
Com o navegador aberto pelo cypress escolher testeTrabalhoPratico_01 e os testes irão começar a rodar.

Como obter o relatóriode testes?
Podemos rodar os testes e gerar o relatório com o comando:
```
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
```
O relatório será salvo em formato .html na pasta chamada 'reports', criada dentro da pasta 'cypress'
