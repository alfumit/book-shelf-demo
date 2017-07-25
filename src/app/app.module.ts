import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdCardModule, MdButtonModule, MdButtonToggleModule, MdToolbarModule,
    MdListModule, MdInputModule, MdGridListModule, MdDialogModule, MdDatepickerModule,
  MdNativeDateModule, MdSelectModule, MdRadioModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { SortPipe } from './pipes/sort.pipe';
import { LocalStorageProviderService } from './services/local-storage-provider.service';
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SortPipe,
    EditBookDialogComponent
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
    MdGridListModule,
    MdDialogModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdSelectModule,
    MdRadioModule
  ],
  entryComponents: [
    EditBookDialogComponent
  ],
  providers: [
    LocalStorageProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
