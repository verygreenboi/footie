import { TestBed } from '@angular/core/testing';

import { IsLoggedOutGuard } from './is-logged-out.guard';

describe('IsLoggedOutGuard', () => {
  let guard: IsLoggedOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
