package com.twenty.sinz.adressbookBackend.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.Objects;

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
    public Person addNewPerson(Person person) {
        return personRepository.save(person);
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

    @Override
    @Transactional
    public Person updatePerson(Long personId, Person person) {
        Person personToUpdate = personRepository.findById(personId).orElseThrow(() -> new IllegalStateException(
                "person with id " + personId + " does not exist"
        ));

        if (person.getFirstName() != null && !Objects.equals(personToUpdate.getFirstName(), person.getFirstName())) {
            personToUpdate.setFirstName(person.getFirstName());
        }

        if (person.getLastName() != null && !Objects.equals(personToUpdate.getLastName(), person.getLastName())) {
            personToUpdate.setLastName(person.getLastName());
        }

        if (person.getPhonePrivate() != null && !Objects.equals(personToUpdate.getPhonePrivate(), person.getPhonePrivate())) {
            personToUpdate.setPhonePrivate(person.getPhonePrivate());
        }

        if (person.getPhoneBusiness() != null && !Objects.equals(personToUpdate.getPhoneBusiness(), person.getPhoneBusiness())) {
            personToUpdate.setPhoneBusiness(person.getPhoneBusiness());
        }

        if (person.getEmail() != null && !Objects.equals(personToUpdate.getEmail(), person.getEmail())) {
            personToUpdate.setEmail(person.getEmail());
        }

        if (person.getStreet() != null && !Objects.equals(personToUpdate.getStreet(), person.getStreet())) {
            personToUpdate.setStreet(person.getStreet());
        }

        if (person.getHouseNumber() != null && !Objects.equals(personToUpdate.getHouseNumber(), person.getHouseNumber())) {
            personToUpdate.setHouseNumber(person.getHouseNumber());
        }

        if (person.getPostCode() != null && !Objects.equals(personToUpdate.getPostCode(), person.getPostCode())) {
            personToUpdate.setPostCode(person.getPostCode());
        }

        if (person.getCity() != null && !Objects.equals(personToUpdate.getCity(), person.getCity())) {
            personToUpdate.setCity(person.getCity());
        }

        if (person.getCountry() != null && !Objects.equals(personToUpdate.getCountry(), person.getCountry())) {
            personToUpdate.setCountry(person.getCountry());
        }

        if (person.getAvatarURL() != null && !Objects.equals(personToUpdate.getAvatarURL(), person.getAvatarURL())) {
            personToUpdate.setAvatarURL(person.getAvatarURL());
        }

        return personToUpdate;
    }
}
