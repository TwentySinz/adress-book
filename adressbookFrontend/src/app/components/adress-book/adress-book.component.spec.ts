import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookComponent } from './adress-book.component';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from '../../models/Person';
import { Observable, of } from 'rxjs';
import { Component, Input, SimpleChange, ViewChild } from '@angular/core';

describe('AdressBookComponent', () => {
  let component: AdressBookComponent;
  let fixture: ComponentFixture<AdressBookComponent>;

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  class AdressBookServiceMock {
    public personMock: Person[] = [
      new Person(
        1,
        'Max',
        'Mustermann',
        '01-01-1991',
        '01234',
        '04321',
        'max@mustermann.de',
        'Musterstraße',
        1,
        10001,
        'Musterstadt',
        'Musterland',
        'male.jpg',
        30)
      ];

      getPersons(): Observable<Person[]> {
        return of(this.personMock);
      }
  }

  @Component({
    selector: 'app-adress-book-card',
    template: '<p>app-adress-book-card</p>'
  })
  class AdressBookCardComponent{
    @Input() person!: Person;
  }

  @Component({
    selector: 'app-host-component',
    template: '<app-adress-book></app-adress-book>'
  })
  class TestHostComponent{
    @ViewChild(AdressBookComponent)
    public adressBookComponent!: AdressBookComponent;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AdressBookComponent,
        AdressBookCardComponent,
        TestHostComponent
      ],
      providers: [{
        provide: AdressBookService,
        useClass: AdressBookServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Inputs', () => {

    it(`should be 'countIsFetchDataFromApiTrue' from parent component`, () => {
      const numberExpected = 2;
      testHostComponent.adressBookComponent.countIsFetchDataFromApiTrue = numberExpected;
      expect(testHostComponent.adressBookComponent.countIsFetchDataFromApiTrue).toBe(numberExpected);
    });

    it(`should be 'keySearch' from parent component`, () => {
      const keyExpected = 'testkey';
      testHostComponent.adressBookComponent.keySearch = keyExpected;
      expect(testHostComponent.adressBookComponent.keySearch).toBe(keyExpected);
    });
  });

  describe('Variables', () => {

    it(`should be 'persons'`, () => {
      expect(component.persons).toBeTruthy();
    });
  });

  describe(`Method 'ngOnInit'`, () => {

    it(`should call Method 'getPersons'`, () => {
      spyOn(component, 'getPersons');
      component.ngOnInit();
      expect(component.getPersons).toHaveBeenCalled();
    });
  });

  describe(`Method 'getPersons'`, () => {

    it('should get Persons', () => {
      const personsExpected: Person[] = [
        new Person(
          1,
          'Max',
          'Mustermann',
          '01-01-1991',
          '01234',
          '04321',
          'max@mustermann.de',
          'Musterstraße',
          1,
          10001,
          'Musterstadt',
          'Musterland',
          'male.jpg',
          30)
        ];
      component.getPersons();
      expect(component.persons).toEqual(personsExpected);
    });
  });

  describe(`Method 'onUpdateCardList'`, () => {

    it(`should call Method 'getPersons' if Input 'isFetchDataFromApi' true`, () => {
      spyOn(component, 'getPersons');
      component.onUpdateCardList(true);
      expect(component.getPersons).toHaveBeenCalled();
    });
  });

  describe(`Method 'searchPerson'`, () => {

    it(`should find persons by input variable 'keySearch'`, () => {
      const personsExpected: Person[] = [
        new Person(
          1,
          'Max',
          'Mustermann',
          '01-01-1991',
          '01234',
          '04321',
          'max@mustermann.de',
          'Musterstraße',
          1,
          10001,
          'Musterstadt',
          'Musterland',
          'male.jpg',
          30),
          new Person(
            2,
            'Maximiliane',
            'Mustermann',
            '01-01-1991',
            '01234',
            '04321',
            'max@mustermann.de',
            'Musterstraße',
            1,
            10001,
            'Musterstadt',
            'Musterland',
            'male.jpg',
            30)
        ];
      component.persons = personsExpected;
      component.keySearch = 'Max';
      component.searchPerson();
      expect(component.persons).toEqual(personsExpected);
      component.keySearch = 'Maxi';
      component.searchPerson();
      expect(component.persons).toEqual([personsExpected[1]]);
    });

    it(`should call Method 'getPersons' if input variable 'keySearch' does not match first or last name`, () => {
      spyOn(component, 'getPersons');
      component.keySearch = 'noMatch';
      component.searchPerson();
      expect(component.getPersons).toHaveBeenCalled();
    });
  });

  describe(`Method 'ngOnChanges'`, () => {

    it(`should call Method 'getPersons' if input variable 'countIsFetchDataFromApiTrue' changes`, () => {
      spyOn(component, 'getPersons');
      component.countIsFetchDataFromApiTrue = 2;
      component.ngOnChanges({
        countIsFetchDataFromApiTrue: new SimpleChange(null, component.countIsFetchDataFromApiTrue, true)
      });
      expect(component.getPersons).toHaveBeenCalled();
    });

    it(`should call Method 'searchPerson' if input variable 'keySearch' changes`, () => {
      spyOn(component, 'searchPerson');
      component.keySearch = 'search';
      component.ngOnChanges({
        keySearch: new SimpleChange(null, component.keySearch, true)
      });
      expect(component.searchPerson).toHaveBeenCalled();
    });
  });
});
