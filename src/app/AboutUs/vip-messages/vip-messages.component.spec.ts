import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipMessagesComponent } from './vip-messages.component';

describe('VipMessagesComponent', () => {
  let component: VipMessagesComponent;
  let fixture: ComponentFixture<VipMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VipMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VipMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
