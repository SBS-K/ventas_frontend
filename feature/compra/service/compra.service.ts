import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/BaseService';
import { Compra } from 'src/app/shared/models/compra/compra';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraService extends BaseService {

  private prefix: String = 'compras';

  constructor( protected http: HttpClient ) { super(http); }

  /**
   * Crear Compra
   */
  public guardar(compra: Compra) {
    return this.doPost<Compra, Number>(`${environment.endpoint}/${this.prefix}`, compra);
  }

  /**
   * Crear Compra
   */
  public actualizar(compra: Compra) {
    return this.doPut<Compra, Number>(`${environment.endpoint}/${this.prefix}/${compra.id}`, compra);
  }

  /**
   * Crear Compra
   */
  public elimianr(compraId: String) {
    return this.doDelete<Compra, Number>(`${environment.endpoint}/${this.prefix}`, compraId);
  }

  /**
   * Consultar Articulos
   */
  public consultar() {
    return this.doGet<Compra[]>(`${environment.endpoint}/${this.prefix}`);
  }

}
