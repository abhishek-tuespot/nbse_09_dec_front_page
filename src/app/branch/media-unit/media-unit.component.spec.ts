import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaUnitComponent } from './media-unit.component';

describe('MediaUnitComponent', () => {
  let component: MediaUnitComponent;
  let fixture: ComponentFixture<MediaUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
