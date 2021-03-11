package com.twenty.sinz.adressbookBackend.person;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PersonService {
    public List<Person> getPersons();
    public Person addNewPerson(Person person);
    public void deletePerson(Long personId);
    public Person updatePerson(Long personId, Person person);
}
