import { Routes,RouterModule } from "@angular/router";
import { NewComponent } from "./new.component";
import { NestableComponent } from "./nestable/nestable.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { CodemirrorCompoent } from "./codemirror/codemirror.compoent";
import { TreeComponent } from "./tree/tree.component";

const routes:Routes = [
  {
    path:"",
    component:NewComponent,
    children:[
      { path:"",redirectTo:"nestable_list",pathMatch:"full" },
      { path:"nestable_list",component:NestableComponent },
      { path:"timeline",component:TimelineComponent },
      { path:"codemirror",component:CodemirrorCompoent },
      { path:"tree",component:TreeComponent },
    ]
  }
]

export const routing = RouterModule.forChild(routes);
