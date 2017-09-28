import { Component,EventEmitter,Input,Output,HostListener,forwardRef } from "@angular/core";
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector:"ba-switchery",
  templateUrl:"./baSwitchery.html",
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => BaSwitcheryComponent),
      multi:true
    }
  ],
  styles: [`
    .switch {
    background: #f00;
    border: 1px solid #dfdfdf;
    position: relative;
    display: inline-block;
    box-sizing: content-box;
    overflow: visible;
    padding: 0;
    margin: 0;            
    cursor: pointer;
    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }        
    small {
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease-out all;
    -webkit-transition: 0.3s ease-out all;
    }
    .switch-large {
    width: 66px;
    height: 40px;
    border-radius: 40px;
    }
    .switch-large small {
    width: 40px;
    height: 40px;
    }
    .switch-medium {
    width: 50px;
    height: 30px;
    border-radius: 30px;
    }
    .switch-medium small {
    width: 30px;
    height: 30px;
    }
    .switch-small {
    width: 33px;
    height: 20px;
    border-radius: 20px;
    }
    .switch-small small {
    width: 20px;
    height: 20px;
    }
    .checked {
    background: rgb(100, 189, 99);
    border-color: rgb(100, 189, 99);
    }
    .switch-large.checked small {
    left: 26px;
    }
    .switch-medium.checked small {
    left: 20px;
    }
    .switch-small.checked small {
    left: 13px;
    }
    .disabled {
    opacity: .50;
    cursor: not-allowed;
    }
    `],
})

export class BaSwitcheryComponent implements ControlValueAccessor{

  private onTouchedCallback = (v:any) => {};

  private onChangeCallback = (v:any) => {};

  private _checked:boolean;
  private _disabled:boolean;
  private _reverse: boolean;

  @Input() set checked(v: boolean) {
    this._checked = v !== false;
  }

  get checked() {
    return this._checked;
  }

  @Input() set disabled(v: boolean) {
    this._disabled = v !== false;
  };

  get disabled() {
    return this._disabled;
  }

  @Input() set reverse(v: boolean) {
    this._reverse = v !== false;
  };

  get reverse() {
    return this._reverse;
  }

  @Input() size: string = 'medium';
  @Output() change = new EventEmitter<boolean>();
  @Input() color: string = 'rgb(100, 189, 99)';
  @Input() switchOffColor: string = '';
  @Input() switchColor: string = '#f5f5f5';
  @Input() defaultBgColor: string = '#e5e5e5';
  defaultBoColor: string = '#dfdfdf';

  getColor(flag) {
    if (flag === 'borderColor') return this.defaultBoColor;
    if (flag === 'switchColor') {
      if (this.reverse) return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
      return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
    }
    if (this.reverse)  return !this.checked ? this.color : this.defaultBgColor;
    return this.checked ? this.color : this.defaultBgColor;
  }

  @HostListener('click')
  onToggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }

  writeValue(obj: any): void {
    if (obj !== this.checked) {
      this.checked = !!obj;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
