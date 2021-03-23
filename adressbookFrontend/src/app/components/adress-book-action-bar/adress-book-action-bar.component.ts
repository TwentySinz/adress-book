import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdressBookFormComponent } from '../adress-book-form/adress-book-form.component';

@Component({
  selector: 'app-adress-book-action-bar',
  templateUrl: './adress-book-action-bar.component.html',
  styleUrls: ['./adress-book-action-bar.component.scss']
})
export class AdressBookActionBarComponent implements OnInit {

  constructor(public formDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openFormDialog(): void {
    const formDialogRef = this.formDialog.open(AdressBookFormComponent);

    // tslint:disable-next-line: deprecation
    formDialogRef.afterClosed().subscribe( result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
