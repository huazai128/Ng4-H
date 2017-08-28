import { Component } from "@angular/core";
import { GlobalState } from "../../../global.state";

@Component({
  selector:"ba-config",
  templateUrl:"./baConfig.html",
  styleUrls:["./baConfig.scss"]
})
export class BaConfigComponent{

  public isShow:boolean = false;

  constructor(private _state:GlobalState){
    this._state.subscribe("config",(isShow) => {
      this.isShow = isShow
    })
  }


  onConfig(){
    this.isShow = !this.isShow;
    this._state.notifyDataChanged("config",this.isShow);
  }

}
