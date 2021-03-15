import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class AdressBookService {
  personURL: string;

  constructor(private http: HttpClient) {
    this.personURL = 'http://localhost:8080/api/v1/persons';
   }

   getPersons(): Observable<Person[]> {
     return this.http.get<Person[]>('http://localhost:8080/api/v1/persons');
   }
}
