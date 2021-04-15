import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookActionBarComponent } from './adress-book-action-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdressBookActionBarComponent', () => {
  let component: AdressBookActionBarComponent;
  let fixture: ComponentFixture<AdressBookActionBarComponent>;

  class MatDialogMock {
    open(): any {
      return {
        afterClosed: () => of(true)
      };
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AdressBookActionBarComponent
      ],
      providers: [{
        provide: MatDialog,
        useClass: MatDialogMock
      }]
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
