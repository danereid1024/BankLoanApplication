import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [CommonModule, LoginPageComponent, RegisterPageComponent],
})
export class AuthComponent {
  showLogin = true;

  toggleView() {
    this.showLogin = !this.showLogin;
  }

  onGoogleLogin() {
    console.log('Google login clicked');
  }
}
