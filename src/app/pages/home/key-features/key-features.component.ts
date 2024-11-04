import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-features.component.html',
  styleUrl: './key-features.component.scss',
})
export class KeyFeaturesComponent {
  features = [
    {
      icon: 'fas fa-percent',
      title: 'Low Interest Rates',
      description: 'Starting as low as 7.49% APR.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'No Hidden Fees',
      description: 'Transparent costs and no surprises.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'No Collateral Required',
      description: 'Get approved based on creditworthiness.',
    },
  ];
}
