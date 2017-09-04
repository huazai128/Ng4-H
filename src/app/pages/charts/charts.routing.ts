import { RouterModule,Routes } from "@angular/router";
import { ChartsComponent } from "./charts.component";
import { EchartsComponent } from "./echarts/echarts.component";
import { FlotComponent } from "./flot/flot.component";

const routes:Routes = [
  {
    path:"",
    component:ChartsComponent,
    children:[
      { path:"",redirectTo:"echarts",pathMatch:'full' },
      { path:"echarts",component:EchartsComponent },
      { path:"flot",component:FlotComponent },
    ]
  }
]

export const routing = RouterModule.forChild(routes)
