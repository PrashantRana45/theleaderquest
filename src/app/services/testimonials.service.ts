import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class TestimonialsService {

  constructor(private http:HttpClient) { }

  gettestimonials(){
    let url = ApiUrl + 'api/gettestimonials';
    return this.http.get(url);
  }

}