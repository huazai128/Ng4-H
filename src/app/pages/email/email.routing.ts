import { Routes,RouterModule } from "@angular/router";
import { EmailComponent } from "./email.component";
import { InboxComponent } from "./inbox/inbox.component";

const routes:Routes = [
  { path:"",
    component:EmailComponent,
    children:[
      { path:"",redirectTo:"inbox",pathMatch:"full" },
      { path:"inbox",component:InboxComponent }
    ]
  }
]

export const routing = RouterModule.forChild(routes);
