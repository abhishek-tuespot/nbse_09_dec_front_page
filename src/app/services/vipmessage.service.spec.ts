import { TestBed } from '@angular/core/testing';

import { VipmessageService } from './vipmessage.service';

describe('VipmessageService', () => {
  let service: VipmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VipmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
