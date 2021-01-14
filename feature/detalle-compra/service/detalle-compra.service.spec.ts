import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BaseService } from 'src/app/core/service/BaseService';
import { environment } from 'src/environments/environment';

import { DetalleCompraService } from './detalle-compra.service';

describe('DetalleCompraService', () => {
  let httpMock: HttpTestingController;
  let service: DetalleCompraService;
  const apiEndpoint = `${environment.endpoint}/detalleCompras`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DetalleCompraService, BaseService ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(DetalleCompraService);
  });

  it('should be created', () => {
    const detalleCompraService: DetalleCompraService = TestBed.inject(DetalleCompraService);
    expect(detalleCompraService).toBeTruthy();
  });
});
