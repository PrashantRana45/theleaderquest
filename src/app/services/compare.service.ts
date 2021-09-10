import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class CompareService {
  message : string;
  constructor(private http:HttpClient) { }

  setMessage(data){
    this.message = data
  }
  getMessage(){
    return this.message
  }
  
  getcomparison(id){
    let url= ApiUrl + 'api/getcomparison/' + id;
    return this.http.get(url);
  }

}