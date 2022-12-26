import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardVisionComponent } from './board-vision.component';

describe('BoardVisionComponent', () => {
  let component: BoardVisionComponent;
  let fixture: ComponentFixture<BoardVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
