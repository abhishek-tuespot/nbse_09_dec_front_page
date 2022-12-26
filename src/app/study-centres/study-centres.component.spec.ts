import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCentresComponent } from './study-centres.component';

describe('StudyCentresComponent', () => {
  let component: StudyCentresComponent;
  let fixture: ComponentFixture<StudyCentresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyCentresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
