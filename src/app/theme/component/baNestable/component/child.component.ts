import { Component,Input,Output } from "@angular/core";

@Component({
  selector:"nestable-child",
  templateUrl:"./child.html",
})

export class ChildComponent{

  @Input() nestable:any;

  constructor(){}



}
