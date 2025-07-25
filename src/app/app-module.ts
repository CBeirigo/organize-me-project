import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { LayoutModule } from './layout/layout-module';



@NgModule({
  declarations: [
    App,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
