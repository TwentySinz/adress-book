import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countIsFetchDataFromApiTrue = 0;

  onUpdateCardList(isFetchDataFromApi: boolean): void {
    if (isFetchDataFromApi){
      this.countIsFetchDataFromApiTrue++;
    }
  }
}
