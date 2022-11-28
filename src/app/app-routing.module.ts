import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatsComponent } from './components/cats/cats.component';
import { AgeComponent } from './components/age/age.component';
import { ProductIdComponent } from './components/product-id/product-id.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CheckboxCategoriesServiceModule } from './services/checkbox-categories.service-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { CategoriesMenuServiceModule } from './services/categories-menu.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { ProductSearchComponentModule } from './components/product-search/product-search.component-module';
import { ProductSearchServiceModule } from './services/product-search.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { CreateEmployeeComponentModule } from './components/create-employee/create-employee.component-module';
import { CreateEmployeeServiceModule } from './services/create-employee.service-module';
import { LoginComponentModule } from './components/login/login.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterComponentModule } from './components/register/register.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { CatsComponentModule } from './components/cats/cats.component-module';
import { CatsServiceModule } from './services/cats.service-module';
import { AgeComponentModule } from './components/age/age.component-module';
import { AgeServiceModule } from './services/age.service-module';
import { ProductIdComponentModule } from './components/product-id/product-id.component-module';
import { ProductidServiceModule } from './services/productid.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products', component: ProductListComponent }, {
    path: 'categories', component: CategoriesComponent }, {
    path: 'checkbox-categories', component: CategoriesListComponent }, {
    path: 'categories-menu', component: CategoriesMenuComponent }, {
    path: 'crypto', component: CryptoComponent }, {
    path: 'public-holidays', component: PublicHolidaysComponent }, {
    path: 'product-search', component: ProductSearchComponent }, {
    path: 'create-product', component: ProductFormComponent }, {
    path: 'create-employee', component: CreateEmployeeComponent }, {
    path: 'login', component: LoginComponent }, {
    path: 'register', component: RegisterComponent }, {
    path: 'cat-fact', component: CatsComponent }, {
    path: 'age/:name', component: AgeComponent }, {
    path: 'product/:id', component: ProductIdComponent
  }]), ProductListComponentModule, ProductsServiceModule, CategoriesComponentModule, CategoriesServiceModule, CategoriesListComponentModule, CheckboxCategoriesServiceModule, CategoriesMenuComponentModule, CategoriesMenuServiceModule, CryptoComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, PublicHolidaysServiceModule, ProductSearchComponentModule, ProductSearchServiceModule, ProductFormComponentModule, CreateEmployeeComponentModule, CreateEmployeeServiceModule, LoginComponentModule, LoginServiceModule, RegisterComponentModule, RegisterServiceModule, CatsComponentModule, CatsServiceModule, AgeComponentModule, AgeServiceModule, ProductIdComponentModule, ProductidServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


