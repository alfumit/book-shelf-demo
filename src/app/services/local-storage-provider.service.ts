import { Injectable } from '@angular/core';
import { Http, } from '@angular/http';


@Injectable()
export class LocalStorageProviderService {

  public constructor(private http: Http) { }

    public addBook(item: Book): void {
            console.log(item);
            localStorage.setItem(encodeURIComponent(item.title), JSON.stringify(item));
    }
    public getBook(item: string): string {
        return localStorage.getItem(item);
    }
    public removeBook(item: string): any {
        return localStorage.removeItem(item);
    }
}
