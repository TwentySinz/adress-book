import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isFetchDataFromApi: EventEmitter<boolean>;
  @Output() keySearch: EventEmitter<string>;
  title: string;

  constructor() {
    this.title = 'Adress Book';
    this.isFetchDataFromApi = new EventEmitter();
    this.keySearch = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onUpdateCardList(isFetchDataFromApi: boolean): void {
    this.isFetchDataFromApi.emit(isFetchDataFromApi);
  }

  onChangeKeySearch(key: string): void {
    this.keySearch.emit(key);
  }

}
