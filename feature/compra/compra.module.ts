import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './component/compra/compra.component';
import { CompraCrearComponent } from './component/compra-crear/compra-crear.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByIdPipe } from 'src/app/shared/pipes/orderById/order-by-id.pipe';
import { DetalleCompraModule } from '../detalle-compra/detalle-compra.module';


@NgModule({
  declarations: [
    CompraComponent, 
    CompraCrearComponent,
    OrderByIdPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CompraRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DetalleCompraModule
  ],
  providers: [
    OrderByIdPipe
  ]
})
export class CompraModule { }
