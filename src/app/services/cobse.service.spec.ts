import { TestBed } from '@angular/core/testing';

import { CobseService } from './cobse.service';

describe('CobseService', () => {
  let service: CobseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
