import {Component, Input, Output, ElementRef, ViewChild, EventEmitter, forwardRef} from "@angular/core";
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap";
import { store } from "./libs/store";

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
  @ViewChild("editor") editorElem:ElementRef;

  // 基本参数
  public editor:any;
  public content:any = '';
  public markedHtml:any = '';

  public previewMode:number = 0;
  public fullscreen:any = false;

  // 传入配置
  @Input() config: Object;

  // 派发事件
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  public onModelChange:Function = () => {};
  public onModelTouched:Function = () => {};

  public timer = null;

  constructor(){}

  ngAfterViewInit(){
    if(this.editor) return false;
    this.editor = CodeMirror.fromTextArea(this.editorElem.nativeElement,Object.assign({
      // 语言模式 github markdown扩展
      mode: 'gfm',
      // 行号
      lineNumbers: true,
      // 自动验证错误
      matchBrackets: true,
      // 是否换行
      lineWrapping: false,
      // 点击高亮正行
      styleActiveLine: true,
      // 配色
      theme: 'base16-dark',
      // 自动补全括号
      autoCloseBrackets: true,
      // 自动闭合标签
      autoCloseTags: true,
      // 自动高亮所有选中单词
      // styleSelectedText: true,
      // highlightSelectionMatches: { showToken: /w/, annotateScrollbar: true },
      // 展开折叠
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      // 回车键自动补全上一步格式
      extraKeys: {
        "Enter": "newlineAndIndentContinueMarkdownList"
      }
    }, this.config));

    this.editor.on('blur',cm => {
      this.onModelTouched();
    })

    this.editor.on("change", cm => {
      console.log(cm);
      const content = cm.getValue();
      if(!Object.is(content,this.content)){
        this.content = content;
        this.change.emit({
          editor:this.editor,
          content:this.content
        })
        this.onModelChange(this.content);
        if(this.previewMode != 0){
          this.parseMarked();
        }
      }
      if(!!this.timer) clearTimeout(this.timer);
      if(!Object.is(content,store.get(location.pathname))){
        this.timer = setTimeout(() => {
          store.set(location.pathname,content)
        },1600)
      }
    })

    // if(Object.is()){
    //
    // }
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
