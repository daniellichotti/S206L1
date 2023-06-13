Feature: Testando resources da API football-data.org.

Background: Executa antes de cada teste
    * def url_base = 'http://api.football-data.org/v4/'

Scenario: Pegando elementos do array de response e testando seu tipo
    Given url url_base
    And path '/areas'
    When method get
    Then status 200
    And match $['areas'] == '#[]'

Scenario: Verificando se a contagem dos paises é 272
    Given url url_base
    And path '/areas'
    When method get
    Then status 200
    And match $['areas'] == '#[272]'

Scenario: Testando o tipo de área
    Given url url_base
    And path '/areas'
    When method get
    Then status 200
    And match $['areas'] == '#[]'
    And match each $['areas'] contains {name: '#string', parentAreaId:'#number'}

Scenario: Verificando se a área 2000 é o Afeganistão e verificando o tipo parentAreaId
    Given url url_base
    And path '/areas/2000'
    When method get
    Then status 200
    And match $ contains {name: 'Afghanistan', parentAreaId:'#number'}

Scenario: Negativo Validar entrada inválida
    Given url url_base
    And path 'teste'
    When method get
    Then status 404

Scenario: Validar um item inválido
    Given url url_base
    And path '/areas/2000'
    When method get
    Then status 200
    And match $ contains {name: 'teste'}
    Then status 404

