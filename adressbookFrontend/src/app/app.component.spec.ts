import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  @Component({
    selector: 'app-header',
    template: '<p>app-header</p>'
  })
  class HeaderComponent{}

  @Component({
    selector: 'app-footer',
    template: '<p>app-footer</p>'
  })
  class FooterComponent{}

  @Component({
    selector: 'app-adress-book',
    template: '<p>app-adress-book</p>'
  })
  class AdressBookComponent{}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        AdressBookComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*it(`should have as title 'adressbookFrontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('adressbookFrontend');
  }); */

  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('adressbookFrontend app is running!');
  }); */
});
