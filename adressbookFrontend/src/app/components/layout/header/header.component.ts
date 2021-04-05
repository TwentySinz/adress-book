import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isFetchDataFromApi: EventEmitter<boolean>;
  title: string;

  constructor() {
    this.title = 'Adress Book';
    this.isFetchDataFromApi = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onUpdateCardList(isFetchDataFromApi: boolean): void {
    this.isFetchDataFromApi.emit(isFetchDataFromApi);
  }

}
