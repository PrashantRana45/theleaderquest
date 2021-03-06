import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PartnerService } from 'src/app/services/partner.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-partner-slider',
    templateUrl: './partner-slider.component.html',
    styleUrls: ['./partner-slider.component.scss']
})
export class PartnerSliderComponent implements OnInit {

    ApiUrl = environment.apiUrl;
    result : any;
    constructor(public partner:PartnerService) { 
      this.partner.getuniversities().subscribe(data=>{
        this.partner = data['universities']
      })
    }
    
    ngOnInit(): void {
    }
    
    partnerSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    }

}