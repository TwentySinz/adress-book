import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookWarnDialogComponent } from './adress-book-warn-dialog.component';

describe('AdressBookWarnDialogComponent', () => {
  let component: AdressBookWarnDialogComponent;
  let fixture: ComponentFixture<AdressBookWarnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressBookWarnDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookWarnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
