import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./feature/home/home.module').then( module => module.HomeModule) },
  { path: 'articulo', loadChildren: () => import('./feature/articulo/articulo.module').then( module => module.ArticuloModule) },
  { path: 'compra', loadChildren: () => import('./feature/compra/compra.module').then( module => module.CompraModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
