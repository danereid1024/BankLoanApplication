import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ApiResponseModel,
  Application,
  Loan,
} from '../../model/application.model';
import { MainService } from '../../service/main.service';
import { BankService } from '../../service/bank.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.scss'],
})
export class LoanApplicationComponent implements OnInit{

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.bankService.getBanks().subscribe(
      (data) => {
        this.banks = data.map((bank) => bank.name);
      },
      (error) => {
        console.error('Error fetching banks', error);
      }
    );
  }

  banks: String[] = []
  selectedBanks: string = ''
  application: Application = new Application();
  loan: Loan = new Loan();
  masterService = inject(MainService);
  
  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.unshift(newObj);
    // Reset the loan object to clear the form after adding
    this.loan = new Loan();
  }
  
  onSubmit() {
    // Add the loan to the application before submitting
    this.addLoan();

    this.masterService.addNewApplication(this.application).subscribe(
      (Result: ApiResponseModel) => {
        if (Result.result) {
          alert('Application Success');
          // Optionally, reset the application object here if needed
          this.application = new Application();
        } else {
          alert(Result.message);
        }
      },
      (error) => {
        alert(error);
      }
    );
    
    this.masterService.addnewLoan(this.loan).subscribe(
      (Result: ApiResponseModel) => {
        if (Result.result) {
          alert('Loan Success');
          this.loan = new Loan();
        } else {
          alert(Result.message);
        }
      },
      (error) => {
        alert(error);
      }
    )
  }
}
