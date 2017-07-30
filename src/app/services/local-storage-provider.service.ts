import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

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
        alert('Book added');
        let res = this.http.post('/svc/books', book);  
        console.log(res);
        return res;
    }
    
    public getBooksfromApi(): Observable<Book[]> {
        return this.http.get('/svc/books')
                .map((response) => {
                    console.log('Response:', response.json());
                    return response.json();
                });
    }

    public getBooksFromStorage(item: string): Book {
        return JSON.parse(localStorage.getItem(item));
    }

    public localStorageExists(): boolean {
      return !!localStorage.length;
    }
}
