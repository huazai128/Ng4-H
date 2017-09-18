import { Routes,RouterModule } from "@angular/router";
import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component"

const routes:Routes = [
  {
    path:"",
    component:NewComponent,
    children:[
      { path:"",redirectTo:"nestable_list",pathMatch:"full" },
      { path:"nestable_list",component:NestableComponent }
    ]
  }
]

export const routing = RouterModule.forChild(routes);
