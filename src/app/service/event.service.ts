import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventList: Event[] = [
    {
    name: 'Simeulue earthquake',
    date: '2005. 03. 28',
    time: '16:09',
    location: {
      address: 'Asia',
      city: 'Simeulue',
      country: 'Sumatra'
      }
  }, {
    name: 'Ecuador earthquake',
    date: '1906. 01. 31',
    time: '15:36',
    location: {
      address: 'South America',
      city: 'Esmeraldas',
      country: 'Ecuador'
    }
  }, {
    name: 'Valdivia earthquake',
    date: '1960. 05. 22',
    time: '15:11',
    location: {
      address: 'South America',
      city: 'Valdivia',
      country: 'Chile'
  }
}
]

getAll(): Event[] {
  return this.eventList
}

  constructor() { }
}
