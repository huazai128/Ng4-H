import { Component } from "@angular/core";
import { ContactService } from "./contact.service";

@Component({
  selector:"page-content",
  templateUrl:"./contact.html",
  styleUrls:['./contact.scss'],
  providers:[ContactService]
})

export class ContactComponent{

  public contactDatas = [];

  constructor(private service:ContactService){}

  ngOnInit(){
    this.getInit()
  }

  private getInit(){
    let currentArr = this.service.getDatas();
    let len = currentArr.length;
    for(let i = 0, j = 0; i < len; i += 3,j++ ){
      this.contactDatas[j] = currentArr.splice(0,3);
    }
  }
}
