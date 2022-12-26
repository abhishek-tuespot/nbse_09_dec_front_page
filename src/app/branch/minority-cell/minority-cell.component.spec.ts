import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorityCellComponent } from './minority-cell.component';

describe('MinorityCellComponent', () => {
  let component: MinorityCellComponent;
  let fixture: ComponentFixture<MinorityCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorityCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorityCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
