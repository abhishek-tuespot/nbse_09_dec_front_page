import { TestBed } from '@angular/core/testing';

import { ChairmanMessageService } from './chairman-message.service';

describe('ChairmanMessageService', () => {
  let service: ChairmanMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChairmanMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
