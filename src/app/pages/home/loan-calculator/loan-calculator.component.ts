import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss',
})
export class LoanCalculatorComponent {
  amount = 10000;
  term = 12;
  rate = 7.49;

  calculateMonthlyPayment(): number {
    const monthlyRate = this.rate / 100 / 12;
    return (
      (this.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -this.term))
    );
  }
}
