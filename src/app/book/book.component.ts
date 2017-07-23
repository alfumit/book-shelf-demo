import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageProviderService } from '../services/local-storage-provider.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    @Input()
    public book: Book;


    constructor( private lStore: LocalStorageProviderService) { }

    public removeBook(item: string): void {
      this.lStore.removeBook(item);
    }

    ngOnInit() {
    }

}
