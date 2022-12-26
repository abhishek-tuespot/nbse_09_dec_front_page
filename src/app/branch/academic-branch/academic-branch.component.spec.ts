import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicBranchComponent } from './academic-branch.component';

describe('AcademicBranchComponent', () => {
  let component: AcademicBranchComponent;
  let fixture: ComponentFixture<AcademicBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
