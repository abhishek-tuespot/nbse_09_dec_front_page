import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantApprovalsComponent } from './important-approvals.component';

describe('ImportantApprovalsComponent', () => {
  let component: ImportantApprovalsComponent;
  let fixture: ComponentFixture<ImportantApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantApprovalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
