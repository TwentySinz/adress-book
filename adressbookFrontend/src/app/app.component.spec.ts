import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  @Component({
    selector: 'app-header',
    template: '<p>app-header</p>'
  })
  class HeaderComponent{}

  @Component({
    selector: 'app-footer',
    template: '<p>app-footer</p>'
  })
  class FooterComponent{}

  @Component({
    selector: 'app-adress-book',
    template: '<p>app-adress-book</p>'
  })
  class AdressBookComponent{
    @Input() countIsFetchDataFromApiTrue!: number;
    @Input() keySearch!: string;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        AdressBookComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('Variables', () => {

    it(`should be 'countIsFetchDataFromApiTrue'`, () => {
      expect(app.countIsFetchDataFromApiTrue).toBe(0);
    });

    it(`should be 'keySearch'`, () => {
      expect(app.keySearch).toBe('');
    });
  });

  describe('Method onUpdateCardList', () => {

    it(`should increment 'countIsFetchDataFromApiTrue' if input 'isFetchDataFromApi' is true`, () => {
      app.countIsFetchDataFromApiTrue = 0;
      app.onUpdateCardList(true);
      expect(app.countIsFetchDataFromApiTrue).toBe(1);
    });

    it(`should not increment 'countIsFetchDataFromApiTrue' if input 'isFetchDataFromApi' is false`, () => {
      app.countIsFetchDataFromApiTrue = 0;
      app.onUpdateCardList(false);
      expect(app.countIsFetchDataFromApiTrue).toBe(0);
    });
  });

  describe('Method onChangeKeySearch', () => {

    it(`should set 'keySearch' with input 'key'`, () => {
      const key = 'testkey';
      app.onChangeKeySearch(key);
      expect(app.keySearch).toBe(key);
    });
  });
});
