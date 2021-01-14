import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CompraService } from './compra.service';
import { environment } from 'src/environments/environment';
import { BaseService } from 'src/app/core/service/BaseService';

describe('CompraService', () => {
  let httpMock: HttpTestingController;
  let service: CompraService;
  const apiEndpoint = `${environment.endpoint}/compras`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CompraService, BaseService ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    const compraService: CompraService = TestBed.inject(CompraService);
    expect(compraService).toBeTruthy();
  });
});
