import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { BaseService } from '../BaseService';

import { TRMService } from './trm.service';

describe('TRMService', () => {
  let httpMock: HttpTestingController;
  let service: TRMService;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TRMService, BaseService ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(TRMService);
  });

  it('should be created', () => {
    const trmService: TRMService = TestBed.inject(TRMService);
    expect(trmService).toBeTruthy();
  });
});
