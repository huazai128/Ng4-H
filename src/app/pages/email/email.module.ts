import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgaModule } from "../../theme/nga.module";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { PaginationModule } from "ngx-bootstrap";

import { EmailComponent } from "./email.component";
import { NavbarComponent } from "./navbar";
import { InboxComponent } from "./inbox/inbox.component";
import { InboxService} from "./inbox/inbox.service";
import { CheckEmailComponent } from "./checkEmail";
import { ComposeComponent } from "./compose";

import { routing } from "./email.routing";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    NgaModule,
    routing
  ],
  declarations:[
    EmailComponent,
    NavbarComponent,
    InboxComponent,
    CheckEmailComponent,
    ComposeComponent
  ],
  providers:[
    InboxService
  ]
})

export class EmailModule{

}
