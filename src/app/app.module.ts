import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TwitterService } from './twitter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TwitterMentionsComponent,
    TwitterTimelineComponent
 
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
