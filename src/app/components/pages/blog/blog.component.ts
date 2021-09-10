import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(private blogs:BlogService) { 
    this.blogs.getBlogs().subscribe(data=>{
      this.result = data['blog']
    })
  }

  ngOnInit(): void {
  }

}
