import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { ChartsComponent } from "./charts.component";

import { EchartsComponent } from "./echarts/echarts.component";
import { FlotComponent } from "./flot/flot.component";

import { routing } from "./charts.routing";

@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing
  ],
  declarations:[
    ChartsComponent,
    EchartsComponent,
    FlotComponent
  ],
  providers:[

  ]
})

export class ChartsModule{

}
