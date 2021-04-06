import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from '../../models/Person';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.scss']
})
export class AdressBookComponent implements OnInit, OnChanges {
  @Input() countIsFetchDataFromApiTrue: number;
  @Input() keySearch: string;
  persons: Person[];

  constructor(private adressBookService: AdressBookService) {
    this.persons = [];
    this.countIsFetchDataFromApiTrue = 0;
    this.keySearch = '';
   }

  ngOnInit(): void {
    this.getPersons();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.countIsFetchDataFromApiTrue && changes.countIsFetchDataFromApiTrue.currentValue) {
      this.getPersons();
    }
    if (changes.keySearch) {
      this.searchPerson();
    }
  }

  getPersons(): void {
    // tslint:disable-next-line: deprecation
    this.adressBookService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

  onUpdateCardList(isFetchDataFromApi: boolean): void {
    if (isFetchDataFromApi) {
      this.getPersons();
    }
  }

  searchPerson(): void {
    const results: Person[] = [];
    this.persons.forEach( person => {
      const fullName: string = person.firstName + ' ' + person.lastName;
      if (fullName.toLowerCase().indexOf(this.keySearch.toLowerCase()) !== -1) {
        results.push(person);
      }
    });
    this.persons = results;
    if (results.length === 0 || !this.keySearch) {
      this.getPersons();
    }
  }
}
