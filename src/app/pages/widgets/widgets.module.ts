import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { WidgetsComponent } from "./widgets.component";
import { routing } from "./widgets.routing";

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

  ]
})

export class WidgetsModule{

}
