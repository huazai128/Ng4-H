import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { BasicComponent } from "./basic/basic.component";
import { FormModal } from "./basic/component/form.modal";
import { AllFormComponent } from "./basic/component/all.form.component";
import { PluginComponent } from "./plugin/plugin.component";

const routes:Routes = [
  { path:"basic",component:BasicComponent },
  { path:"plugin",component:PluginComponent }
]

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    NgaModule
  ],
  declarations:[
    BasicComponent,
    FormModal,
    AllFormComponent,
    PluginComponent
  ],
  exports:[
    RouterModule
  ],
  entryComponents:[
    FormModal
  ]
})
export class FormModule{

}
