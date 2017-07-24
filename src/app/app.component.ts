import {Component, OnInit} from '@angular/core';
import { defaultBookSet } from '../mock-data';
import { LocalStorageProviderService } from './services/local-storage-provider.service';
import { MdDialog } from '@angular/material';
import {AddBookDialogComponent} from './add-book-dialog/add-book-dialog.component';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app works!';
  public books: Book[];
  public books$: Observable<Book>;

  public constructor (private  lStore: LocalStorageProviderService, public dialog: MdDialog) {};

  public openDialog() {
      const dialogRef = this.dialog.open(AddBookDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
         // this.lStore.addBook(result);
      });
  }

  ngOnInit() {
    // When localStorage filled use it
      this.lStore.getAllBooks().subscribe((books: Book[]) => {
          this.books = books;
      });
    if (this.lStore.localStorageExists())  {
      for (let i in localStorage) {
          this.lStore.addBook({action: 'add', item: this.lStore.getBooksFromStorage(i)});
      }
      // When localStorage empty add mock values
    } else {
      defaultBookSet.forEach((item: Book) => {
        this.lStore.addBook({action: 'add', item: item});
      });
    }
  }

}
