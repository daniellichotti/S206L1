Feature: Testando API Pokemon.

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando retorno .
        Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
        When method get
        Then status 200

Scenario: Testando retorno people/1/ com informações inválidas.
        Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
        When method get
        Then status 404
        
Scenario: Testando retorno pikachu e verificando o JSON.
    Given url url_base
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25

Scenario: Testando retorno charizard e verificando o JSON.
    Given url url_base
    And path '/pokemon/charizard'
    When method get
    Then status 200
    And match response.name == "charizard"
    And match response.id == 6


Scenario: Testando retorno pokemon Red e entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path '/version/1/'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7

Scenario: Testando retorno pokemon Red e entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path '/version/1/'
    When method get
    Then status 200
    And def idioma = $.names[3].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "fr"
    And match response.id == 5