import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-adress-book-card',
  templateUrl: './adress-book-card.component.html',
  styleUrls: ['./adress-book-card.component.scss']
})
export class AdressBookCardComponent implements OnInit {
  @Input() person: Person;

  constructor() {
    this.person = new Person();
   }

  ngOnInit(): void {
  }

}
