import { Routes,RouterModule } from "@angular/router";
import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component";
import { TimelineComponent } from "./timeline/timeline.component";

const routes:Routes = [
  {
    path:"",
    component:NewComponent,
    children:[
      { path:"",redirectTo:"nestable_list",pathMatch:"full" },
      { path:"nestable_list",component:NestableComponent },
      { path:"timeline",component:TimelineComponent },
    ]
  }
]

export const routing = RouterModule.forChild(routes);
