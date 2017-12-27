import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './main/user-list.component';
import { UserDetailComponent } from './main/user-detail.component';
import { DashboardComponent } from './main/dashboard.component';
import { RoleListComponent } from './main/Role/role-list.component';
import { RoleDetailComponent } from './main/Role/role-detail.component';
import { CategoryListComponent } from './main/Category/category-list.component';
import { CategoryDetailComponent } from './main/Category/category-detail.component';
import { InOutListComponent } from './main/InOut/inout-list.component'
import { InOutDetailComponent } from './main/InOut/inout-detail.component'
import { HomewordComponent } from './main/homework.component';
import { Homewordmodel1page1Component } from './main/homewordmodel1page1.component';
import { Homewordmodel1page2Component } from './main/homewordmodel1page2.component';
import { Homewordmodel2page1Component } from './main/homewordmodel2page1.component';
import { Homewordmodel2page2Component } from './main/homewordmodel2page2.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'homework', component: HomewordComponent },
      { path: 'role-detail', component: RoleDetailComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-detail', component: UserDetailComponent },
      { path: 'model1-page1', component: Homewordmodel1page1Component },
      { path: 'model1-page2', component: Homewordmodel1page2Component },
      { path: 'model2-page1', component: Homewordmodel2page1Component },
      { path: 'model2-page2', component: Homewordmodel2page2Component },
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-detail', component: CategoryDetailComponent },
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
    HomewordComponent,
    Homewordmodel1page1Component,
    Homewordmodel1page2Component,
    Homewordmodel2page1Component,
    Homewordmodel2page2Component,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
