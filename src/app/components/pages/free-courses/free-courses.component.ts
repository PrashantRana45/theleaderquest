import { Component, OnInit } from '@angular/core';
import { FreeCoursesService } from 'src/app/services/freecourses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-free-courses',
  templateUrl: './free-courses.component.html',
  styleUrls: ['./free-courses.component.scss']
})
export class FreeCoursesComponent implements OnInit {


  ApiUrl = environment.apiUrl;
  result : any;
  constructor(private courses:FreeCoursesService) { 
    this.courses.getfreecourses().subscribe(data=>{
      this.result = data['courses']
      console.log(this.result)
    })
  }

  ngOnInit(): void {
  }

}
