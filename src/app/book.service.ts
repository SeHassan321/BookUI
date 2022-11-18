import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "https://localhost:7216/api/books";
  bookObj: any = {};
  btnState = "Add Book";
  books: Book[] = [];
  constructor(private _HttpClient: HttpClient) { }

  getBooks(): Observable<any> {
    return this._HttpClient.get(this.url)
  }
  deleteBook(bookId: number) {
    return this._HttpClient.delete(this.url + "/" + bookId)
  }
  updateBook(book: any, bookId: number): Observable<any> {
    return this._HttpClient.put(this.url + "/" + bookId, book)
  }
  postBook(book: any) {
    return this._HttpClient.post(this.url, book);
  }
}
