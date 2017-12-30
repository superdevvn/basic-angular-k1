import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';
=======
>>>>>>> e92edc2b4f919b4790202b211eb86f06c91561e7


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { addNewUserComponent } from './main/user/add-new-user.component';
import { CustomerListComponent } from './main/customer/customer-list.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UserListComponent } from './main/user/user-list.component';
import { BarChartComponent } from './main/shared/bar-chart.directive';
import { CategoryComponent } from './main/category/category.component';

=======
import { NewRoleComponent } from './main/new-role.component';
>>>>>>> e92edc2b4f919b4790202b211eb86f06c91561e7


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
<<<<<<< HEAD
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'add-new-user', component: addNewUserComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'category', component: CategoryComponent }
=======
      { path: '', redirectTo: 'new-role', pathMatch: 'full' },
      { path: 'new-role', component: NewRoleComponent }
>>>>>>> e92edc2b4f919b4790202b211eb86f06c91561e7
    ]
  }

];




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
<<<<<<< HEAD
    addNewUserComponent,
    CustomerListComponent,
    DashboardComponent,
    UserListComponent,
    BarChartComponent,
    CategoryComponent
=======
    NewRoleComponent
>>>>>>> e92edc2b4f919b4790202b211eb86f06c91561e7
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    ChartsModule,
=======
>>>>>>> e92edc2b4f919b4790202b211eb86f06c91561e7
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
