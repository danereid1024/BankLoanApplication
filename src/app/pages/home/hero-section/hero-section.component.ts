import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  loanAmount: number = 0;
  purpose: string = '';

  onSubmit() {
    // Handle form submission
    console.log('Form submitted', {
      amount: this.loanAmount,
      purpose: this.purpose,
    });
  }
}
