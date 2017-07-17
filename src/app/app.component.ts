import { Component } from '@angular/core';
import { books } from '../mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app works!';
  public books: Book[] = books;

  public addBook(): void {
      alert('Adding book');
  }
}
