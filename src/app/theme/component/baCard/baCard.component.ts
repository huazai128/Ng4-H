import { Component,Input,ViewEncapsulation } from "@angular/core";

@Component({
  selector:"ba-card",
  templateUrl:'./baCard.html',
  styleUrls:['./baCard.scss'],
  encapsulation:ViewEncapsulation.None,
})

export class BaCardComponent{

  @Input() cardTitle:string;

  @Input() baCardClass:string;

  @Input() cardType:string;

  @Input() selectType:string;

  @Input() baBodyClass:string;

  @Input() colorStr:string;

  @Input() title:string;
  constructor(){

  }

  ngOnInit(){
    // console.log(this.selectType)
  }
}

