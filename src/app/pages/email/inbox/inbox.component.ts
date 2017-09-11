import { Component,ViewEncapsulation,HostBinding } from "@angular/core";
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";
import { InboxService } from "./inbox.service";

@Component({
  selector:"page-inbox",
  templateUrl:"./inbox.html",
  styleUrls:["./inbox.scss"],
  encapsulation:ViewEncapsulation.None,
})

export class InboxComponent{

  public emails = {
    data:[],
    pagination:{
      current_page:1,  //当前页码进行双向绑定
      total_page:0,
      pre_page:10,
      total:0
    }
  };

  public searchForm:FormGroup;
  public keywords:AbstractControl;
  public isRemember:boolean = false;

  constructor(private _fb:FormBuilder,private _server:InboxService){
    this.searchForm = this._fb.group({
      "keywords":["",Validators.compose([Validators.required])]
    })
    this.keywords = this.searchForm.controls["keywords"]
  }

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
    this.emails.data = this._server.getEmails();
  }
  public searchEmail(){

  }

  public changes(){

  }
}
