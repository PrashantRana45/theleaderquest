import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modern-schooling-courses',
  templateUrl: './modern-schooling-courses.component.html',
  styleUrls: ['./modern-schooling-courses.component.scss']
})
export class ModernSchoolingCoursesComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public courses:CoursesService) { 
    this.courses.getpopularcourses().subscribe(data=>{
      this.courses = data['popularcourses']
    })
  }

  ngOnInit(): void {
  }

}
