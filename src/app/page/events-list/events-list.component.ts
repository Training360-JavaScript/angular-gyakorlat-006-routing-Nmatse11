import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventList: Event[] = this.eventService.getAll()

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

}
