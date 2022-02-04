import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventAppComponent],
})
export class AppModule {}
