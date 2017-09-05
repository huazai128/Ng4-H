import { Component,ViewEncapsulation } from "@angular/core";


@Component({
  selector:"page-email",
  template:`
    <div class="row" style="margin-top: 10px;">
      <div class="col-lg-3 col-md-3">
        <page-navbar></page-navbar>
      </div>
      <div class="col-lg-9 col-md-9">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  encapsulation:ViewEncapsulation.None
})

export class EmailComponent{

  constructor(){}

}
