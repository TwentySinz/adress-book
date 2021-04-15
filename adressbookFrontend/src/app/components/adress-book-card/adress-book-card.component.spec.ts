import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressBookCardComponent } from './adress-book-card.component';
import { MatDialog } from '@angular/material/dialog';
import { AdressBookService } from '../../services/adress-book.service';
import { Observable, of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { Component, ViewChild } from '@angular/core';

describe('AdressBookCardComponent', () => {
  let component: AdressBookCardComponent;
  let fixture: ComponentFixture<AdressBookCardComponent>;

  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  class MatDialogMock {
    open(): any {
      return {
        afterClosed: () => of(true)
      };
    }
  }

  class AdressBookServiceMock {}

  @Component({
    selector: 'app-host-component',
    template: '<app-adress-book-card></app-adress-book-card>'
  })
  class TestHostComponent{
    @ViewChild(AdressBookCardComponent)
    public adressBookCardComponent!: AdressBookCardComponent;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule
      ],
      declarations: [
        AdressBookCardComponent,
        TestHostComponent
      ],
      providers: [{
        provide: MatDialog,
        useClass: MatDialogMock
      },
      {
        provide: AdressBookService,
        useClass: AdressBookServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressBookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
