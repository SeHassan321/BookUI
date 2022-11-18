import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AddAutherComponent } from './add-auther/add-auther.component';
import { AuthersListComponent } from './authers-list/authers-list.component';
import { AddNationalityComponent } from './add-nationality/add-nationality.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookDetailsComponent,
    AddAutherComponent,
    AuthersListComponent,
    AddNationalityComponent,
    AddLanguageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
