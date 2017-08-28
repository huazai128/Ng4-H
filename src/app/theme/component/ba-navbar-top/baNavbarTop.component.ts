import { Component,ViewEncapsulation } from "@angular/core";
import { GlobalState } from "../../../global.state";

@Component({
  selector:"ba-navbbar-top",
  templateUrl:"./baNavbarTop.html",
  encapsulation:ViewEncapsulation.None,
  styleUrls:["./baNavbarTop.scss"]
})
export class BaNavbarTopComponent{
  public isMenuCollapsed:boolean = false;

  constructor(private state:GlobalState){
    this.state.subscribe('menu.isCollapsed',(isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    })
  }
  public toggleMenu(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }
}
