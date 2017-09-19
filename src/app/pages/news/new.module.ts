import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { routing } from "./new.routing";


import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component"
import { TimelineComponent } from "./timeline/timeline.component";


import { NestableSerivce } from "./nestable/nestable.serivce";
import { TimelineService } from "./timeline/timeline.service"
@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing
  ],
  declarations:[
    NewComponent,
    NestableComponent,
    TimelineComponent
  ],
  providers:[
    NestableSerivce,
    TimelineService
  ]
})

export class NewModule{

}
