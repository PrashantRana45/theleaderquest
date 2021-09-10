import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

let ApiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class EventsService {

  constructor(private http:HttpClient) { }

  getEvents(){
    let url = ApiUrl + 'api/getevents';
    return this.http.get(url);
  }
  singleevent(id){
    let url= ApiUrl + 'api/geteventbyurl/' + id;
    return this.http.get(url);
  }
  getpopularevents(){
    let url= ApiUrl + 'api/getpopularevents';
    return this.http.get(url);
  }

}