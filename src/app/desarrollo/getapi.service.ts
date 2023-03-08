import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http:HttpClient) {


   }

   getdata<T>(url:string,name:string) {
    url = 'https://api.genderize.io/?name='+name
    return this._http.get<T[]>(url);
  }
}
