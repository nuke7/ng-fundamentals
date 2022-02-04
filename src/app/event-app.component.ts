import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./event-app.component.css'],
})
export class EventAppComponent {
  title = 'event-app';
}
