import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'loan-application', component: LoanApplicationComponent },
  { path: 'auth', component: AuthComponent },
];
