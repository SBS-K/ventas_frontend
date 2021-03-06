import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './component/articulo/articulo.component';


@NgModule({
  declarations: [ArticuloComponent],
  imports: [
    CommonModule,
    ArticuloRoutingModule
  ]
})
export class ArticuloModule { }
