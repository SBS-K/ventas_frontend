import { TestBed } from '@angular/core/testing';

import { TRMService } from './trm.service';

describe('TRMService', () => {
  let service: TRMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TRMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
