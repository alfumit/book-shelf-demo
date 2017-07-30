import {Component, Inject, OnInit} from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import {LocalStorageProviderService} from '../services/local-storage-provider.service';


@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.css']
})
export class EditBookDialogComponent implements OnInit {
  public minD = new Date('01.01.1800');
  constructor( private lStore: LocalStorageProviderService, @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  public bookAction = (item: Book) => {
    let action: string;
    action = this.data ? 'edit' : 'add';
    console.log('action' + action);
    this.lStore.bookAction({ action: action, item: item });
  }
  
  public addBook = (book: Book) => {
      this.lStore.addBook(book);
  }

}
