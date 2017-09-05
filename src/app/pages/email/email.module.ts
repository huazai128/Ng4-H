import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";

import { EmailComponent } from "./email.component";
import { NavbarComponent } from "./navbar";
import { InboxComponent } from "./inbox/inbox.component";

import { routing } from "./email.routing";

@NgModule({
  imports:[
    CommonModule,
    NgaModule,
    routing
  ],
  declarations:[
    EmailComponent,
    NavbarComponent,
    InboxComponent
  ],
  providers:[

  ]
})

export class EmailModule{

}
