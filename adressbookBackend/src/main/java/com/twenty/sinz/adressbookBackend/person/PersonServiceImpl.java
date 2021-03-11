package com.twenty.sinz.adressbookBackend.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonServiceImpl(PersonRepository personRepository) {
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

    @Override
    public void deletePerson(Long personId){
        boolean exists = personRepository.existsById(personId);
        if (!exists) {
            throw new IllegalStateException(
                    "person with id " + personId + " does not exist"
            );
        }
        personRepository.deleteById(personId);
    }
}
