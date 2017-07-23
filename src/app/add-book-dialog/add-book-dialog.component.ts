import { Component, OnInit } from '@angular/core';
import {LocalStorageProviderService} from "../services/local-storage-provider.service";

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent implements OnInit {


  constructor( private lStore: LocalStorageProviderService) { }

  ngOnInit() {

  }
  public minD = new Date("01.01.1800");

  public addBook = (item: Book) => {
    console.log(item);
    this.lStore.addBook(item);
  };

}
