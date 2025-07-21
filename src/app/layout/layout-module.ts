import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    SharedModule
  ],

  exports: [
    Layout
  ]
})
export class LayoutModule { }
