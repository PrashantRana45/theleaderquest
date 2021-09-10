import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modern-schooling-banner',
  templateUrl: './modern-schooling-banner.component.html',
  styleUrls: ['./modern-schooling-banner.component.scss']
})
export class ModernSchoolingBannerComponent implements OnInit {

  
  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public heroarea:BannerService) { 
    this.heroarea.getbanner().subscribe(data=>{
      this.heroarea = data['banner']
    })
  }

  ngOnInit(): void {
  }

}
