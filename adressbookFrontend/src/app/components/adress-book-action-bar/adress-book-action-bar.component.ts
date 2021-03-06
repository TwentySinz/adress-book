import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdressBookFormComponent } from '../adress-book-form/adress-book-form.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adress-book-action-bar',
  templateUrl: './adress-book-action-bar.component.html',
  styleUrls: ['./adress-book-action-bar.component.scss']
})
export class AdressBookActionBarComponent implements OnInit {
  @Output() isFetchDataFromApi: EventEmitter<boolean>;
  @Output() keySearch: EventEmitter<string>;

  constructor(public formDialog: MatDialog) {
    this.isFetchDataFromApi = new EventEmitter();
    this.keySearch = new EventEmitter();
   }

  ngOnInit(): void {
  }

  openFormDialog(): void {
    const formDialogRef = this.formDialog.open(AdressBookFormComponent);

    // tslint:disable-next-line: deprecation
    formDialogRef.afterClosed().subscribe( result => {
      this.isFetchDataFromApi.emit(result);
    });
  }

  onChangeKeySearch(key: string): void {
    this.keySearch.emit(key);
  }
}
