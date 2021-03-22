import { TestBed } from '@angular/core/testing';

import { FootballDataApiInterceptor } from './football-data-api.interceptor';

describe('FootballDataApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FootballDataApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FootballDataApiInterceptor = TestBed.inject(FootballDataApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
