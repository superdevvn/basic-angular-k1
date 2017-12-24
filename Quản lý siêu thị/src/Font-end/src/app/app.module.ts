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
import { RoleListComponent } from './main/role-list.component';
import { RoleDetailComponent } from './main/role-detail.component';
import { TestSelectorComponent } from './main/test-selector.component';
import { InputControlComponent } from './main/input.control';
 const routes:Routes =[
  { path: '', redirectTo:'main',pathMatch:'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'role-list', component:RoleListComponent},
      { path: 'role-detail/:id/:name', component:RoleDetailComponent},
      { path: 'user-list', component:UserListComponent},
      { path: 'user-detail', component:UserDetailComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'test-selector', component: TestSelectorComponent },
  
  { path: 'login-test', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserListComponent,
    UserDetailComponent,
    DashboardComponent,
    RoleDetailComponent,
    RoleListComponent,InputControlComponent,
    TestSelectorComponent
  ],
  imports: [
    BrowserModule,FormsModule
   , RouterModule.forRoot(routes),HttpModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
