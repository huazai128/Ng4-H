import { Component,Input,Self } from "@angular/core";
import { ControlValueAccessor,NgModel } from "@angular/forms"; // ControlValueAccessor: 用于写入值和监听值得改变

@Component({
  selector:"ba-checkbox",
  templateUrl:"./baCheckbox.html",
  styleUrls:["./baCheckbox.scss"],
  providers:[NgModel]
})

export class BaCheckbox implements ControlValueAccessor{

  @Input() disabled:boolean;
  @Input() label:string;
  @Input() value:string;
  @Input() baCheckboxClass:string;

  public model:NgModel; // 提供数据双向绑定
  public state:boolean;

  constructor(@Self() state:NgModel){
    this.model = state;
    state.valueAccessor = this;
  }

  public onChange(value: any): void {}

  public onTouch(value: any): void {}


  public writeValue(state:any){
    this.state = state;
  }

  public registerOnChange(fn:any):void{
    this.onChange = (state:boolean) => {
      this.writeValue(state);
      // 配合ngModelChange事件,来触发函数
      this.model.viewToModelUpdate(state);
    }
  }

  public registerOnTouched(fn:any):void{
    this.onTouch = fn;
  }


}
