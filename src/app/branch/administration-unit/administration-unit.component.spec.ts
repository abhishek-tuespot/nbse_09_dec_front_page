import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUnitComponent } from './administration-unit.component';

describe('AdministrationUnitComponent', () => {
  let component: AdministrationUnitComponent;
  let fixture: ComponentFixture<AdministrationUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
