import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAutherComponent } from './add-auther/add-auther.component';
import { AddLanguageComponent } from './add-language/add-language.component';
import { AddNationalityComponent } from './add-nationality/add-nationality.component';
import { AuthersListComponent } from './authers-list/authers-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [

  {path : "", component : BookListComponent},
  {path : "bookListComponent", component : BookListComponent},
  {path : "bookFormComponent/:id", component : BookFormComponent},
  {path : "bookFormComponent", component : BookFormComponent},
  {path : "bookDetailsComponent/:id", component : BookDetailsComponent},
  {path : "addAutherComponent", component : AddAutherComponent},
  {path : "addAutherComponent/:id", component : AddAutherComponent},
  {path : "authersListComponent", component : AuthersListComponent},
  {path : "addLanguageComponent", component : AddLanguageComponent},
  {path : "addNationalityComponent", component : AddNationalityComponent},

  //{path : "**" , component : NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
