import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";
import { NgaModule } from "@theme/nga.module";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { ContentComponent } from "./content/content.component";

const routes:Routes = [
  { path:"contact",component:ContentComponent },
]

@NgModule({
  imports:[
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    NgaModule
  ],
  declarations:[
    ContentComponent
  ],
  exports:[
    RouterModule
  ],
  providers:[

  ]
})

export class PageModule{

}
