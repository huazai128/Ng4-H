import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from"@angular/platform-browser/animations";

import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { PagesModule } from "./pages/pages.module";
import { NgaModule } from "./theme/nga.module";

import { routing } from "./app.routing";

import { GlobalState } from "./global.state";
import { AppService } from "./app.service";

const APP_PROVIDERS = [
  GlobalState,
  AppService
]

@NgModule({
  imports: [
    BrowserModule,
    PagesModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgaModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [...APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
