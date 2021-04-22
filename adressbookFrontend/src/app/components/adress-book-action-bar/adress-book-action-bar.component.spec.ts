import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import { MatInputHarness } from '@angular/material/input/testing';

import { AdressBookActionBarComponent } from './adress-book-action-bar.component';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AdressBookActionBarComponent', () => {
  let component: AdressBookActionBarComponent;
  let fixture: ComponentFixture<AdressBookActionBarComponent>;
  let loader: HarnessLoader;

  class MatDialogMock {
    open(): any {
      return {
        afterClosed: (): Observable<any> => of(true)
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
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  describe(`Method 'onChangeKeySearch'`, () => {

    it(`should emit input 'key'`, () => {
      const key = 'testkey';
      spyOn(component.keySearch, 'emit');
      component.onChangeKeySearch(key);
      expect(component.keySearch.emit).toHaveBeenCalledWith(key);
    });
  });

  describe(`Method 'openFormDialog'`, () => {

    it('should open form dialog', () => {
      spyOn(component.formDialog, 'open').and.returnValue({afterClosed: () => EMPTY} as any);
      component.openFormDialog();
      expect(component.formDialog.open).toHaveBeenCalled();
    });

    it(`should emit 'isFetchDataFromApi' after dialog has been closed`, () => {
      spyOn(component.formDialog, 'open').and.returnValue({afterClosed: () => of(true)} as any);
      spyOn(component.isFetchDataFromApi, 'emit');
      component.openFormDialog();
      expect(component.isFetchDataFromApi.emit).toHaveBeenCalledOnceWith(true);
    });
  });

  describe('HTML', () => {

    it(`should have span element 'Add new contact:'`, () => {
      const textExpected: HTMLSpanElement = fixture.debugElement
        .query(By.css('div[class = action-bar-add]'))
        .query(By.css('span')).nativeElement;

      expect(textExpected.textContent).toBe('Add new contact:');
    });

    it(`should have button which calls method 'openFormDialog' on click`, () => {
      spyOn(component, 'openFormDialog');
      const btnExpected: HTMLButtonElement = fixture.debugElement
        .query(By.css('div[class = action-bar-add]'))
        .query(By.css('button')).nativeElement;

      btnExpected.click();

      expect(btnExpected).toBeTruthy();
      expect(component.openFormDialog).toHaveBeenCalled();
    });

    it(`should have mat-form-field with label 'Search contact'`, async () => {
      const formFieldExpected = await loader.getHarness<MatFormFieldHarness>(MatFormFieldHarness.with({
        floatingLabelText: 'Search contact'
      }));

      expect(formFieldExpected).toBeTruthy();
    });

    it(`should have input-field which calls method 'onChangeKeySearch' on change`, async () => {
      spyOn(component.keySearch, 'emit');
      const inputExpected = await loader.getHarness<MatInputHarness>(MatInputHarness);
      expect(inputExpected).toBeTruthy();
      await inputExpected.setValue('test');
      expect(component.keySearch.emit).toHaveBeenCalledWith('test');
    });
  });
});

