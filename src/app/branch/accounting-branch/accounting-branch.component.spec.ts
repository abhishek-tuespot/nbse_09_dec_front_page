import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingBranchComponent } from './accounting-branch.component';

describe('AccountingBranchComponent', () => {
  let component: AccountingBranchComponent;
  let fixture: ComponentFixture<AccountingBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountingBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
