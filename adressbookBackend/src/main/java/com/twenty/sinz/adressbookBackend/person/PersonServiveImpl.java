package com.twenty.sinz.adressbookBackend.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PersonServiveImpl implements PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonServiveImpl(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    @Override
    public List<Person> getPersons() {
        return personRepository.findAll();
    }

    @Override
    public void addNewPerson(Person person) {
        personRepository.save(person);
    }
}
