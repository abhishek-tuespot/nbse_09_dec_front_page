import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBarContentComponent } from './left-side-bar-content.component';

describe('LeftSideBarContentComponent', () => {
  let component: LeftSideBarContentComponent;
  let fixture: ComponentFixture<LeftSideBarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideBarContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
