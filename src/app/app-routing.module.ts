import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list.component';
import { EventListResolver } from './events/shared/event-list-resolver';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  {
    path: 'events',
    component: EventListComponent,
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventListResolver },
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//
