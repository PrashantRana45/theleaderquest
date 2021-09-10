import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public partner:PartnerService) { 
    this.partner.getuniversities().subscribe(data=>{
      this.partner = data['universities']
    })
  }

  ngOnInit(): void {
  }

}
