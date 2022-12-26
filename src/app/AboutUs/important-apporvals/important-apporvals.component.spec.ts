import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantApporvalsComponent } from './important-apporvals.component';

describe('ImportantApporvalsComponent', () => {
  let component: ImportantApporvalsComponent;
  let fixture: ComponentFixture<ImportantApporvalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantApporvalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantApporvalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
