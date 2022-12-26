import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideBarContantComponent } from './right-side-bar-contant.component';

describe('RightSideBarContantComponent', () => {
  let component: RightSideBarContantComponent;
  let fixture: ComponentFixture<RightSideBarContantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideBarContantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideBarContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
