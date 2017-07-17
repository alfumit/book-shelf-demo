import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    @Input()
    public book: Book;
    constructor() { }
    ngOnInit() {
    }

}
