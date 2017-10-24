import {Component, Input, Output, ElementRef, ViewChild, EventEmitter, forwardRef} from "@angular/core";
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap";

import * as marked from "marked";
import * as hljs from "highlight.js";
import * as CodeMirror from "codemirror";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code, lang, callback) {
    return hljs.highlightAuto(code).value;
  }
});

@Component({
  selector:"ba-markdown",
  templateUrl:'./markdownEditor.html',
  styleUrls:["./markdownEditor.scss"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MarkdownEditorComponent),
    multi: true
  }],
})

export class MarkdownEditorComponent implements ControlValueAccessor{

  @ViewChild("bakModal") bakModal:ModalDirective;

  // 基本参数
  public editor:any;
  public content:any = '';
  public markedHtml:any = '';
  public editorElem:HTMLElement;

  public previewMode:number = 0;
  public fullscreen:any = false;

  // 传入配置
  @Input() config: Object;

  // 派发事件
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  public onModelChange:Function = () => {}
  public onModelTouched:Function = () => {}

  constructor(){}

  ngAfterViewInit(){

  }

  // 粗体
  public toggleBold(){

  }

  // 斜体
  public toggleItalic(){

  }

  // 引用
  public drawQuote(){

  }

  // 代码
  public drawCode(){

  }

  // 链接
  public drawLink(){

  }

  // 图片
  public drawImage(){

  }

  // 插入H3标签
  public drawH3Title(){

  }

  // 保存
  public saveAsMarkdown(){

  }

  // 解析
  public parseMarked(){

  }

  //
  public keyDownListen(){

  }

  writeValue(value){
    console.log(value);

  }

  registerOnChange(fn:any){

  }

  registerOnTouched(fn:any){

  }

  // 隐藏弹窗
  public cancelBakModal(){

  }

  //
  public useArticleBak(){

  }
}
