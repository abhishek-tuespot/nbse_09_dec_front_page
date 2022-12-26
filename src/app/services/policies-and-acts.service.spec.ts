import { TestBed } from '@angular/core/testing';

import { PoliciesAndActsService } from './policies-and-acts.service';

describe('PoliciesAndActsService', () => {
  let service: PoliciesAndActsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliciesAndActsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
