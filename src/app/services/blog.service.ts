import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private http:HttpClient) { }

  getBlogs(){
    let url = ApiUrl + 'api/getblogs';
    return this.http.get(url);
  }
  singleblog(id){
    let url= ApiUrl + 'api/getblogbyurl/' + id;
    return this.http.get(url);
  }
  getpopularblogs(){
    let url= ApiUrl + 'api/getpopularblogs';
    return this.http.get(url);
  }

}