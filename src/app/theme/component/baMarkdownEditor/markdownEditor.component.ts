import {Component, Input, Output, ElementRef, ViewChild, EventEmitter, forwardRef} from "@angular/core";
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from "@angular/forms";

@Component({
  selector:"ba-markdown",
  templateUrl:'./markdownEditor.html',
  styleUrls:["./markdownEditor.scss"],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MarkdownEditorComponent),
      multi:true
    }
  ]
})

export class MarkdownEditorComponent implements ControlValueAccessor{

  public onModelChange:Function = () => {}
  public onModelTouched:Function = () => {}

  constructor(){}

  writeValue(value){

  }

  registerOnChange(fn:any){

  }

  registerOnTouched(fn:any){

  }
}
