import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../model/application.model';
import { catchError, Observable, throwError } from 'rxjs';
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

interface ApiResponseModel {
    message: string
    result: boolean
    data: any
}

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  // addNewApplication(obj: Application) : Observable<ApiResponseModel> {
  //   return this.http.post<ApiResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication", obj)
  // }

  addNewApplication(applicationData: ApplicationData): Observable<ApiResponseModel> {
    return this.http
      .post<ApiResponseModel>(API_ENDPOINTS.APPLICATION, applicationData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<ApiResponseModel> {
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
