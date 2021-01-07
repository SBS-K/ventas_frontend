import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/service/BaseService';
import { Articulo } from 'src/app/shared/models/articulo/articulo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService extends BaseService {

  private prefix: String = 'articulos';

  constructor( protected http: HttpClient ) { super(http); }

  /**
   * Consultar Articulos
   */
  public consultar() {
    return this.doGet<Articulo[]>(`${environment.endpoint}/${this.prefix}`);
  }

}
