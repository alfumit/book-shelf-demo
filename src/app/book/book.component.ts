import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageProviderService } from '../services/local-storage-provider.service';
import { EditBookDialogComponent } from '../edit-book-dialog/edit-book-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    @Input()
    public book: Book;


    constructor( private lStore: LocalStorageProviderService, public dialog: MdDialog) { }

    public removeBook(item: Book): void {
      this.lStore.bookAction({action: 'remove', item: item});
    }

    public editBook(item: Book): void {
        const dialogRef = this.dialog.open(EditBookDialogComponent, {height: '500px', width: '300px', data: item});
    }

    ngOnInit() {
    }

}
