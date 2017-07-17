import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdCardModule, MdButtonModule, MdButtonToggleModule, MdToolbarModule, MdListModule, MdInputModule, MdGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdListModule,
    MdInputModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
