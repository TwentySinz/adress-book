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
                    LocalDate.of(2000, Month.JANUARY, 5)
            );
            Person mario = new Person(
                    2L,
                    "Mario",
                    "Plumber",
                    LocalDate.of(1960, Month.JANUARY, 5)
            );

            repository.saveAll(List.of(horst, mario));
        };
    }
}
