import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-constants';

interface ApplicationData {
  applicantID: number
  fullName: string
  applicationStatus: string
  panCard: string
  dateOfBirth: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  annualIncome: number
  employmentStatus: string
  creditScore: number
  assets: string
  dateApplied: Date
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  applicationForm(applicationData: ApplicationData): Observable<ApplicationData> {
    return this.http.post<ApplicationData>(API_ENDPOINTS.APPLICATION, applicationData).pipe(catchError(this.handleError))
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
