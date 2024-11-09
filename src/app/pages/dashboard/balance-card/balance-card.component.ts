import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss'], // Ensure correct spelling
})
export class BalanceCardComponent {
  @Input() balance: number = 0;
  @Input() accountNumber: string = '';
}
