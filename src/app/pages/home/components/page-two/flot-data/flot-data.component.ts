import { Component,ViewEncapsulation } from "@angular/core";
import { PageTwoService } from "../page-two.service";

@Component({
  selector:"flot-data",
  templateUrl:"./flot-data.html",
  styleUrls:['./flot-data.scss'],
  encapsulation:ViewEncapsulation.None
})

export class FlotDataComponent{

  public flotData:any;

  constructor(private _service:PageTwoService){}

  ngOnInit(){
    this.flotData = this._service.getFlotData();
  }
}
