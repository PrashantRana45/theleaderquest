import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit, OnDestroy {
  BaseUrl = environment.baseUrl;
  ApiUrl = environment.apiUrl;
  id : any;
  result:any;
  course_id : any;
  maincompareid : any;
  comparebyid : any;
  navSubs: any;
  constructor(private route: ActivatedRoute, private courses: CoursesService, private router: Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['url']
    this.singlecourses()
    this.getcoursesbyId()
    this.navSubs = this.router.events.subscribe(resp=>{
      if(resp instanceof NavigationEnd){
        console.log('data ...!!', resp);
        console.log(this.route.snapshot.params['url'])
        this.id = this.route.snapshot.params['url']
        this.singlecourses()
        this.getcoursesbyId()
      }
    });
  }

  ngOnDestroy(){
    if(this.navSubs){
      this.navSubs.unsubscribe();
    }
  }

  singlecourses(){

    this.courses.singlecourse(this.id).subscribe(data=>{
      this.result = data['course'][0]
    })
    
  }
  
  getcoursesbyId(){
    this.courses.getcoursesbyId(this.id).subscribe(data=>{
      this.course_id = data['course']
    })
  }


  submit(form){
    var comparecourse = form.compare;
    this.router.navigate(['compare/'+this.id+ '/'+comparecourse]);
  }

}
