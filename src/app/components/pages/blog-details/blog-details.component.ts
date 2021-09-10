import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  ApiUrl = environment.apiUrl;
  id : any;
  result:any;
  constructor(private route: ActivatedRoute, private blogs: BlogService ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['url']
    this.singleblog()
  }

  singleblog(){

    this.blogs.singleblog(this.id).subscribe(data=>{
      this.result = data['blog'][0]
    })
  }

}
