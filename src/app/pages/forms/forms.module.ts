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
import { ChosenComponent,ColorPickerComponent } from "./plugin/component";
import { ColorPickerModule } from "angular4-color-picker";

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
    ColorPickerModule,
    NgaModule
  ],
  declarations:[
    BasicComponent,
    FormModal,
    AllFormComponent,
    PluginComponent,
    ChosenComponent,
    ColorPickerComponent
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
