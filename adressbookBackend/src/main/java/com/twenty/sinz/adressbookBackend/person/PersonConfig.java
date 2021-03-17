package com.twenty.sinz.adressbookBackend.person;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class PersonConfig {

    @Bean
    CommandLineRunner commandLineRunner(PersonRepository repository) {
        return args -> {
            Person horst = new Person(
                    1L,
                    "Horst",
                    "Worst",
                    LocalDate.of(2000, Month.JANUARY, 5),
                    "0123456789",
                    "",
                    "horst@adressbook.com",
                    "Worststraße",
                    18,
                    10123,
                    "Berlin",
                    "Germany",
                    "male.png"
            );
            Person mario = new Person(
                    2L,
                    "Mario",
                    "Plumber",
                    LocalDate.of(1960, Month.JANUARY, 5),
                    "01234567",
                    "012345",
                    "mario@adressbook.com",
                    "Klempner Allee",
                    19,
                    92418,
                    "Nürnberg",
                    "Germany",
                    "male.png"
            );
            Person horstine = new Person(
                    3L,
                    "Horstine",
                    "Worstine",
                    LocalDate.of(1991, Month.JANUARY, 5),
                    "01234567",
                    "012345",
                    "horstine@adressbook.com",
                    "Worst Allee",
                    21,
                    92418,
                    "Nürnberg",
                    "Germany",
                    "female.png"
            );

            repository.saveAll(List.of(horst, mario, horstine));
        };
    }
}
