import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthersService {
  url = "https://localhost:7216/api/Authers"
  authers: any = []

  constructor(private _http: HttpClient) { }

  getAuthers() {
    return this._http.get(this.url);
  }
  getAuthersById(id: number) {
    return this._http.get(this.url + "/" + id);
  }
  addAuther(auther: any) {
    return this._http.post(this.url, auther)
  }
  updateAuther(id: number, auther: any) {
    return this._http.put(this.url + "/" + id, auther)
  }
  deleteAuther(id: number) {
    return this._http.delete(this.url + "/" + id)
  }
}
