import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  constructor(private http:HttpClient) { }

  getcategories(){
    let url = ApiUrl + 'api/getcategories';
    return this.http.get(url);
  }

}