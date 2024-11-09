import { Component } from '@angular/core';
import { TransactionFlowComponent } from './transaction-flow/transaction-flow.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { QuickTransferComponent } from './quick-transfer/quick-transfer.component';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TransactionFlowComponent,
    RecentTransactionsComponent,
    QuickTransferComponent,
    BalanceCardComponent,
    SidebarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'], // Ensure correct spelling
})
export class DashboardComponent {
  accountBalance = 1234000.0;
  accountNumber = '0123456789';
  totalTransactionAmount = 1234000.0;
  totalTransactionCount = 234;
}
