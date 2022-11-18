import { Component, OnInit } from '@angular/core';
import { AuthersService } from '../authers.service';
import { Book } from '../book';
import { BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {


  bookSearchObj :any;

  constructor(public _bookService: BookService,public autherservice:AuthersService) { }

  ngOnInit(): void {

    this._bookService.getBooks().subscribe((response) => {

      this._bookService.books = response
      this._bookService.btnState = "Add Book";
    }
    )
  }
  
  resetForm() {
    this._bookService.btnState = "Add Book";
    this._bookService.bookObj = {
      id: 0,
      title: null,
      auther: null,
      publishedAt: null,
      numberOfPages: null
    }
  }
 
  delete(bookId: number) {
    // let x=confirm("are u sure")
    // if (x==true){
    this._bookService.deleteBook(bookId).subscribe(() => {
      this._bookService.getBooks().subscribe((response) => {

        this._bookService.books = response
        this.resetForm()
      }

      )
    })
    
  }
  
  findBook(searchText:any) {
    this._bookService.books = this._bookService.books.filter(x => x.id == searchText||
       x.title==searchText|| x.language==searchText||x.auther==searchText||x.publishedAt==searchText||
       x.numberOfPages==searchText||x.publishedAt==searchText);
  }
  removeFilter(){
    this._bookService.getBooks().subscribe((response) => {

      this._bookService.books = response
      this.bookSearchObj=null;
    }
    )
  }


  fillData(mnHTML: any) {
    this._bookService.bookObj.id = mnHTML.id
    this._bookService.bookObj.title = mnHTML.title
    this._bookService.bookObj.auther = mnHTML.auther
    this._bookService.bookObj.publishedAt = mnHTML.publishedAt
    this._bookService.bookObj.numberOfPages = mnHTML.numberOfPages
    this._bookService.btnState = "Update Book";
    //this(bookObj) has intial values null in componenet(book-form-component) 
    //we fill the shared object here to bind it there
  }

}
