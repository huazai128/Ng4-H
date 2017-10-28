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
  @Input() pathName:string; // 传入的路径

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
          // 设置缓存
          store.set(location.pathname,content)
        },1600)
      }
    })

    // 如果是发布页面，有本地存储，则直接读取存储
    if(Object.is(this.pathName, location.pathname)) {
      let bak = store.get(location.pathname);
      if(!!bak) {
        // 添加setTimeout
        setTimeout(() => {
          this.content = bak;
          this.editor.setValue(this.content);
          this.markedHtml = marked(this.content);
        })
      }
    } else {
      // 如果是编辑页面，没有弹窗，则设置
      setTimeout(() => {
        if(!this.bakModal.isShown) {
          this.editor.setValue(this.content);
          this.markedHtml = marked(this.content);
        }
      }, 1000)
    }
  }

  // 插入内容
  public updateCodeMirror(data) {
    const codemirror = this.editor;
    codemirror.replaceSelection(data);
    const startPoint = codemirror.getCursor('start');
    const endPoint = codemirror.getCursor('end');
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
    /*
    let doc = codemirror.getDoc();
    let cursor = doc.getCursor(); // gets the line number in the cursor position
    let line = doc.getLine(cursor.line); // get the line contents
    let pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
    }
    doc.replaceRange('\n' + data + '\n', pos); // adds a new line
    */
  }

  // 替换光标选中项内容
  public replaceSelection(cm, active, start, end) {
    let text;
    let startPoint = cm.getCursor('start');
    let endPoint = cm.getCursor('end');
    if (active) {
      text = cm.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      cm.setLine(startPoint.line, start + end);
    } else {
      text = cm.getSelection();
      cm.replaceSelection(start + text + end);
      startPoint.ch += start.length;
      endPoint.ch += start.length;
    }
    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }

  // 保存文件
  public saveFile(code,name){
    const blob = new Blob([code], { type: 'text/plain' });
    if ((<any>window).saveAs) {
      (<any>window).saveAs(blob, name);
    } else if ((<any>navigator).saveBlob){
      (<any>navigator).saveBlob(blob, name);
    } else {
      const url = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.setAttribute("href",url);
      link.setAttribute("download",name);
      let event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, (<any>window), 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    }
  }

  // 获取鼠标位置
  public getState(cm,pos){
    pos = pos || cm.getCursor('start');
    let stat = cm.getTokenAt(pos);
    if (!stat.type || !stat.type.split) return {};
    let types = stat.type.split(' ');
    let ret = {}, data, text;
    for (let i = 0; i < types.length; i++) {
      data = types[i];
      if (data === 'strong') {
        (<any>ret).bold = true;
      } else if (data === 'letiable-2') {
        text = cm.getLine(pos.line);
        if (/^\s*\d+\.\s/.test(text)) {
          ret['ordered-list'] = true;
        } else {
          ret['unordered-list'] = true;
        }
      } else if (data === 'atom') {
        (<any>ret).quote = true;
      } else if (data === 'em') {
        (<any>ret).italic = true;
      }
    }
    return ret;
  }

  // 粗体
  public toggleBold(){
    const codemirror = this.editor;
    const stat = this.getState(codemirror,codemirror.getCursor()); // 解析光标位置
    let text;
    let start = "**";
    let end = "**";
    let startPoint = codemirror.getCursor("start");
    let endPoint = codemirror.getCursor("end");
    if((<any>stat).bold){

    }else{
      text = codemirror.getSelection();
      codemirror.replaceSelection(start + text + end);
      startPoint.ch += 2;
      endPoint.ch += 2;
    }
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
  }

  // 斜体
  public toggleItalic(){
    const codemirror = this.editor;
    const stat = this.getState(codemirror, codemirror.getCursor());
    let text;
    let start = '*';
    let end = '*';

    let startPoint = codemirror.getCursor('start');
    let endPoint = codemirror.getCursor('end');
    if ((<any>stat).italic) {
      /*
      text = codemirror.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      start = start.replace(/^(.*)?(\*|\_)(\S+.*)?$/, '$1$3');
      end = end.replace(/^(.*\S+)?(\*|\_)(\s+.*)?$/, '$1$3');
      startPoint.ch -= 1;
      endPoint.ch -= 1;
      // codemirror.setLine(startPoint.line, start + end);
      */
    } else {
      text = codemirror.getSelection();
      codemirror.replaceSelection(start + text + end);

      startPoint.ch += 1;
      endPoint.ch += 1;
    }
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
  }

  // 引用
  public drawQuote(){
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).quote, '> ', '\n');
  }

  // 代码
  public drawCode(){
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).code, '```\n', '\n```');
  }

  // 链接
  public drawLink(){
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).link, '[', '](https://)');
  }

  // 图片
  public drawImage(){
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).image, '![](', ')');
  }

  // 插入H3标签
  public drawH3Title(){
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).h3, '### ', '\n');
  }

  // 保存
  public saveAsMarkdown(){
    this.saveFile(this.content,"untitled.md");
  }

  // 解析
  public parseMarked(){
    this.markedHtml = marked(this.content);
  }

  // 按键 LISTEN
  public keyDownListen(){
    // 退出全屏
    if(Object.is((<any>event).keyCode, 27)) {
      this.fullscreen = false;
    }

    // 全屏
    if(Object.is((<any>event).keyCode, 122)) {
      this.fullscreen = !this.fullscreen;
    }

    // 保存
    if((<any>event).keyCode == 83 && ((<any>event).ctrlKey || (<any>event).metaKey || (<any>event).shiftKey)){
      this.saveAsMarkdown();
      (<any>event).preventDefault();
      return false;
    }
  }

  writeValue(currentValue: any) {
    const bak = store.get(location.pathname);
    if (!Object.is(currentValue, undefined) && !Object.is(currentValue, this.content)) {
      // 如果是公告页就啥也不干
      if(Object.is(location.pathname, '/announcement')) {
        this.content = currentValue;
        this.editor.setValue(this.content);
        return false;
      }
      if (!!bak && !Object.is(currentValue, bak)) {
        this.bakModal.show();
      }
      this.content = currentValue;
    } else if (!!bak) {
      this.content = bak;
    }
  }

  registerOnChange(fn:Function){
    this.onModelChange = fn;
  }

  registerOnTouched(fn:Function){
    this.onModelTouched = fn;
  }

  // 隐藏弹窗
  public cancelBakModal(){
    this.editor.setValue(this.content);
    this.markedHtml = marked(this.content);
    this.bakModal.hide();
  }

  //
  public useArticleBak(){
    this.content = store.get(location.pathname);
    this.editor.setValue(this.content);
    this.markedHtml = marked(this.content);
    this.bakModal.hide();
  }
}
