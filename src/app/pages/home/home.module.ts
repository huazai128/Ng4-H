import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { FlotModule } from "ng2modules-flot";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";

import { PageOneComponent } from "./components";


@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    FlotModule,
    routing
  ],
  declarations:[
    HomeComponent,
    PageOneComponent
  ],
  providers:[

  ],
})
export class HomeModule{

}
