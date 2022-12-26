import { TestBed } from '@angular/core/testing';

import { ImportantApprovalService } from './important-approval.service';

describe('ImportantApprovalService', () => {
  let service: ImportantApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportantApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
