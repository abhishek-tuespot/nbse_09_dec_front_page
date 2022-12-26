import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationBranchComponent } from './verification-branch.component';

describe('VerificationBranchComponent', () => {
  let component: VerificationBranchComponent;
  let fixture: ComponentFixture<VerificationBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
