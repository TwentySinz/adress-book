package com.twenty.sinz.adressbookBackend.person;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PersonService {
    public List<Person> getPersons();
    public void addNewPerson(Person person);
}
