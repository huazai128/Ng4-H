import { Component,Input,ElementRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/operator/map";

import "peity/jquery.peity.js";

@Component({
  selector:"ba-peity",
  template:`
    <div [attr.data-diameter]="40"><ng-content></ng-content></div>
  `
})

export class BaPeityComponent{

  @Input() stylePeity:string = "line";

  @Input() options:any;

  @Input() isChanges:boolean = false;

  @Input() text:string;

  private _peityChart:any;

  constructor(private _el:ElementRef){}

  ngAfterViewInit(){
    console.log(this.stylePeity);
    this._loadPeity();
    if(this.isChanges){
      this._changesPeity();
    }
  }

  private _loadPeity(){
    this._peityChart = jQuery(this._el.nativeElement.children[0]).peity(this.stylePeity,Object.assign({},this.options));
  }

  private _changesPeity(){
    Observable.interval(300)
      .map(() => {
        let random = Math.round(Math.random() * 10);
        let values = this._el.nativeElement.querySelector("div").innerHTML.split(",")
        // console.log(values);
        values.shift();
        values.push(random);
        return values;
      })
      .subscribe((values) => {
        this._peityChart.text(values.join(",")).change();
      })
  }
}
