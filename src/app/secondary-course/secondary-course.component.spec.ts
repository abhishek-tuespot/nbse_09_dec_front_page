import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryCourseComponent } from './secondary-course.component';

describe('SecondaryCourseComponent', () => {
  let component: SecondaryCourseComponent;
  let fixture: ComponentFixture<SecondaryCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
