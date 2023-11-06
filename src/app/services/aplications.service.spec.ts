import { TestBed } from '@angular/core/testing';

import { AplicationsService } from './aplications.service';

describe('AplicationsService', () => {
  let service: AplicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
