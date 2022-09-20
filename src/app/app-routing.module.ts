import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"products/products-create",
    component:ProductsCreateComponent,
  },
  {
    path:"product-crud",
    component:ProductCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
