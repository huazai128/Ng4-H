import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { FlotModule } from "ng2modules-flot";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";

import {
  PageOneComponent,
  NewsComponent,
  ProjectComponent,
  PageTwoComponent,
  SiteDataComponent,
  FlotDataComponent,
  VectorMap
} from "./components";


@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    FlotModule,
    routing
  ],
  declarations:[
    HomeComponent,
    PageOneComponent,
    NewsComponent,
    ProjectComponent,
    PageTwoComponent,
    SiteDataComponent,
    FlotDataComponent,
    VectorMap
  ],
  providers:[

  ],
})
export class HomeModule{

}
