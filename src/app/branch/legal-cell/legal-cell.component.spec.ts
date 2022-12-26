import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalCellComponent } from './legal-cell.component';

describe('LegalCellComponent', () => {
  let component: LegalCellComponent;
  let fixture: ComponentFixture<LegalCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
