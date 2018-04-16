import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';

import { HomeComponent } from './pages/home/home.component';
import { DashboardEcommerceComponent } from './pages/dashboard-ecommerce/dashboard-ecommerce.component';

import { LoginComponent } from './pages/login/login.component';
import { Login2Component } from './pages/login-2/login-2.component';
import { Login3Component } from './pages/login-3/login-3.component';
import { Login4Component } from './pages/login-4/login-4.component';
import { Login5Component } from './pages/login-5/login-5.component';
import { LockscreenComponent } from './pages/lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error4042Component } from './pages/error-404-2/error-404-2.component';
import { Error403Component } from './pages/error-403/error-403.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "children": [
            {
                path: "index",
                component: HomeComponent
            },
            {
                path: "dashboard_ecommerce",
                component: DashboardEcommerceComponent
            },
            {
                path: "profile",
                component: ProfileComponent
            },
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "login-2",
        "component": Login2Component
    },
    {
        "path": "login-3",
        "component": Login3Component
    },
    {
        "path": "login-4",
        "component": Login4Component
    },
    {
        "path": "login-5",
        "component": Login5Component
    },
    {
        "path": "lockscreen",
        "component": LockscreenComponent
    },
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_404-2",
        "component": Error4042Component
    },
    {
        "path": "error_403",
        "component": Error403Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "maintenance",
        "component": MaintenanceComponent
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    DashboardEcommerceComponent,
    LoginComponent,
    Login2Component,
    Login3Component,
    Login4Component,
    Login5Component,
    LockscreenComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    Error404Component,
    Error4042Component,
    Error403Component,
    Error500Component,
    MaintenanceComponent,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
