import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingBranchComponent } from './printing-branch.component';

describe('PrintingBranchComponent', () => {
  let component: PrintingBranchComponent;
  let fixture: ComponentFixture<PrintingBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintingBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
