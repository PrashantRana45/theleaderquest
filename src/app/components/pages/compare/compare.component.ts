import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CompareService } from 'src/app/services/compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  ApiUrl = environment.apiUrl;
  id_1 : any;
  id_2 : any;
  url : any;
  result:any;
  result1:any;
  constructor(private route: ActivatedRoute, public compare : CompareService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.id_1 = params.get('id');
      this.id_2 = params.get('url');
  
    });
    this.getcomparisonbyfirst()
  }

  getcomparisonbyfirst(){
    this.compare.getcomparison(this.id_1).subscribe(data=>{
      this.result = data['comparison'][0]
    })
    this.compare.getcomparison(this.id_2).subscribe(data=>{
      this.result1 = data['comparison'][0]
    })
  }

}
