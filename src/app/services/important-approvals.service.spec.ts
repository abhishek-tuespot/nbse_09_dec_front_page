import { TestBed } from '@angular/core/testing';

import { ImportantApprovalsService } from './important-approvals.service';

describe('ImportantApprovalsService', () => {
  let service: ImportantApprovalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportantApprovalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
