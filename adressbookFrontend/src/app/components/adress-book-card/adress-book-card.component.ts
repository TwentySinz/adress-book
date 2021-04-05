import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() isFetchDataFromApi: EventEmitter<boolean>;

  constructor(public formDialog: MatDialog) {
    this.person = new Person();
    this.isFetchDataFromApi = new EventEmitter();
   }

  ngOnInit(): void {
  }

  openFormDialog(): void {
    const formDialogRef = this.formDialog.open(AdressBookFormComponent, {
      data: this.person
    });

    // tslint:disable-next-line: deprecation
    formDialogRef.afterClosed().subscribe( result => {
      this.isFetchDataFromApi.emit(result);
    });
  }

}
