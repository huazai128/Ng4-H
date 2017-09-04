import { Component,ViewEncapsulation } from "@angular/core";

import { PageOneService } from "../../page-one.service";

@Component({
  selector:"page-news",
  templateUrl:"./news.html",
  encapsulation:ViewEncapsulation.None
})

export class NewsComponent{
  public news:any;

  constructor(private _service:PageOneService){}

  ngOnInit(){
    this.news = this._service.getNews();
  }
}
