import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modern-schooling-events',
  templateUrl: './modern-schooling-events.component.html',
  styleUrls: ['./modern-schooling-events.component.scss']
})
export class ModernSchoolingEventsComponent implements OnInit {

  
  ApiUrl = environment.apiUrl;
  result : any;
  constructor(public events:EventsService) { 
    this.events.getpopularevents().subscribe(data=>{
      this.events = data['popularevents']
    })
  }

  ngOnInit(): void {
  }

}
