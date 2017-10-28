import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "@theme/nga.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { Routes,RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { MarkdownComponent } from "./markdown/markdown.component";
import { QuillComponent } from "./quill/quill.component";

const routes:Routes = [
  { path:"markdown",component:MarkdownComponent},
  { path:"quill",component:QuillComponent }
];

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    NgaModule
  ],
  declarations:[
    MarkdownComponent,
    QuillComponent
  ],
  providers:[

  ],
  exports:[
    RouterModule
  ]
})

export class EditorModule{

}
