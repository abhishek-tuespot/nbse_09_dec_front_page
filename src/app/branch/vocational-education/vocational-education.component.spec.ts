import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalEducationComponent } from './vocational-education.component';

describe('VocationalEducationComponent', () => {
  let component: VocationalEducationComponent;
  let fixture: ComponentFixture<VocationalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocationalEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
