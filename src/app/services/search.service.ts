import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class SearchService {
  constructor(private http:HttpClient) { }

  getsearch(id){
    let url= ApiUrl + 'api/getsearch/' + id;
    return this.http.get(url);
  }

}