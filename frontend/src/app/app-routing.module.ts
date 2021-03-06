import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

//Components Routes
const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent},
  { path: 'update-product/id', component: CreateProductComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
