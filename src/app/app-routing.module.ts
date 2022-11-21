import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CheckboxCategoriesServiceModule } from './services/checkbox-categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductListComponent }, {
    path: 'categories',
    component: CategoriesComponent }, {
    path: 'checkbox-categories',
    component: CategoriesListComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoriesComponentModule, CategoriesServiceModule, CategoriesListComponentModule, CheckboxCategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


