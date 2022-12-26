import { TestBed } from '@angular/core/testing';

import { GovtnotificationService } from './govtnotification.service';

describe('GovtnotificationService', () => {
  let service: GovtnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovtnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
