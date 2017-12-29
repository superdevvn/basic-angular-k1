import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { addNewUserComponent } from './main/user/add-new-user.component';
import { CustomerListComponent } from './main/customer/customer-list.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UserListComponent } from './main/user/user-list.component';
import { BarChartComponent } from './main/shared/bar-chart.directive';
import { CategoryComponent } from './main/category/category.component';



const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'add-new-user', component: addNewUserComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'category', component: CategoryComponent }
    ]
  }

];




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    addNewUserComponent,
    CustomerListComponent,
    DashboardComponent,
    UserListComponent,
    BarChartComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
