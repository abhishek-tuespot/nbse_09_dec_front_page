import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerCellComponent } from './computer-cell.component';

describe('ComputerCellComponent', () => {
  let component: ComputerCellComponent;
  let fixture: ComponentFixture<ComputerCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
