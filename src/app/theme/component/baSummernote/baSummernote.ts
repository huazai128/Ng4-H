import { Component,ViewChild,ElementRef,Input,EventEmitter,SimpleChanges,forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from "@angular/forms";

@Component({
  selector:"ba-summernote",
  template:`<div #editor class="editor-box"></div>`,
  styles:[`
    :host{
      display: block;
      position: relative;
    }
    .editor-box{
      position: relative;
    }
  `],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef( () => BaSummernote),
    multi: true //不是单个值  是一个数组
  }]
})

export class BaSummernote implements ControlValueAccessor{

  @ViewChild("editor") editorDemo:ElementRef;

  @Input() options:any;

  private defaultOptions = {
    lang:"zh-CN",
    popover:{air:[['color',['color']],['font',['bold','underline','clear']]]},
    image:[['imagesize',['imageSize100','imageSize50','imageSize25']],['float',['floatLeft','floatRight','floatNone']],['remove',['removeMedia']]],link:[['link',['linkDialogShow','unlink']]],air:[['color',['color']],['font',['bold','underline','clear']],['para',['ul','paragraph']],['table',['table']],['insert',['link','picture']]],
    placeholder:"请输入内容...",
    shortcuts:false,
    callbacks:[

    ]
  }

  onModalChange:Function = () => {};
  onModalTouched:Function = () => {};

  constructor(){}

  ngOnInit(){
    jQuery('[data-toggle="tooltip"]').tooltip();
  }

  ngAfterViewInit(){
    jQuery(this.editorDemo.nativeElement).summernote(Object.assign(this.defaultOptions,this.options));
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("changes")
  }

  writeValue(value){
    console.log(value)
  }

  registerOnTouched(fn:Function){
    this.onModalTouched = fn;
  }

  registerOnChange(fn:Function){
    this.onModalChange = fn;
  }



}
