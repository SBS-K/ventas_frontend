import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompraCrearComponent } from './component/compra-crear/compra-crear.component';
import { CompraComponent } from './component/compra/compra.component';

const routes: Routes = [
  { path: '', component: CompraComponent },
  { path: 'crear', component: CompraCrearComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
