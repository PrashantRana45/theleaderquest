import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let ApiUrl = 'https://theleaderquest.com/education/';
@Injectable({
  providedIn: 'root'
})

export class BannerService {

  constructor(private http:HttpClient) { }

  getbanner(){
    let url = ApiUrl + 'api/getbanner';
    return this.http.get(url);
  }

}