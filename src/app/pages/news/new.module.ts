import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { NgaModule } from "../../theme/nga.module";
import { routing } from "./new.routing";
import { CodemirrorModule } from "ng2-codemirror";

import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component"
import { TimelineComponent } from "./timeline/timeline.component";
import { CodemirrorCompoent } from "./codemirror/codemirror.compoent";
import { TreeComponent } from "./tree/tree.component";

import { NestableSerivce } from "./nestable/nestable.serivce";
import { TimelineService } from "./timeline/timeline.service"
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule,
    CodemirrorModule,
    routing
  ],
  declarations:[
    NewComponent,
    NestableComponent,
    TimelineComponent,
    CodemirrorCompoent,
    TreeComponent
  ],
  providers:[
    NestableSerivce,
    TimelineService
  ]
})

export class NewModule{

}
