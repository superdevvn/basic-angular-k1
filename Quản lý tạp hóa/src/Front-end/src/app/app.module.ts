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
import { AddNewUserComponent } from './main/user/add-new-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail', component: RoleDetailComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail', component: UserDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'add-new-user', component: AddNewUserComponent }
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
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
