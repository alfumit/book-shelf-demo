import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipe implements PipeTransform {

  transform(books: Book[], args?: string): Book[] {
    console.log(books);
    let res = [], booksTemp = books.slice(0), i = 0, j = 0, x = Object.assign({}, books[0]);
    x.issueYear = 0;
    x.title = "Я";

    if (args === 'По году') {
      while(booksTemp.length > 0) {
        let temp = booksTemp.reduce((acc, item, ) => {
          if (item.issueYear > acc.issueYear) { return item; }
          return acc;
        }, x);
        res.push(temp);
        console.log(booksTemp.indexOf(temp));
        booksTemp.splice(booksTemp.indexOf(temp), 1);
      }
    }

    if (args === 'По названию') {
      while (booksTemp.length > 0) {
        let temp = booksTemp.reduce((acc, item, ) => {
          if (item.title.charCodeAt(0) < acc.title.charCodeAt(0)) { return item; }
          return acc;
        }, x);
        res.push(temp);
        console.log(booksTemp.indexOf(temp));
        booksTemp.splice(booksTemp.indexOf(temp), 1);
      }
    }

    return res.length ? res : books;
  }

}
