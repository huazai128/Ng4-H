import { Component } from "@angular/core";
import { FormGroup,FormBuilder,AbstractControl,Validators } from "@angular/forms";

@Component({
  selector:"page-quill",
  templateUrl:"./quill.html",
  styleUrls:["./quill.scss"]
})

export class QuillComponent{

  public editorForm:FormGroup;
  public content:AbstractControl;

  constructor(private _fb:FormBuilder){
    this.editorForm = this._fb.group({
      "content":['',Validators.compose([Validators.required])]
    })

    this.content = this.editorForm.controls['content']
  }

  saveEditor(){
    console.log(this.content);
  }

}
