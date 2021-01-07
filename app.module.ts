import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ArticuloModule } from './feature/articulo/articulo.module';
import { CompraModule } from './feature/compra/compra.module';
import { HomeModule } from './feature/home/home.module';
import { NotFoundModule } from './feature/not-found/not-found.module';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalleCompraModule } from './feature/detalle-compra/detalle-compra.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ArticuloModule,
    CompraModule,
    DetalleCompraModule,
    NotFoundModule
  ],
  providers: [
    NgbActiveModal
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
