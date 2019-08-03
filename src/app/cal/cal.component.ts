import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {EventService} from '../event.service';
@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  events: any;

  options: any;
  
  header: any;
          
  constructor(private eventService: EventService) { }

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

  ngOnInit() {
      this.eventService.getEvents().then(events => {this.events = events;});
      
      this.options = {
          plugins:[ dayGridPlugin, timeGridPlugin, interactionPlugin ],
          defaultDate: '2017-02-01',
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          editable: true
      };
  }

}
