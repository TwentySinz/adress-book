import { Component, OnInit } from '@angular/core';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from '../../models/Person';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-adress-book',
  templateUrl: './adress-book.component.html',
  styleUrls: ['./adress-book.component.scss']
})
export class AdressBookComponent implements OnInit {
  persons: Person[];

  constructor(private adressBookService: AdressBookService) {
    this.persons = [];
   }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.adressBookService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
      // console.log(this.persons);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    });
  }

}
