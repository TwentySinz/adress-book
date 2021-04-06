import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countIsFetchDataFromApiTrue = 0;
  keySearch = '';

  onUpdateCardList(isFetchDataFromApi: boolean): void {
    if (isFetchDataFromApi){
      this.countIsFetchDataFromApiTrue++;
    }
  }

  onChangeKeySearch(key: string): void {
    this.keySearch = key;
  }
}

