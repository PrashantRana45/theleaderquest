import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private http:HttpClient) { }

  getcourses(){
    let url = ApiUrl + 'api/getcourses';
    return this.http.get(url);
  }
  singlecourse(id){
    let url= ApiUrl + 'api/getcoursebyurl/' + id;
    return this.http.get(url);
  }
  getpopularcourses(){
    let url= ApiUrl + 'api/getpopularcourses';
    return this.http.get(url);
  }
  getcoursebycategory(id){
    let url= ApiUrl + 'api/getcoursebycategory/' + id;
    return this.http.get(url);
  }
  getcoursesbyId(id){
    let url= ApiUrl + 'api/getcoursesbyId/' + id;
    return this.http.get(url);
  }
  filterbyuniversities(id){
    let url= ApiUrl + 'api/filterbyuniversities/' + id;
    return this.http.get(url);
  }
  filterbyduration(id){
    let url= ApiUrl + 'api/filterbyduration/' + id;
    return this.http.get(url);
  }

}