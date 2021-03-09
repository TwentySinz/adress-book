package com.twenty.sinz.adressbookBackend;

import com.twenty.sinz.adressbookBackend.person.Person;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@SpringBootApplication
@RestController
public class AdressbookBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdressbookBackendApplication.class, args);
	}

	@GetMapping
	public List<Person> hello() {
		return List.of(
		        new Person(1L,
                        "Horst",
                        "Worst",
                        LocalDate.of(2000, Month.JANUARY, 5),
                        21)
        );
	}

}
