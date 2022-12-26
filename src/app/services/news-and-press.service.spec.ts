import { TestBed } from '@angular/core/testing';

import { NewsAndPressService } from './news-and-press.service';

describe('NewsAndPressService', () => {
  let service: NewsAndPressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAndPressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
