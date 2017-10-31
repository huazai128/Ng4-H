import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule,Routes } from "@angular/router";
import { NgaModule } from "@theme/nga.module";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { ContactComponent } from "./contact/contact.component";

const routes:Routes = [
  { path:"contact",component:ContactComponent },
]

@NgModule({
  imports:[
    CommonModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes),
    NgaModule
  ],
  declarations:[
    ContactComponent
  ],
  exports:[
    RouterModule
  ],
  providers:[

  ]
})

export class PageModule{

}
