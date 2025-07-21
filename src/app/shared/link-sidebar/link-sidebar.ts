import { Component, Input, Type } from '@angular/core';

@Component({
  selector: 'app-link-sidebar',
  standalone: false,
  templateUrl: './link-sidebar.html',
  styleUrl: './link-sidebar.css',
})
export class LinkSidebar {
  @Input() nameLink: string = '';
  @Input() iconLink: string = '';
}
