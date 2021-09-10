import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  ApiUrl = environment.apiUrl;
  
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  myInterval: any;
  id : any;
  result:any;
  t : any;
  latest_date : any;
  endDate: any;
  today: any;
  difference : any;
  constructor(public route: ActivatedRoute, private events: EventsService, public datepipe : DatePipe ){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['url']
    this.singleevents()
  }

  singleevents(){

    this.events.singleevent(this.id).subscribe(data=>{
      this.result = data['event'][0]
      this.t = data['event'][0]['added_on']
      this.latest_date = this.datepipe.transform(this.t, 'yyyy-MM-dd');
      this.today = new Date();
      this.endDate = new Date(this.latest_date);
      this.difference = this.endDate - this.today;
      this.days = Math.floor(this.difference / 86400000);
      this.hours = Math.floor((this.difference / 86400000) / 3600000);
      this.minutes = Math.floor(((this.difference % 86400000) % 3600000) / 60000);
      this.seconds = Math.floor((((this.difference % 86400000) % 3600000) % 60000) / 1000);
    })
  }

}
