import { Component } from '@angular/core';
import { books } from '../mock-data';
import { LocalStorageProviderService } from './services/local-storage-provider.service';
import { MdDialog } from '@angular/material';
import {AddBookDialogComponent} from './add-book-dialog/add-book-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public books: Book[] = books;
  public constructor (private  lStore: LocalStorageProviderService, public dialog: MdDialog) {};

  public openDialog() {
      const dialogRef = this.dialog.open(AddBookDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
          this.lStore.addBook(result);
      });
  }
  public addBook(item: string): void {
      this.lStore.addBook(item);
  }
}
