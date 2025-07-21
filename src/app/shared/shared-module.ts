import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from './sidebar/sidebar';
import { Main } from './main/main';
import { LinkSidebar } from './link-sidebar/link-sidebar';
import { NgIconsModule } from '@ng-icons/core';
import {
  phosphorHouse,
  phosphorCalendarDots,
  phosphorCalendarPlus,
  phosphorUser,
  phosphorSignOut,
} from '@ng-icons/phosphor-icons/regular';

@NgModule({
  declarations: [Sidebar, Main, LinkSidebar],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      phosphorHouse,
      phosphorCalendarDots,
      phosphorCalendarPlus,
      phosphorUser,
      phosphorSignOut,
    }),
  ],

  exports: [Sidebar, Main],
})
export class SharedModule {}
