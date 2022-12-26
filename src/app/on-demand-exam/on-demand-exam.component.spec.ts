import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandExamComponent } from './on-demand-exam.component';

describe('OnDemandExamComponent', () => {
  let component: OnDemandExamComponent;
  let fixture: ComponentFixture<OnDemandExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
