import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutquaryComponent } from './putquary.component';

describe('PutquaryComponent', () => {
  let component: PutquaryComponent;
  let fixture: ComponentFixture<PutquaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutquaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutquaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
