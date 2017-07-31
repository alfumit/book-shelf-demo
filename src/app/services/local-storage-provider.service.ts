import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocalStorageProviderService {

  public books$$: Subject<Book> = new Subject();
  public constructor(private http: Http) { }

    public bookAction(command: any) {
            this.books$$.next(command);
            if (!localStorage.getItem(encodeURIComponent(command.item.title))) {
                localStorage.setItem(encodeURIComponent(command.item.title), JSON.stringify(command.item));
            }
    }

    public getAllBooks(): Observable<any> {
         return this.books$$.scan<any, Book[]>( (acc: Book[], command: any) => {
             switch (command.action) {
                 case 'add':
                    acc.push(command.item);
                    break;
                 case 'edit':
                     console.log('editing');
                     const toEdit: number = acc.findIndex((item) => {
                         console.log(item.title, command.item.title);
                         return item.title === command.item.title;
                     });
                     acc[toEdit] = command.item;
                     localStorage.setItem(encodeURIComponent(command.item.title), JSON.stringify(command.item));
                     break;
                 case 'remove':
                     const toRemove: number = acc.findIndex((item) => {
                        return item.title === command.item.title;
                      });
                     console.log('removing', toRemove);
                     localStorage.removeItem(encodeURIComponent(command.item.title));
                     acc.splice(toRemove, 1);
                     break;
             }
             return acc;
         }, []);
    }
    public addBook(book: Book): any {
        const headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers: headers });
        return this.http.post('/svc/books', book, options).toPromise()
            .then((res) => console.log('Book  added'));
    }

  public editBook(_id: string, book: Book): any {
    return this.http.put('/svc/edit-book', {_id: _id, book: book}).toPromise()
    .then((res) => console.log('Book  added'));
  }

    public getBooksfromApi(): Observable<Book[]> {
        return this.http.get('/svc/books')
                .map((response) => {
                    console.log('Response:', response.json());
                    return response.json();
                });
    }

    public removeBook(_id: string): any {
        console.log('DB id', _id);
        return this.http.delete(`/svc/books/${_id}`).toPromise()
            .then((res) => console.log('Book removed'));
    }

    public getBooksFromStorage(item: string): Book {
        return JSON.parse(localStorage.getItem(item));
    }

    public localStorageExists(): boolean {
      return !!localStorage.length;
    }
}
