import { Component,Input } from "@angular/core";

@Component({
  selector:"ba-timeline",
  templateUrl:"./baTimeline.html",
  styleUrls:["./baTimeline.scss"]
})

export class BaTimelineComponent{

  @Input() timelineData:Array<any>;

  constructor(){}

}
