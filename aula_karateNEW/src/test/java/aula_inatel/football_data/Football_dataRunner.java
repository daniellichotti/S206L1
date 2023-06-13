package aula_inatel.football_data;

import com.intuit.karate.junit5.Karate;

class Football_dataRunner {
    
    @Karate.Test
    Karate testPokemon() {
        return Karate.run("football_data").relativeTo(getClass());
    }    

}