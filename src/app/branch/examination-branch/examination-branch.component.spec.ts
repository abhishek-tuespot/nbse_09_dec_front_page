import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationBranchComponent } from './examination-branch.component';

describe('ExaminationBranchComponent', () => {
  let component: ExaminationBranchComponent;
  let fixture: ComponentFixture<ExaminationBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
