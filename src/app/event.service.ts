import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
      return this.http.get('showcase/resources/data/calendarevents.json')
                  .toPromise()
                  .then(data => { return data; });
  }
}
