import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwitterMentionsComponent } from './twitter-mentions/twitter-mentions.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';


const appRoutes: Routes = [
  {
    path: 'twitter_timeline',
    component: TwitterTimelineComponent
  },
  {
    path: 'twitter_mentions',
    component: TwitterMentionsComponent
  },
 
 
 
  { path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
