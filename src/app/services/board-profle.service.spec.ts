import { TestBed } from '@angular/core/testing';

import { BoardProfleService } from './board-profle.service';

describe('BoardProfleService', () => {
  let service: BoardProfleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardProfleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
