import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Bank {
  name: String
}

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private apiUrl = 'http://localhost:3000/api/banks';

  constructor(private http: HttpClient) { }

  getBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.apiUrl);
  }
}
