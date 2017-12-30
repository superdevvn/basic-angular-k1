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
      { path: 'role-detail/:id', component:RoleDetailComponent},
      { path: 'user-list', component:UserListComponent},
      { path: 'user-detail', component:UserDetailComponent},
      { path: 'profile', component:ProfileComponent},
      { path: 'table-list', component:TableListComponent},
      { path: 'shirt-list', component:ShirtListComponent},
      { path: 'card-list', component:CardListComponent},
      { path: 'gold-card', component:GoldCardComponent},
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
    ProfileComponent,ShirtListComponent,
    TableListComponent,
    CardListComponent,
    GoldCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService,RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
