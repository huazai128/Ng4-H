import { Component } from "@angular/core";

@Component({
  selector:"page-quill",
  templateUrl:"./quill.html",
  styleUrls:["./quill.scss"]
})

export class QuillComponent{

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder:'insert content...'
  }

  constructor(){}

  onEditorBlured(quill):void{
    console.log("失去焦点触发",quill)
  }

  onEditorFocused(quill):void{
    console.log("获取焦点时",quill);
  }

  onEditorCreated(quill):void{
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  // 获取变化的内容
  onContentChanged({quill,html,text}):void{
    console.log('quill content is changed!', quill, html, text);
  }
  ngOninit(){
    setTimeout(() => {
      this.editorContent = `<h1>content changed!</h1>`
      console.log('you can use the quill instance object to do something', this.editor);
    },2800)
  }

}
