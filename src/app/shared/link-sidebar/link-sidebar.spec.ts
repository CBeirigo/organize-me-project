import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSidebar } from './link-sidebar';

describe('LinkSidebar', () => {
  let component: LinkSidebar;
  let fixture: ComponentFixture<LinkSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
