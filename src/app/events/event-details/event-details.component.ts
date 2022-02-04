import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { IEvent } from '../event-list.component';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  declare event: IEvent;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']
    ) as IEvent;
  }
}
