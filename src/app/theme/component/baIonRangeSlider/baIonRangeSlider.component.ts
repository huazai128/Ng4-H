import { Component,EventEmitter,ElementRef,ViewChild,Input,Output } from "@angular/core";
require("ion-rangeslider/js/ion.rangeSlider.js");

@Component({
  selector:"ba-ion-range",
  template:`<input type="text" #demo>`
})

export class BaIonRangeSliderComponent{

  @ViewChild("demo") _el:ElementRef;

  @Input() options:any;

  public silder:any;

  ngAfterViewInit(){
    jQuery(this._el.nativeElement).ionRangeSlider(Object.assign({},this.options));
    this.silder = jQuery(this._el.nativeElement).data("ionRangeSlider");
  }

  public update(){

  }


}
