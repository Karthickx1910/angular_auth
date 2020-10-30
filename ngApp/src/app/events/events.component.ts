import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private _eventService: EventService) {
    this._eventService.getEvents().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {}
}
