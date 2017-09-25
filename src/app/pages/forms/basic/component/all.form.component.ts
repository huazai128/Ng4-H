import { Component } from "@angular/core";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector:"all-form",
  templateUrl:"./all.form.html",
  styleUrls:["./all.form.scss"]
})
export class AllFormComponent{

  public _check:boolean = true;
  public radioValue:string = 'A';
  public _value:string = "搜索";

  public checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear',disabled:true },
    { label: 'Orange', value: 'Orange' },
  ];

  size = 'default';
  options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ];
  single = 'lucy';

  public editForm:FormGroup;
  constructor(private _fb:FormBuilder){
   this.editForm = this._fb.group({
     common:[null,[Validators.required]],
     info:[null,[Validators.required]],
     password:[null,[Validators.required]],
     prompt:[null,[Validators.required]],
     disable:[null,[Validators.required]],
     _checked:[true],
     radio_group:["1"],
     allCheck:["Apple"],
     allRadio:["1"],
     slt:["jack"],
     search:[''],
     url:[''],
     phoneNumberPrefix:["+86"],
     phoneNumber: [ null, [ Validators.required ] ],

   })
  }

  public editSave(){
    for(const i in this.editForm.controls){
      this.editForm.controls[i].markAsDirty();
    }
  }

  public _console(){
    console.log(this.editForm.controls['_checked'].value)
  }

  public _log(value) {
    console.log(value);
  }
}
