import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Contact {
  name: string;
  accountNumber: string;
  bankName: string;
  avatar: string;
}

@Component({
  selector: 'app-quick-transfer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-transfer.component.html',
  styleUrl: './quick-transfer.component.scss',
})
export class QuickTransferComponent {
  contacts: Contact[] = [
    {
      name: 'Leslie Alexander',
      accountNumber: '0123456789',
      bankName: 'Wells Fargo',
      avatar: 'assets/avatars/leslie.jpg',
    },
    {
      name: 'Annette Black',
      accountNumber: '0123456789',
      bankName: 'Smith Bank',
      avatar: 'assets/avatars/annette.jpg',
    },
  ];
}
