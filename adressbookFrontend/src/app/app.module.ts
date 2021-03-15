import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdressBookComponent } from './components/adress-book/adress-book.component';
import { HttpClientModule } from '@angular/common/http';
import { AdressBookCardComponent } from './components/adress-book-card/adress-book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AdressBookComponent,
    AdressBookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
