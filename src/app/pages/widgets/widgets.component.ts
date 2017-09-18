import { Component,ViewEncapsulation,HostBinding } from "@angular/core";
import { WidgetsService } from "./widgets.service";
import { animat } from "../../theme/animations";

@Component({
  selector:"page-widgets",
  templateUrl:"./widgets.html",
  styleUrls:["./widgets.scss"],
  encapsulation:ViewEncapsulation.None,
  animations:[animat]
})

export class WidgetsComponent{

  public data1:Array<any>;
  public flotData:Array<any>;
  public promptData:Array<any>;


  constructor(private service:WidgetsService){}

  ngOnInit(){
    this.data1 = this.service.getWidgetData();
    this.flotData = this.service.getFlotData();
    this.promptData = this.service.getPromptData();
  }





}
