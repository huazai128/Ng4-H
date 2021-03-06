import { NgModule,ModuleWithProviders,NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { ModalModule } from "ngx-bootstrap";

import { BaThemeConfigProvider } from "./theme.configProvider";

// 组件
import {
  BaNavbarTopComponent,
  BaMsgCenterComponent,
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaConfigComponent,
  BaCardComponent,
  BaCardConfig,
  BaPieChart,
  BaPeityComponent,
  BaFlotChartComponent,
  BaEcharts,
  BaCheckbox,
  BaSummernote,
  BaNestable,
  ChildComponent,
  BaTimelineComponent,
  BaIonRangeSliderComponent,
  BaSwitcheryComponent,
  MarkdownEditorComponent,
  QuillEditor
} from "./component";
const NGA_COMPONENT = [
  BaNavbarTopComponent,
  BaMsgCenterComponent,
  BaSidebar,
  BaMenu,
  BaMenuItem,
  BaConfigComponent,
  BaCardComponent,
  BaCardConfig,
  BaPieChart,
  BaPeityComponent,
  BaFlotChartComponent,
  BaEcharts,
  BaCheckbox,
  BaSummernote,
  BaNestable,
  ChildComponent,
  BaTimelineComponent,
  BaIonRangeSliderComponent,
  BaSwitcheryComponent,
  MarkdownEditorComponent,
  QuillEditor
]

// 管道
import {
  BaProfileImgPipe,
  BaFormatNumber
} from "./pipes";
const NGA_PIPES = [
  BaProfileImgPipe,
  BaFormatNumber
]
// 服务
import { BaMenuService } from "./service";
const NGA_SERVICE = [
  BaMenuService
]

// 指令
import { BaCardBlur } from "./component/baCard/baCardBlur.directive";
import {
  BaScrollPosition,
  BaSlimScroll
} from "./directives";
const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaCardBlur
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports:[
    ...NGA_COMPONENT,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES
  ],
  declarations:[
    ...NGA_COMPONENT,
    ...NGA_PIPES,
    ...NGA_DIRECTIVES
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class NgaModule{
  static forRoot():ModuleWithProviders{
    return <ModuleWithProviders>{
      ngModule:NgaModule,
      providers:[
        BaThemeConfigProvider,
        ...NGA_SERVICE
      ]
    }
  }
}
