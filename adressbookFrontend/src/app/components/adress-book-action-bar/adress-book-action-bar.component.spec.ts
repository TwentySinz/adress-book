import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookActionBarComponent } from './adress-book-action-bar.component';

describe('AdressBookActionBarComponent', () => {
  let component: AdressBookActionBarComponent;
  let fixture: ComponentFixture<AdressBookActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressBookActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
