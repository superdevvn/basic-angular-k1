import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard.component';

import { RoleListComponent } from './role/role-list.component';
import { RoleDetailComponent } from './role/role-detail.component';
import { RoleService } from './role/service/role.service';

import { AccountsListComponent } from './customers/account-list.component';
import { ProfileComponent } from './customers/profile.component';
import { CardListComponent } from './customers/card-list.component';
import { GoldCardComponent } from './customers/gold-card.component';

import { ApiService } from './api.service';


import { UserDetailComponent } from './user/user-detail.component';
import { UserListComponent } from './user/user-list.component';
import { UserService } from './user/service/user.service';

import { ManufacturerService } from './manufacturer/service/manufacturer.service';
import { ManufacturerDetailComponent } from './manufacturer/manufacturer-detail.component';
import { ManufacturerListComponent } from './manufacturer/manufacturer-list.component';


const routes: Routes = [
  { path: '', redirectTo:'main',pathMatch:'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'account-list', component:AccountsListComponent},
      { path: 'role-list', component:RoleListComponent},
      { path: 'role-detail/:id', component:RoleDetailComponent},
      { path: 'user-list', component:UserListComponent},
      { path: 'user-detail/:id', component:UserDetailComponent},
      { path: 'profile', component:ProfileComponent},
      { path: 'card-list', component:CardListComponent},
      { path: 'gold-card', component:GoldCardComponent},
      { path: 'manufacturer-list', component:ManufacturerListComponent},
      { path: 'manufacturer-detail/:id', component:ManufacturerDetailComponent},
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
    UserDetailComponent,
    UserListComponent,
    RoleListComponent,
    RoleDetailComponent,
    DashboardComponent,
    AccountsListComponent,
    ProfileComponent,
    CardListComponent,
    GoldCardComponent,
    ManufacturerDetailComponent,
    ManufacturerListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ApiService,RoleService,UserService,ManufacturerService],

  bootstrap: [AppComponent]
})
export class AppModule { }
