import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';
//user
import { UserListComponent } from './main/User/user-list.component';
import { UserDetailComponent } from './main/User/user-detail.component';
//dashboard
import { DashboardComponent } from './main/dashboard.component';
//role
import { RoleListComponent } from './main/Role/role-list.component';
import { RoleDetailComponent } from './main/Role/role-detail.component';
//category
import { CategoryListComponent } from './main/Category/category-list.component';
import { CategoryDetailComponent } from './main/Category/category-detail.component';
//inout
import { InOutListComponent } from './main/InOut/inout-list.component'
import { InOutDetailComponent } from './main/InOut/inout-detail.component'



const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      //role
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-detail', component: RoleDetailComponent },
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
    //user
    UserListComponent,
    UserDetailComponent,
    //role
    RoleListComponent,
    RoleDetailComponent,
    DashboardComponent,
    //category
    CategoryListComponent,
    CategoryDetailComponent,
    //inout
    InOutListComponent,
    InOutDetailComponent,
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
