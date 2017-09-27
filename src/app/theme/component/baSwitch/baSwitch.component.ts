import { Component,Input,ElementRef,ViewChild,Self } from "@angular/core";
import { ControlValueAccessor,NgModel } from "@angular/forms";


@Component({
  selector:"ba-switch",
  template:`<input type="checkbox" 
                   (change)="onChangeCallback($event.target.checked)"
                   [value]="value"
                   [checked]="state"
                   #switch>`,
})

export class BaSwitchComponent implements ControlValueAccessor{

  @ViewChild("switch") _el:ElementRef;

  @Input() value:string;
  @Input() options:any;
  public model:NgModel;
  public state:boolean;

  public onTouchedCallback = (checked: boolean) => {}
  public onChangeCallback = (checked: boolean) => {}

  private defaults:any = {
      color             : '#64bd63'
    , secondaryColor    : '#dfdfdf'
    , jackColor         : '#fff'
    , jackSecondaryColor: null
    , className         : 'switchery'
    , disabled          : false
    , disabledOpacity   : 0.5
    , speed             : '0.1s'
    , size              : 'default'
  }

  constructor(@Self() state:NgModel){
    this.model = state;
    state.valueAccessor = this;
  }

  ngOnInit(){

  }

  writeValue(state){
    console.log(state);
    this.state = this.state;
  }

  registerOnChange(fn:any){
    this.onChangeCallback = (state:boolean) => {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    }
  }
  registerOnTouched(fn:any){
    this.onTouchedCallback = fn;
  }
}
