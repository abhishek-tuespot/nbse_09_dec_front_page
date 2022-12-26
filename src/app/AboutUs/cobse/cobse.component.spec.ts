import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobseComponent } from './cobse.component';

describe('CobseComponent', () => {
  let component: CobseComponent;
  let fixture: ComponentFixture<CobseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
