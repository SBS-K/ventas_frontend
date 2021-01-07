import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/BaseService';
import { DetalleCompra } from 'src/app/shared/models/detalle-compra/detalle-compra';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService extends BaseService {

  private prefix: String = 'detalleCompras';

  constructor( protected http: HttpClient ) { super(http); }

  /**
   * Consultar Detalle Compras
   */
  public consultar() {
    return this.doGet<DetalleCompra[]>(`${environment.endpoint}/${this.prefix}`);
  }

  /**
   * Consultar Detalle Compras
   */
  public consultarByCompraId(compraId: String) {
    return this.doGet<DetalleCompra[]>(`${environment.endpoint}/${this.prefix}/byCompraId/${compraId}`);
  }

}
