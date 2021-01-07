import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleCompraRoutingModule } from './detalle-compra-routing.module';
import { DetalleCompraComponent } from './modal/detalle-compra/detalle-compra.component';


@NgModule({
  declarations: [
    DetalleCompraComponent
  ],
  imports: [
    CommonModule,
    DetalleCompraRoutingModule
  ],
  exports: [
    DetalleCompraComponent
  ],
  entryComponents: [
    DetalleCompraComponent
  ]
})
export class DetalleCompraModule { }
