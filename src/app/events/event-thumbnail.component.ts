import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  handleBtnClick = () => {
    //console.log('Button clicked');
    this.eventClick.emit(this.event.name);
  };

  handleParentClick = () => {
    console.log('Parent clicked');
  };

  getStartTime = (): object => {
    const isEarly = this.event && this.event.time === '8:00 am';
    if (isEarly) {
      return { green: isEarly, bold: isEarly };
    } else if (this.event && this.event.time === '10:00 am') {
      return {
        blue: this.event.time === '10:00 am',
        bold: this.event.time === '10:00 am',
      };
    } else {
      return {};
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
