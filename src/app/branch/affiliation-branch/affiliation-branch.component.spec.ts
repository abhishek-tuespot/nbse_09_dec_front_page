import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationBranchComponent } from './affiliation-branch.component';

describe('AffiliationBranchComponent', () => {
  let component: AffiliationBranchComponent;
  let fixture: ComponentFixture<AffiliationBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliationBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliationBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
