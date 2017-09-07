import { Routes,RouterModule } from "@angular/router";
import { EmailComponent } from "./email.component";
import { InboxComponent } from "./inbox/inbox.component";
import { CheckEmailComponent } from "./checkEmail";

const routes:Routes = [
  { path:"",
    component:EmailComponent,
    children:[
      { path:"",redirectTo:"inbox",pathMatch:"full" },
      { path:"inbox",component:InboxComponent },
      { path:"detail",component:CheckEmailComponent }
    ]
  }
]

export const routing = RouterModule.forChild(routes);
