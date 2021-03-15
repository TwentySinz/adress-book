import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookCardComponent } from './adress-book-card.component';

describe('AdressBookCardComponent', () => {
  let component: AdressBookCardComponent;
  let fixture: ComponentFixture<AdressBookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressBookCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
