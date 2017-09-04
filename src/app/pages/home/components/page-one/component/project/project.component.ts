import { Component,ViewEncapsulation } from "@angular/core";

@Component({
  selector:"page-project",
  templateUrl:'./project.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls:['./project.scss']
})

export class ProjectComponent{
  public opitons = {
    fill: '#1ab394',
    stroke:'#169c81',
    width: 64,
    height: 16
  };
  public isChanges = true;

  constructor(){}
}
