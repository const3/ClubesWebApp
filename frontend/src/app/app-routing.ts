import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { LoginGuard } from './guard';
import { GuestGuard } from './guard';
import { NotFoundComponent } from './not-found';
import { ChangePasswordComponent } from './change-password';
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';


export const routes: Routes = [
  {
    path: '',
    component: SimpleLayoutComponent,
    pathMatch: 'full',
    canActivate: [GuestGuard]
  },
  {
    path: 'dashboard',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'inicio',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'clubes',
        loadChildren: './views/clubes/clubes.module#ClubesModule'
      }
    ],
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [LoginGuard]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
