import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PageOneComponent,PageTwoComponent } from "./components";

const routes:Routes = [
  { path:"",
    component:HomeComponent,
    children:[
      {path:"" ,redirectTo:"one",pathMatch:"full"},
      {path:'one',component:PageOneComponent},
      {path:'two',component:PageTwoComponent},
    ]
  }
]

export const routing = RouterModule.forChild(routes);
