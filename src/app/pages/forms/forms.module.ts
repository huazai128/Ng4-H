import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { ColorPickerModule } from "angular4-color-picker";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from 'ng2-file-upload';
import { ImageCropperModule } from "ng2-img-cropper";

import { BasicComponent } from "./basic/basic.component";
import { FormModal } from "./basic/component/form.modal";
import { AllFormComponent } from "./basic/component/all.form.component";
import { PluginComponent } from "./plugin/plugin.component";
import { ChosenComponent,ColorPickerComponent } from "./plugin/component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { AvatarComponent } from "./avatar/avatar.component";

const routes:Routes = [
  { path:"basic",component:BasicComponent },
  { path:"plugin",component:PluginComponent },
  { path:"upload",component:FileUploadComponent },
  { path:"avatar",component:AvatarComponent }
]

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgZorroAntdModule,
    ColorPickerModule,
    FileUploadModule,
    ImageCropperModule,
    NgaModule
  ],
  declarations:[
    BasicComponent,
    FormModal,
    AllFormComponent,
    PluginComponent,
    ChosenComponent,
    ColorPickerComponent,
    FileUploadComponent,
    AvatarComponent
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
