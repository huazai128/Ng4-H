import { Component } from "@angular/core";
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import { NzModalService } from "ng-zorro-antd";
import { FormModal } from "./component/form.modal";

@Component({
  selector:"page-basic",
  templateUrl:"./basic.html",
  styleUrls:["./basic.scss"]
})

export class BasicComponent{

  public validateForm:FormGroup;
  public editForm:FormGroup;
  public isVisible:boolean = false;

  constructor(private _fb:FormBuilder,
              private modalService:NzModalService){
    this.validateForm = this._fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[false]
    })

    this.editForm = this._fb.group({
      email:[null,[Validators.required]],
      password:[null,[Validators.required]],
    })
  }

  ngOnInit(){

  }

  public _submitForm(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  public editFrom(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  // 显示弹窗
  public showModalTop = () => {
    this.isVisible = true;
  }

  public handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  public handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

  // 自定义component弹窗
  public showModalComponent(){
    const subscription = this.modalService.open({
      title:"表单",
      content:FormModal,
      onOk(){},
      footer:false
    })
    subscription.subscribe((result) => {
      console.log("asdsada")
    })
  }
}
