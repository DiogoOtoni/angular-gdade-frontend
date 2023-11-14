import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { jobsResolver } from './jobs.resolver';

describe('jobsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => jobsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
