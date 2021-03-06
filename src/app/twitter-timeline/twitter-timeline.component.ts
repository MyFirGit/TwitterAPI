import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';


@Component({
  selector: 'app-twitter-timeline',
  templateUrl: './twitter-timeline.component.html',
  styleUrls: ['./twitter-timeline.component.css']
})
export class TwitterTimelineComponent implements OnInit {
   
  myTimeline: any;
 
  constructor(private api: TwitterService) { }
 
  ngOnInit() {
   this.getTwitterTimeline();
  }
   
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
   }
}
