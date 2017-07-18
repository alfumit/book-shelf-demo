import { Injectable } from '@angular/core';
import { Http, } from '@angular/http';


@Injectable()
export class LocalStorageProviderService {

  public constructor(private http: Http) { }

    public addBook(item: string): void {
            console.log(item);
            localStorage.setItem('test', JSON.stringify(item));
    }
    public getBook(item: string): string {
        return localStorage.getItem(item);
    }
    public removeBook(item: string): any {
        return localStorage.removeItem(item);
    }
}
