import { Component,ViewEncapsulation } from "@angular/core";
import { NestableSerivce } from "./nestable.serivce";

@Component({
  selector:"page-nestable",
  templateUrl:"./nestable.html",
  styleUrls:["./nestable.scss"],
  encapsulation:ViewEncapsulation.None
})

export class NestableComponent{

  public nestables:Array<any>;
  public datas:Array<any>;

  constructor(private _service:NestableSerivce){}

  ngOnInit(){
    this.nestables = this._service.getDatas();
    this.datas = this._service.getDatas1();
  }

}
