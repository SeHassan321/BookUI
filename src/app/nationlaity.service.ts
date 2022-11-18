import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NationlaityService {

  url = "https://localhost:7216/api/nationalities";
  constructor(private _http: HttpClient) { }

  getNationality() {
    return this._http.get(this.url);
  }
  getNationalitysById(id: number) {
    return this._http.get(this.url + "/" + id);
  }
  addNationality(nationality: any) {
    return this._http.post(this.url, nationality)
  }
  updateNationality(id: number, nationality: any) {
    return this._http.put(this.url + "/" + id, nationality)
  }
  deleteNationality(id: number) {
    return this._http.delete(this.url + "/" + id)
  }
}
