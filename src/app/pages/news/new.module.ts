import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component"
import { routing } from "./new.routing";
import { NestableSerivce } from "./nestable/nestable.serivce";

@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing
  ],
  declarations:[
    NewComponent,
    NestableComponent
  ],
  providers:[
    NestableSerivce
  ]
})

export class NewModule{

}
