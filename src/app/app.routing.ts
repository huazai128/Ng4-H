import { Routes,RouterModule } from "@angular/router";

const routes:Routes = [
  { path:"",redirectTo:"pages",pathMatch:"full" },
  { path:"**",redirectTo:"pages",pathMatch:"full" }
]

export const routing = RouterModule.forRoot(routes,{useHash:false});
