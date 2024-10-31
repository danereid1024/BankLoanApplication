import { Component } from '@angular/core';
import { RegisterPageComponent } from '../pages/register-page/register-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, RegisterPageComponent, LoginPageComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
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
