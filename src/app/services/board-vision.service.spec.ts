import { TestBed } from '@angular/core/testing';

import { BoardVisionService } from './board-vision.service';

describe('BoardVisionService', () => {
  let service: BoardVisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardVisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
