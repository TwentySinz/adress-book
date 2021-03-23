import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { MatDialog } from '@angular/material/dialog';
import { AdressBookFormComponent } from '../adress-book-form/adress-book-form.component';

@Component({
  selector: 'app-adress-book-card',
  templateUrl: './adress-book-card.component.html',
  styleUrls: ['./adress-book-card.component.scss']
})
export class AdressBookCardComponent implements OnInit {
  @Input() person: Person;

  constructor(public formDialog: MatDialog) {
    this.person = new Person();
   }

  ngOnInit(): void {
  }

  openFormDialog(): void {
    const formDialogRef = this.formDialog.open(AdressBookFormComponent, {
      data: this.person
    });

    // tslint:disable-next-line: deprecation
    formDialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
