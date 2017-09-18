import { Component,Input,Output,ElementRef,EventEmitter,ViewChild } from "@angular/core";
import "nestable/jquery.nestable.js";

@Component({
  selector:"ba-nestable",
  templateUrl:"./index.html"
})

export class BaNestable{

  @Input() nestableData:Array<any>;

  @Input() options:any;

  @Input() classStr:string;

  private ops = {
    group:1
  }

  constructor(private _el:ElementRef){}

  ngAfterViewInit(){
    jQuery(this._el.nativeElement.children[0])
      .nestable(Object.assign(this.ops,this.options))
      .on("change",this.updateOutput.bind(this))
  }

  private updateOutput = (e) => {
    let list = e.length ? e : jQuery(e.terget);
    let output = list.data("output");
    if((<any>window).JSON){
      list.nestable('serialize');
    }else{
      console.log("浏览器不支持");
    }
  }
}
