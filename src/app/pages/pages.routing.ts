import { Routes,RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes:Routes = [
  {
    path:"pages",
    component:PagesComponent,
    children:[
      { path:"",redirectTo:"home",pathMatch:"full"},
      { path:"home",loadChildren:"app/pages/home/home.module#HomeModule" },
      { path:"charts",loadChildren:"app/pages/charts/charts.module#ChartsModule" },
      { path:"email",loadChildren:"app/pages/email/email.module#EmailModule" }
    ]
  }
]

export const routing = RouterModule.forChild(routes)
