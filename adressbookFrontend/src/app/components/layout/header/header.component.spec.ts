import { Component, DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  @Component({
    selector: 'app-adress-book-action-bar',
    template: '<p>app-adress-book-action-bar</p>'
  })
  class AdressBookActionBarComponent{}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        AdressBookActionBarComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'Adress Book'`, () => {
    const title = 'Adress Book';
    expect(component.title).toBe(title);
  });

  describe('Outputs', () => {

    it(`should be 'isFetchDataFromApi'`, () => {
      expect(component.isFetchDataFromApi).toBeDefined();
      expect(component.isFetchDataFromApi).toBeInstanceOf(EventEmitter);
    });

    it(`should be 'keySearch'`, () => {
      expect(component.keySearch).toBeDefined();
      expect(component.keySearch).toBeInstanceOf(EventEmitter);
    });
  });

  describe(`Method 'onUpdateCardList'`, () => {

    it(`should emit input 'isFetchDataFromApi'`, () => {
      const isFetchDataFromApi = true;
      spyOn(component.isFetchDataFromApi, 'emit');
      component.onUpdateCardList(isFetchDataFromApi);
      expect(component.isFetchDataFromApi.emit).toHaveBeenCalledWith(isFetchDataFromApi);
    });
  });

  describe(`Method 'onChangeKeySearch'`, () => {

    it(`should emit input 'key'`, () => {
      const key = 'testkey';
      spyOn(component.keySearch, 'emit');
      component.onChangeKeySearch(key);
      expect(component.keySearch.emit).toHaveBeenCalledWith(key);
    });
  });

  describe('HTML', () => {

    it('should render title in h1-element', () => {
      const title = 'Adress Book';
      const titleExpected: DebugElement[] = fixture.debugElement.queryAll(By.css('h1'));
      expect(titleExpected.length === 1).toBeTruthy();
      expect(titleExpected[0].nativeElement.textContent).toBe(title);
    });
  });
});
