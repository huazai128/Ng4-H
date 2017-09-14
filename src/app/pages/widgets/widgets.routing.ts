import { Routes,RouterModule } from "@angular/router";
import { WidgetsComponent } from "./widgets.component";

const routes:Routes = [
  {path:"",component:WidgetsComponent}
]

export const routing = RouterModule.forChild(routes)
