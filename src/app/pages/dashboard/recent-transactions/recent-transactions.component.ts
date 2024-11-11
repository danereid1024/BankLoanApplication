import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Transaction {
  recipientName: string;
  amount: number;
  date: string;
  type: 'Credit' | 'Debit';
  status: 'Successful' | 'Failed';
}
@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
})
export class RecentTransactionsComponent {
  transactions: Transaction[] = [
    {
      recipientName: 'Ronald Richards',
      amount: 15500,
      date: '12 Oct, 2023',
      type: 'Credit',
      status: 'Successful',
    },
    {
      recipientName: 'Jane Cooper',
      amount: 27000,
      date: '12 Oct, 2023',
      type: 'Debit',
      status: 'Failed',
    },
  ];
}
