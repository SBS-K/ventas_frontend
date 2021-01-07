import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../BaseService';

@Injectable({
  providedIn: 'root'
})
export class TRMService extends BaseService {

  private url_TMR = 'https://trm-colombia.vercel.app';

  constructor(protected http: HttpClient) { super(http); }

  /**
   * Consultar TRM del dia actual Colombia
   */
  public consultar(date: String) {
      return this.doGet<any>(`${this.url_TMR}/?date=${date}`);
  }
}
