import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class PartnerService {

  constructor(private http:HttpClient) { }

  getuniversities(){
    let url = ApiUrl + 'api/getuniversities';
    return this.http.get(url);
  }

}