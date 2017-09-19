import { Component } from "@angular/core";
import { TimelineService } from "./timeline.service";

@Component({
  selector:"page-timeline",
  templateUrl:"./timeline.html",
  styleUrls:["./timeline.scss"]
})

export class TimelineComponent{

  public timeDatas:Array<any>;

  constructor(private _service:TimelineService){}

  ngOnInit(){
    this.timeDatas = this._service.getDatas();
  }
}
