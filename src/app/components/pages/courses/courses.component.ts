import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  filter : any;
  selectedData;
  constructor(private courses:CoursesService) { 
    this.courses.getcourses().subscribe(data=>{
      this.result = data['courses']
    })
  }

  ngOnInit(): void {
  }
  onChange(val): void {  // event will give you full breif of action
    var replaced = val.split(' ').join('+');
    if(val == ''){
      this.courses.getcourses().subscribe(data=>{
        this.result = data['courses']
      })
    }
    else{ 
      this.courses.filterbyduration(replaced).subscribe(data=>{
        this.result = data['courses']
      }) 
    }  
  }
  onSelect(val){
    var replaced = val.split(' ').join('+');
    if(val == ''){
      this.courses.getcourses().subscribe(data=>{
        this.result = data['courses']
      })
    }
    else{ 
      this.courses.filterbyuniversities(replaced).subscribe(data=>{
        this.result = data['courses']
      }) 
    }  
  }

}
