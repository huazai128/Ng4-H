import { Component,ViewEncapsulation,HostBinding } from "@angular/core";
import { NestableSerivce } from "./nestable.serivce";
import { animat } from "../../../theme/animations";

@Component({
  selector:"page-nestable",
  templateUrl:"./nestable.html",
  styleUrls:["./nestable.scss"],
  encapsulation:ViewEncapsulation.None,
  animations:[animat]
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
