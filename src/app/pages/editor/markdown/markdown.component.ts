import { Component,SimpleChanges } from "@angular/core";
import { FormGroup,FormBuilder,AbstractControl,Validators } from "@angular/forms";

@Component({
  selector:"page-markdown",
  templateUrl:"./markdown.html",
  styleUrls:["./markdown.scss"]
})

export class MarkdownComponent{

  public editForm:FormGroup;
  public content:AbstractControl;

  constructor(private _fb:FormBuilder){
    this.editForm = this._fb.group({
      'content':['']
    })
    this.content = this.editForm.controls['content']
  }


  ngOnInit(){

  }

  ngOnChange(changes:SimpleChanges){
    console.log(this.content);
  }

  saveEditor(){
    console.log(this.content.value);
  }


}
