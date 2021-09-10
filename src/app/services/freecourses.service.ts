import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class FreeCoursesService {

  constructor(private http:HttpClient) { }

  getfreecourses(){
    let url = ApiUrl + 'api/getfreecourses';
    return this.http.get(url);
  }

}