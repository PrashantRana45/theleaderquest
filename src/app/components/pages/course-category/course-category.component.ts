import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.scss']
})
export class CourseCategoryComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  id : any;
  result:any;
  constructor(private route: ActivatedRoute, private courses: CoursesService ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['url']
    this.getcoursebycategory()
  }

  getcoursebycategory(){

    this.courses.getcoursebycategory(this.id).subscribe(data=>{
      this.result = data['course_category']
      console.log(this.result)
    })
  }

}
