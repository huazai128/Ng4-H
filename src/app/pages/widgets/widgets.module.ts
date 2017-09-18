import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { WidgetsComponent } from "./widgets.component";
import { routing } from "./widgets.routing";
import { WidgetsService } from "./widgets.service";

@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing
  ],
  declarations:[
    WidgetsComponent
  ],
  providers:[
    WidgetsService
  ]
})

export class WidgetsModule{

}
