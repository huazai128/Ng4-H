import { Component,ViewEncapsulation } from "@angular/core";
import { BaMsgCenterService } from "./baMsgCenter.service";

@Component({
  selector:"ba-msg-center",
  templateUrl:'./baMsgCenter.html',
  styleUrls:['./baMsgCenter.scss'],
  encapsulation:ViewEncapsulation.None,
  providers:[BaMsgCenterService]
})

export class BaMsgCenterComponent{
  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private service:BaMsgCenterService){

  }
  ngOnInit():void{
    this.notifications = this.service.getNotifications();
    this.messages = this.service.getMessages();
  }
}

