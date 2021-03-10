package com.twenty.sinz.adressbookBackend.person;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity(name = "Person")
@Table(name = "person")
public class Person {

    @Id
    @SequenceGenerator(
            name = "person_sequence",
            sequenceName = "person_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "person_sequence"
    )
    @Column(
            name = "id",
            updatable = false
    )
    private Long id;

    @Column(
            name= "first_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String firstName;

    @Column(
            name= "last_name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String lastName;

    @Column(
            name= "date_of_birth",
            nullable = false
    )
    private LocalDate dateOfBirth;

    @Column(
            name= "phone_private",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String phonePrivate;

    @Column(
            name= "phone_business",
            columnDefinition = "TEXT"
    )
    private String phoneBusiness;

    @Column(
            name= "email",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String email;

    @Column(
            name= "street",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String street;

    @Column(
            name= "house_number",
            nullable = false
    )
    private Integer houseNumber;

    @Column(
            name= "post_code",
            nullable = false
    )
    private Integer postCode;

    @Column(
            name= "city",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String city;

    @Column(
            name= "country",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String country;

    @Column(
            name= "avatar_url",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String avatarURL;

    @Transient
    private Integer age;

    public Person() {
    }

    public Person(Long id,
                  String firstName,
                  String lastName,
                  LocalDate dateOfBirth,
                  String phonePrivate,
                  String phoneBusiness,
                  String email,
                  String street,
                  Integer houseNumber,
                  Integer postCode,
                  String city,
                  String country,
                  String avatarURL) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phonePrivate = phonePrivate;
        this.phoneBusiness = phoneBusiness;
        this.email = email;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postCode = postCode;
        this.city = city;
        this.country = country;
        this.avatarURL = avatarURL;
    }

    public Person(String firstName,
                  String lastName,
                  LocalDate dateOfBirth,
                  String phonePrivate,
                  String phoneBusiness,
                  String email,
                  String street,
                  Integer houseNumber,
                  Integer postCode,
                  String city,
                  String country,
                  String avatarURL) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.phonePrivate = phonePrivate;
        this.phoneBusiness = phoneBusiness;
        this.email = email;
        this.street = street;
        this.houseNumber = houseNumber;
        this.postCode = postCode;
        this.city = city;
        this.country = country;
        this.avatarURL = avatarURL;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getAge() {
        return Period.between(this.dateOfBirth, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPhonePrivate() {
        return phonePrivate;
    }

    public void setPhonePrivate(String phonePrivate) {
        this.phonePrivate = phonePrivate;
    }

    public String getPhoneBusiness() {
        return phoneBusiness;
    }

    public void setPhoneBusiness(String phoneBusiness) {
        this.phoneBusiness = phoneBusiness;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(Integer houseNumber) {
        this.houseNumber = houseNumber;
    }

    public Integer getPostCode() {
        return postCode;
    }

    public void setPostCode(Integer postCode) {
        this.postCode = postCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getAvatarURL() {
        return avatarURL;
    }

    public void setAvatarURL(String avatarURL) {
        this.avatarURL = avatarURL;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", phonePrivate='" + phonePrivate + '\'' +
                ", phoneBusiness='" + phoneBusiness + '\'' +
                ", email='" + email + '\'' +
                ", street='" + street + '\'' +
                ", houseNumber=" + houseNumber +
                ", postCode=" + postCode +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", avatarURL='" + avatarURL + '\'' +
                ", age=" + age +
                '}';
    }
}
