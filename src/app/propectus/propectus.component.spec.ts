import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropectusComponent } from './propectus.component';

describe('PropectusComponent', () => {
  let component: PropectusComponent;
  let fixture: ComponentFixture<PropectusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropectusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
