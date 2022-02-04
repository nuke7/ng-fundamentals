import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

export interface IEvent {
  id: number;
  name: string;
  date?: string;
  time?: string;
  price: number;
  imageUrl?: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions?: object[];
}

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit, OnDestroy {
  events: IEvent[] = [];
  UnSub = new Subject();

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnDestroy(): void {
    this.UnSub.next();
    this.UnSub.complete();
  }

  ngOnInit() {
    this.eventService
      .getEvents()
      .pipe(takeUntil(this.UnSub))
      .subscribe((events) => {
        this.events = events;
      });
  }

  handleEventClicked(data: any) {
    console.log('Event clicked data received: ', data);
  }

  handleThumbnailClick(eventName: string) {
    console.log('Thumbnail clicked', eventName);
    this.toastr.info(eventName);
  }
}
