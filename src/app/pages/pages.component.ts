import { Component,ViewEncapsulation } from '@angular/core';
import { Routes } from "@angular/router";
import { BaMenuService } from "../theme";
import { PAGES_MENU } from "./pages.menu";

@Component({
  selector: 'app-pages',
  template:`    
    <ba-sidebar></ba-sidebar>
    <ba-navbbar-top></ba-navbbar-top>
    <ba-config></ba-config>
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})

export class PagesComponent{

  constructor(private _menuService:BaMenuService){}

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }
}
