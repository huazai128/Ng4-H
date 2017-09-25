import { Component,ViewEncapsulation } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { NzModalSubject } from "ng-zorro-antd";

@Component({
  selector:"form-modal",
  templateUrl:"./modal.html",
  encapsulation:ViewEncapsulation.None,
  styles:[`    
    .ba-modal-form{
      h3,p,label,h4{
        color: #000 !important;
      }
    }
  `]
})

export class FormModal{
  public validateForm:FormGroup;

  constructor(private _fb:FormBuilder,
              private modalSubject:NzModalSubject){
    this.validateForm = this._fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[true],
    })

    this.modalSubject.on('onDestory', () => {
      console.log('destroy');
    });
  }

  _submitForm(){
    for(const i in this.validateForm.controls){
      this.validateForm.controls[i].markAsDirty();
    }
    if(this.validateForm.valid){
      this.modalSubject.next("登录")
    }
  }




}
