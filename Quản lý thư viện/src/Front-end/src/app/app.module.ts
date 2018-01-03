import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { LoginService } from './authorize/service/login.service';
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
import { InOutListComponent } from './main/InOut/inout-list.component';
import { InOutDetailComponent } from './main/InOut/inout-detail.component';
import { ApiService } from './api.service';
import { RoleService } from './main/Role/service/role.service';


import { CategoryService } from './main/Category/service/category.service';
import { UserService } from './main/User/service/user.service';
import { InOutService } from './main/InOut/service/inout.service';
//Book
import { BookListComponent } from './main/Book/book-list.component';
import { BookDetailComponent } from './main/Book/book-detail.component';
import { BookService } from './main/Book/service/book.service';
//customer

import { CustomerListComponent } from './main/Customer/customer-list.component';
import { CustomerDetailComponent } from './main/Customer/customer-detail.component';
import { CustomerService } from './main/Customer/service/customer.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
      { path: 'user-detail/:id', component: UserDetailComponent },
      //category
      { path: 'category-list', component: CategoryListComponent },
      { path: 'category-detail/:id', component: CategoryDetailComponent },
      //inout
      { path: 'inout-list', component: InOutListComponent },
      { path: 'inout-detail/:id', component: InOutDetailComponent },
      //book

       { path: 'book-list', component: BookListComponent },
       { path: 'book-detail/:id', component: BookDetailComponent },
       //customer
       { path : 'customer-list', component: CustomerListComponent },
       { path : 'customer-detail/:id', component: CustomerDetailComponent },
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
    BookListComponent,
    BookDetailComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ApiService, RoleService, CategoryService, UserService, InOutService, BookService, CustomerService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
