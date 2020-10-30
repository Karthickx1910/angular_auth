import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  constructor(private _eventService: EventService) {}

  ngOnInit(): void {
    this._eventService.getSpecialEvents().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
