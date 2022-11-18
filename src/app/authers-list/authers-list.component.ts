import { Component, OnInit } from '@angular/core';
import { AuthersService } from '../authers.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-authers-list',
  templateUrl: './authers-list.component.html',
  styleUrls: ['./authers-list.component.css']
})
export class AuthersListComponent implements OnInit {

  constructor(public bookService: BookService,public autherservice:AuthersService) { }

authers :any={};

  ngOnInit(): void {

    this.getAuthers();

  }
  

  deleteAuther(id:number){
    this.autherservice.deleteAuther(id).subscribe()
  }

  getAuthers(){
    this.autherservice.getAuthers().subscribe((response)=>{
      this.autherservice.authers=response
      this.authers= this.autherservice.authers
    })
  }

}


// @Component({


//   bookid =null;


//   ngOnInit(): void {

//     this._bookService.getBooks().subscribe((response) => {

//       this._bookService.books = response
//       this._bookService.btnState = "Add Book";
//     }
//     )
//   }
  
//   resetForm() {
//     this._bookService.btnState = "Add Book";
//     this._bookService.bookObj = {
//       id: 0,
//       title: null,
//       auther: null,
//       publishedAt: null,
//       numberOfPages: null
//     }
//   }
 
//   delete(bookId: number) {
//     // let x=confirm("are u sure")
//     // if (x==true){
//     this._bookService.deleteBook(bookId).subscribe(() => {
//       this._bookService.getBooks().subscribe((response) => {

//         this._bookService.books = response
//         this.resetForm()
//       }

//       )
//     })
    
//   }
  
//   findBook(bookID:any) {
//     this._bookService.books = this._bookService.books.filter(x => x.id == bookID);
//   }
//   removeFilter(){
//     this._bookService.getBooks().subscribe((response) => {

//       this._bookService.books = response
//     }
//     )
//   }


//   fillData(mnHTML: any) {
//     this._bookService.bookObj.id = mnHTML.id
//     this._bookService.bookObj.title = mnHTML.title
//     this._bookService.bookObj.auther = mnHTML.auther
//     this._bookService.bookObj.publishedAt = mnHTML.publishedAt
//     this._bookService.bookObj.numberOfPages = mnHTML.numberOfPages
//     this._bookService.btnState = "Update Book";
//     //this(bookObj) has intial values null in componenet(book-form-component) 
//     //we fill the shared object here to bind it there
//   }

// }

