import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeinorSecondaryCourseComponent } from './seinor-secondary-course.component';

describe('SeinorSecondaryCourseComponent', () => {
  let component: SeinorSecondaryCourseComponent;
  let fixture: ComponentFixture<SeinorSecondaryCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeinorSecondaryCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeinorSecondaryCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
