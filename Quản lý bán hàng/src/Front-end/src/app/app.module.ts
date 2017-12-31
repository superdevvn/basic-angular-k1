import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { addNewUserComponent } from './main/user/add-new-user.component';
import { CustomerListComponent } from './main/customer/customer-list.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UserListComponent } from './main/user/user-list.component';

import { CategoryComponent } from './main/category/category.component';
import { RoleDetailComponent } from './main/role/role-detail.component';
import { RoleListComponent } from './main/role/role-list.component';

import { LoginComponent } from './authorize/login.component';
import { ApiService } from './api.service';
import { RoleService } from './main/role/service/role.service';
import { ManufacturerService } from './main/manufaturer/service/manufacturer.service';
import { ManufacturerListComponent } from './main/manufaturer/manufacturer-list.component';
import { ManufacturerDetailComponent } from './main/manufaturer/manufacturer-detail.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'manufacturer-list', pathMatch: 'full' },
      //dashboard
      { path: 'dashboard', component: DashboardComponent },
      //customer-list
      { path: 'customer-list', component: CustomerListComponent },
      //user
      { path: 'add-new-user', component: addNewUserComponent },
      { path: 'user-list', component: UserListComponent },
      //user
      { path: 'category', component: CategoryComponent },
      //role
      { path: 'role-detail/:id', component: RoleDetailComponent },
      { path: 'role-list', component: RoleListComponent },
      //manufacturer
      { path: 'manufacturer-detail/:id', component: ManufacturerDetailComponent },
      { path: 'manufacturer-list', component: ManufacturerListComponent },
    ]
  }

];




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    addNewUserComponent,
    CustomerListComponent,
    DashboardComponent,
    UserListComponent,
    CategoryComponent,
    RoleDetailComponent,
    RoleListComponent,
    LoginComponent,
    ManufacturerListComponent,
    ManufacturerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoleService, ApiService, ManufacturerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
