import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './main/user/user-list.component';
import { UserDetailComponent } from './main/user/user-detail.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { RoleListComponent } from './main/role/role-list.component';
import { RoleDetailComponent } from './main/role/role-detail.component';
import { TestSelectorComponent } from './test/test-selector.component';
import { InputControlComponent } from './test/input.control';
import { ProductListComponent } from './main/product/product-list.component';
import { CategoryListComponent } from './main/category/category-list.component';
import { SupplierListComponent } from './main/supplier/supplier-list.component';
import { SupplierDetailComponent } from './main/supplier/supplier-detail.component';
import { ApiService } from './api.service';
import { SupplierService } from './main/supplier/service/supplier.service';
import { RoleService } from './main/role/service/role.service';
import { UserService } from './main/user/service/user.service';
import { UnitDetailComponent } from './main/unit/unit-detail.component';
import { UnitListComponent } from './main/unit/unit-list.component';
import { UnitService } from './main/unit/service/unit.service';
import { ProductService } from './main/product/service/product.service';
import { ProductDetailComponent } from './main/product/product-detail.component';
import { CategoryService } from './main/category/service/category.service';
import { CategoryDetailComponent } from './main/category/category-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail/:id', component: UserDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent},
      { path: 'supplier-list', component: SupplierListComponent },
      { path: 'supplier-detail/:id', component: SupplierDetailComponent },
      { path: 'unit-list', component: UnitListComponent},
      { path: 'unit-detail/:id', component: UnitDetailComponent},
      { path: 'category-list', component: CategoryListComponent},
      { path: 'category-detail/:id', component: CategoryDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login-test', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserListComponent,
    UserDetailComponent,
    RoleListComponent,
    RoleDetailComponent,
    DashboardComponent,
    TestSelectorComponent,
    InputControlComponent,
    ProductListComponent,
    ProductDetailComponent,
    CategoryDetailComponent,
    CategoryListComponent,
    SupplierListComponent,
    SupplierDetailComponent,
    UnitDetailComponent,
    UnitListComponent,
    CategoryListComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, SupplierService, RoleService,UserService, UnitService, ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
