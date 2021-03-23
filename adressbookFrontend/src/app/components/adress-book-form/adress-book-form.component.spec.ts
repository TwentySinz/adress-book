import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookFormComponent } from './adress-book-form.component';

describe('AdressBookFormComponent', () => {
  let component: AdressBookFormComponent;
  let fixture: ComponentFixture<AdressBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressBookFormComponent ]
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
