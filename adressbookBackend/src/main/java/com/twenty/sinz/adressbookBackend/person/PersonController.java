package com.twenty.sinz.adressbookBackend.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/persons")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public ResponseEntity<List<Person>> getPersons() {
        List<Person> persons = personService.getPersons();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }

    @PostMapping(path = "/add")
    public ResponseEntity<Person> addNewPerson(@RequestBody Person person) {
        Person newPerson = personService.addNewPerson(person);
        return new ResponseEntity<>(newPerson, HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{personId}")
    public ResponseEntity<?> deletePerson(@PathVariable("personId") Long personId) {
        personService.deletePerson(personId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(path = "/update/{personId}")
    public ResponseEntity<Person> updatePerson(@PathVariable("personId") Long personId, @RequestBody Person person) {
        Person personUpdated = personService.updatePerson(personId, person);
        return new ResponseEntity<>(personUpdated, HttpStatus.OK);
    }
}
