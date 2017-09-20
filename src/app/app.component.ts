import { Component } from '@angular/core';
import { GlobalState } from "./global.state";
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  styleUrls:["./app.component.scss"],
  template:`
    <main [class.menu-collapsed]="isMenuCollapsed" >
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {

  public isMenuCollapsed: boolean = false;

  constructor(private _state:GlobalState){}

  ngOnInit(){
    // 全局
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
}
