import { Component,ViewEncapsulation } from "@angular/core";
import { SiteDataService } from "./siteData.service";

@Component({
  selector:"page-site",
  templateUrl:'./siteData.html',
  encapsulation:ViewEncapsulation.None,
  providers:[SiteDataService],
  styleUrls:["./siteData.scss"]
})

export class SiteDataComponent{

  public datas:any;

  constructor(private _service:SiteDataService){}

  ngOnInit(){
    this.datas = this._service.getSite();
  }

}
