import { Component,Input,Output,ElementRef,ViewChild } from "@angular/core";

@Component({
  selector:"ba-switch",
  template:`<div #switch></div>`
})

export class BaSwitchComponent{

  @ViewChild("switch") _el:ElementRef;

  @Input() options:any;


  constructor(){}

  ngAfterViewInit(){

  }
}
