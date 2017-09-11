import { Component,ViewEncapsulation,HostBinding } from "@angular/core";
import { CheckEmailService } from "./checkEmail.service";

@Component({
  selector:"page-check",
  templateUrl:"./checkEmail.html",
  styleUrls:["./email.scss"],
  encapsulation:ViewEncapsulation.None,
  providers:[CheckEmailService]
})

export class CheckEmailComponent{

  private imgs:any[];

  constructor(private _service:CheckEmailService){}

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
   this.imgs = this._service.getImgs();
  }
}
