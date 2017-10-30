import { Component, ViewEncapsulation, Input, Output, ElementRef, ViewChild, SimpleChanges, forwardRef,EventEmitter } from "@angular/core";
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import { StringMap,RangeStatic,DeltaStatic,Sources,Quill as QuillType } from "quill";
import Quill from "quill";

@Component({
  selector:"ba-quill",
  template:`<div class="quill-editor" #quill></div>`,
  styleUrls:["./quill.scss"],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(() => QuillEditor),
      multi:true
    }
  ],
  encapsulation:ViewEncapsulation.None
})

export class QuillEditor implements ControlValueAccessor{

  @ViewChild("quill") editorElm:ElementRef;

  public quillEditor:QuillType;
  public content:string;

  @Input() options:Object; // 配置

  // 派发事件
  @Output() blur:EventEmitter<QuillType> = new EventEmitter();
  @Output() focus:EventEmitter<QuillType> = new EventEmitter();
  @Output() ready:EventEmitter<QuillType> = new EventEmitter();
  @Output() change:EventEmitter<{editor: QuillType, html: String, text: String}> = new EventEmitter();

  // 配置
  private defaultModules:StringMap = {
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']
    ]
  }

  public onModelChange:Function = () => {};
  public onModelTouched:Function = () => {};

  constructor(){}

  ngAfterViewInit(){
    this.quillEditor = new Quill(this.editorElm.nativeElement,Object.assign({
      modules:this.defaultModules, // 模块，用于制定Quill的功能和方法
      placeholder:'Insert text here ...',
      readOnly:false,
      theme:'snow',
      boundary: document.body,
    },this.options || {}));

    // 写入内容
    if(this.content){
      setTimeout(() => {
        this.quillEditor.clipboard.dangerouslyPasteHTML(this.content);
      })
    }

    this.ready.emit(this.quillEditor);

    // 监听选项的变化
    this.quillEditor.on("selection-change",(range:RangeStatic) => {
      if(!range){
        this.onModelTouched();
        this.blur.emit(this.quillEditor);// 失去焦点
      }else{
        this.focus.emit(this.quillEditor); // 获取焦点
      }
    })

    this.quillEditor.on("text-change",(dalta:DeltaStatic,oldDelta:DeltaStatic,source:Sources) => {
      let html = this.editorElm.nativeElement.innerHTML;
      const text = this.quillEditor.getText();
      if(html === '<p><br></p>') html = null;
      this.onModelChange(html);
      this.change.emit({
        editor:this.quillEditor,
        html:html,
        text:text
      })
    })
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes['readyOnly'] && this.quillEditor){
      this.quillEditor.enable(!changes['readyOnly'].currentValue);
    }
  }

  writeValue(value:any){
    this.content = value;
    if(this.quillEditor){
      if(value){
        this.quillEditor.clipboard.dangerouslyPasteHTML(this.content)
        return ;
      }
      this.quillEditor.setText(""); // 设置空值
    }
  }

  registerOnTouched(fn:Function){
    this.onModelTouched = fn;
  }
  registerOnChange(fn:Function){
    this.onModelChange = fn;
  }
}
