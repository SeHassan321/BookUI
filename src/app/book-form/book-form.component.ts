import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { AuthersService } from '../authers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(public bookService: BookService, public autherService: AuthersService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.bookService.bookObj = {
    //   id: 0,
    //   title: null,
    //   autherId: null,
    //   publishedAt: Date,
    //   numberOfPages: null
    // }  
    this.autherService.getAuthers().subscribe((resonse) => {
      this.autherService.authers = resonse
    })

  }
  bookForm = new FormGroup({

    title: new FormControl(),
    autherId: new FormControl(),
    publishedAt: new FormControl(),
    numberOfPages: new FormControl(),

  })


  addBook(book: any) {
    var bookId = this._ActivatedRoute.snapshot.params["id"];
    if (this.bookService.btnState=="Add Book") {
      this.bookService.postBook(book.value).subscribe((response) => {
        // this.bookService.getBooks().subscribe((response) => {
        //   this.bookService.books = response
        // }
        // )
      })
      this.resetForm();
    }

    else
      this.bookService.updateBook(book.value, bookId).subscribe(() => {
        // this.bookService.getBooks().subscribe((response) => {
        //   this.bookService.books = response
        // }
        // )
        this.resetForm();
      })

  }

  resetForm() {
    this.bookService.btnState = "Add Book";
    this.bookForm.reset();
  }
}
