import { TestBed } from '@angular/core/testing';

import { TvitService } from './tvit.service';

describe('TvitService', () => {
  let service: TvitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
