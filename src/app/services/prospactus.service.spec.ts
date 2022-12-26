import { TestBed } from '@angular/core/testing';

import { ProspactusService } from './prospactus.service';

describe('ProspactusService', () => {
  let service: ProspactusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProspactusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
