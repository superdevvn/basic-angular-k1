import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';

//Dashboard
import { DashboardComponent } from './main/dashboard.component';

//User
import { UserListComponent } from './main/User/user-list.component';
import { UserDetailComponent } from './main/User/user-detail.component';

//Role
import { RoleListComponent } from './main/Role/role-list.component';
import { RoleDetailComponent } from './main/Role/role-detail.component';

//Category
import { CategoryListComponent } from './main/Category/category-list.component';
import { CategoryDetailComponent } from './main/Category/category-detail.component';

//InOut
import { InOutListComponent } from './main/InOut/inout-list.component'
import { InOutDetailComponent } from './main/InOut/inout-detail.component'
import { ApiService } from './api.service';
import { RoleService } from './main/Role/service/role.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      //dashboard
      { path: 'dashboard', component: DashboardComponent },
      //role
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail/:id', component: RoleDetailComponent },
      //user
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail', component: UserDetailComponent },
      //category
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-detail', component: CategoryDetailComponent },
      //inout
      { path: 'inout-list', component: InOutListComponent },
      { path: 'inout-detail', component: InOutDetailComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login-test', component: LoginComponent },
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
    CategoryListComponent,
    CategoryDetailComponent,
    InOutListComponent,
    InOutDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
