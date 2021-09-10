import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonialsService } from 'src/app/services/testimonials.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    ApiUrl = environment.apiUrl;
    result : any;
    constructor(private blogs:TestimonialsService) { 
        this.blogs.gettestimonials().subscribe(data=>{
            this.result = data['testimonials']
        })
    }

    ngOnInit(): void {
    }

    feedbackSlides: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    }

}