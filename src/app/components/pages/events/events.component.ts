import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  ApiUrl = environment.apiUrl;
  result : any;
  constructor(private events:EventsService) { 
    this.events.getEvents().subscribe(data=>{
      this.result = data['events']
    })
  }

  ngOnInit(): void {
  }

}
