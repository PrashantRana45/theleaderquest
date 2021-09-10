import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss']
})
export class TopCategoriesComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public categories:CategoriesService) { 
    this.categories.getcategories().subscribe(data=>{
      this.categories = data['categories']
    })
  }

  ngOnInit(): void {
  }

}
