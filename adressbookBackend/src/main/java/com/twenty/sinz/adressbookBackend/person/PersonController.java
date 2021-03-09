package com.twenty.sinz.adressbookBackend.person;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/persons")
public class PersonController {

    @GetMapping
    public List<Person> getPersons() {
        return List.of(
                new Person(1L,
                        "Horst",
                        "Worst",
                        LocalDate.of(2000, Month.JANUARY, 5),
                        21)
        );
    }
}
