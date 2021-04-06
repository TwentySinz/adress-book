import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdressBookComponent } from './components/adress-book/adress-book.component';
import { HttpClientModule } from '@angular/common/http';
import { AdressBookCardComponent } from './components/adress-book-card/adress-book-card.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AdressBookActionBarComponent } from './components/adress-book-action-bar/adress-book-action-bar.component';
import { AdressBookFormComponent } from './components/adress-book-form/adress-book-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdressBookComponent,
    AdressBookCardComponent,
    HeaderComponent,
    FooterComponent,
    AdressBookActionBarComponent,
    AdressBookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
