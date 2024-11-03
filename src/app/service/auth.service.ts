import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_ENDPOINTS } from '../constants/api-constants';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(userData: RegisterData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(API_ENDPOINTS.REGISTER, userData)
      .pipe(catchError(this.handleError));
  }

  loginUser(loginData: LoginData): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(API_ENDPOINTS.LOGIN, loginData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code ${error.status}, message: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
