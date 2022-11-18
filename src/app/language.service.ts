import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private _http: HttpClient) { }
  url = "https://localhost:7216/api/languages";
  getlanguages() {
    return this._http.get(this.url);
  }
  getlanguagesById(id: number) {
    return this._http.get(this.url + "/" + id);
  }
  addlanguage(language: any) {
    return this._http.post(this.url, language)
  }
  updatelanguage(id: number, language: any) {
    return this._http.put(this.url + "/" + id, language)
  }
  deletelanguage(id: number) {
    return this._http.delete(this.url + "/" + id)
  }
}
