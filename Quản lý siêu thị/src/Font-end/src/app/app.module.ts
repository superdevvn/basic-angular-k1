import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './authorize/login.component';
import { MainComponent } from './main/main.component';

import { DashboardComponent } from './main/dashboard.component';
import { RoleListComponent } from './Role/role-list.component';
import { RoleDetailComponent } from './Role/role-detail.component';
import { FishListComponent } from './products/fish-list.component';
import { AccountsListComponent } from './customers/account-list.component';
import { ProfileComponent } from './customers/profile.component';
import { ShirtListComponent } from './products/shirt-list.component';
import { TableListComponent } from './products/table-list.component';
import { CardListComponent } from './customers/card-list.component';
import { GoldCardComponent } from './customers/gold-card.component';
import { ApiService } from './api.service';
import { RoleService } from './Role/service/role.service';
<<<<<<< HEAD
import { UserDetailComponent } from './User/user-detail.component';
import { UserListComponent } from './User/user-list.component';
import { UserService } from './User/service/user.service';
=======
import { ManufacturerService } from './Manufacturer/service/manufacturer.service';
import { ManufacturerDetailComponent } from './Manufacturer/manufacturer-detail.component';
import { ManufacturerListComponent } from './Manufacturer/manufacturer-list.component';
>>>>>>> 71013672dfb4e9a1a293749fb741df5757f67760

const routes: Routes = [
  { path: '', redirectTo:'main',pathMatch:'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'fish-list', component:FishListComponent},
      { path: 'account-list', component:AccountsListComponent},
      { path: 'role-list/:id', component:RoleListComponent},
      { path: 'role-detail', component:RoleDetailComponent},
      { path: 'user-list', component:UserListComponent},
      { path: 'user-detail/:id', component:UserDetailComponent},
      { path: 'profile', component:ProfileComponent},
      { path: 'table-list', component:TableListComponent},
      { path: 'shirt-list', component:ShirtListComponent},
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
    FishListComponent,
    AccountsListComponent,
    ProfileComponent,ShirtListComponent,
    TableListComponent,
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
<<<<<<< HEAD
  providers: [ApiService,RoleService,UserService],
=======
  providers: [ApiService,RoleService,ManufacturerService],
>>>>>>> 71013672dfb4e9a1a293749fb741df5757f67760
  bootstrap: [AppComponent]
})
export class AppModule { }
