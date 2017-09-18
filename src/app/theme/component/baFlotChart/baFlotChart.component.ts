import { Component,Input,Output,ElementRef,ViewChild } from "@angular/core";

import "flot/jquery.flot.js";
import "flot/jquery.flot.time.js";

@Component({
  selector:"ba-flot",
  template:`<div #flot class="flot-box" [style.height]="height"></div>`,
  styles:[`
    :host{
      display: block;
    }
    .flot-box{
      width: 100%;
      height: 240px;
    }
  `]
})
export class BaFlotChartComponent{

  @ViewChild("flot") flot:ElementRef;

  @Input() options:any;

  @Input() dataset:any;

  @Input() height:string;




  constructor(private _el:ElementRef){}

  ngAfterViewInit(){
    jQuery.plot(jQuery(this.flot.nativeElement), this.dataset, this.options);
  }

  private changeFlot(){

  }
}
