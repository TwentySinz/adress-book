import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookFormComponent } from './adress-book-form.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdressBookService } from '../../services/adress-book.service';
import { Person } from 'src/app/models/Person';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdressBookFormComponent', () => {
  let component: AdressBookFormComponent;
  let fixture: ComponentFixture<AdressBookFormComponent>;

  const personMock: Person = new Person(
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
    30
  );

  class AdressBookServiceMock {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AdressBookFormComponent
      ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: personMock
      },
      {
        provide: AdressBookService,
        useClass: AdressBookServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
