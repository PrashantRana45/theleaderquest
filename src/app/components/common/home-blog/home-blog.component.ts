import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public blogs:BlogService) { 
    this.blogs.getpopularblogs().subscribe(data=>{
      this.blogs = data['popularblogs']
    })
  }

  ngOnInit(): void {
  }

}
