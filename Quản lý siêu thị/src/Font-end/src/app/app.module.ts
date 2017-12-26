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
import { FishListComponent } from './products/fish-list.component';
import { AccountsListComponent } from './customers/account-list.component';
import { ProfileComponent } from './customers/profile.component';

const routes: Routes = [
  { path: '', redirectTo:'main',pathMatch:'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'fish-list', component:FishListComponent},
      { path: 'account-list', component:AccountsListComponent},
      { path: 'role-list', component:RoleListComponent},
      { path: 'role-detail', component:RoleDetailComponent},
      { path: 'user-list', component:UserListComponent},
      { path: 'user-detail', component:UserDetailComponent},
      { path: 'profile', component:ProfileComponent}
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
    FishListComponent,
    AccountsListComponent,
    ProfileComponent,
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
