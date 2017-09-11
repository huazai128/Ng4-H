import { Component,ViewEncapsulation } from "@angular/core";
import { FormBuilder,FormGroup,AbstractControl,Validators } from "@angular/forms";

@Component({
  selector:"page-compose",
  templateUrl:"./compose.html",
  styleUrls:["./compose.scss"],
  encapsulation:ViewEncapsulation.None
})

export class ComposeComponent{

  public editForm:FormGroup;
  public emails:AbstractControl;
  public title:AbstractControl;
  public content:AbstractControl;

  constructor(private _fb:FormBuilder){
    this.editForm = this._fb.group({
      "emails":["",Validators.compose([Validators.required])],
      "title":["",Validators.compose([Validators.required])],
      "content":["",Validators.compose([Validators.required])]
    })

    this.emails = this.editForm.controls["emails"];
    this.title = this.editForm.controls["title"];
    this.content = this.editForm.controls["content"];

  }

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
  }
}
