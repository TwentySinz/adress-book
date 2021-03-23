import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-adress-book-form',
  templateUrl: './adress-book-form.component.html',
  styleUrls: ['./adress-book-form.component.scss']
})
export class AdressBookFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Person) { }

  ngOnInit(): void {
  }

}
