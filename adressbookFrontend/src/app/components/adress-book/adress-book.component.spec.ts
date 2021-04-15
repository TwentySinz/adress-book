import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookComponent } from './adress-book.component';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from '../../models/Person';
import { Observable, of } from 'rxjs';
import { Component, Input } from '@angular/core';

describe('AdressBookComponent', () => {
  let component: AdressBookComponent;
  let fixture: ComponentFixture<AdressBookComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AdressBookComponent,
        AdressBookCardComponent
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
