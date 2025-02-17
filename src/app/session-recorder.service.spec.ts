import { TestBed } from '@angular/core/testing';

import { SessionRecorderService } from './session-recorder.service';

describe('SessionRecorderService', () => {
  let service: SessionRecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionRecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
