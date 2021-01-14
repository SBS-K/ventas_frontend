import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BaseService } from 'src/app/core/service/BaseService';
import { environment } from 'src/environments/environment';

import { ArticuloService } from './articulo.service';

describe('ArticuloService', () => {
  let httpMock: HttpTestingController;
  let service: ArticuloService;
  const apiEndpoint = `${environment.endpoint}/articulos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ArticuloService, BaseService ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ArticuloService);
  });

  it('should be created', () => {
    const articuloService: ArticuloService = TestBed.inject(ArticuloService);
    expect(articuloService).toBeTruthy();
  });
});
