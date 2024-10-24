import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: ProductListComponent }, // Página inicial
  { path: 'plan/:id/:type', component: ProductDetailComponent }, // Detalhes do plano
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
