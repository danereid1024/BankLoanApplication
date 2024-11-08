import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan-benefits.component.html',
  styleUrl: './loan-benefits.component.scss',
})
export class LoanBenefitsComponent {
  benefits = [
    {
      title: 'Consolidate Debt',
      description: 'Combine your debt into a single payment.',
    },
    { title: 'Home Improvement', description: 'Fund your next home project.' },
    {
      title: 'Emergency Expenses',
      description: 'Cover unexpected expenses quickly.',
    },
  ];
}
