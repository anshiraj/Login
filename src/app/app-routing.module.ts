import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path: '', component: HomeComponent ,

    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
  { path: '**', component: LoginComponent },
]
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
