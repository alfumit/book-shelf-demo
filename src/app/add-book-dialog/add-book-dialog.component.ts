import { Component, OnInit } from '@angular/core';
import {LocalStorageProviderService} from '../services/local-storage-provider.service';


@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent implements OnInit {
  public minD = new Date('01.01.1800');
  constructor( private lStore: LocalStorageProviderService) { }

  ngOnInit() {

  }

  public addBook = (item: Book) => {
    this.lStore.addBook({action: 'add', item: item });
  }

}
