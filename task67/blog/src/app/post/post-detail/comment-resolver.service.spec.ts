import { TestBed } from '@angular/core/testing';

import { CommentResolverService } from './comment-resolver.service';

describe('ComponentResolverService', () => {
  let service: CommentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
