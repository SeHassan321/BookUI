import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthersService } from '../authers.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit {
  books: Book[] = []
  bookDetails : any = {};
  constructor(public bookService: BookService,public autherservice:AuthersService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.bookService.getBooks().subscribe((resonse)=>{
    this.books=resonse
    var bookId = this._ActivatedRoute.snapshot.params["id"];
    this.bookDetails=this.books.filter(a=>a.id==bookId)

  })


  
  }

}
