import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { IntroGuard } from './intro.guard';

describe('IntroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => IntroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
