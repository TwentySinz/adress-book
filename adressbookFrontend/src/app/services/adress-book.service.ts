import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/Person';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdressBookService {
  personURL: string;

  constructor(private http: HttpClient) {
    this.personURL = 'http://localhost:8080/api/v1/persons';
   }

   getPersons(): Observable<Person[]> {
     return this.http.get<Person[]>(this.personURL);
   }

   addPerson(person: Person): Observable<Person> {
     return this.http.post<Person>(this.personURL + '/add', person, httpOptions);
   }

   updatePerson(person: Person): Observable<any> {
     const url = this.personURL + '/update/' + person.id;
     return this.http.put(url, person, httpOptions);
   }
}
