package com.twenty.sinz.adressbookBackend.person;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class PersonServiveImpl implements PersonService {
    @Override
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
