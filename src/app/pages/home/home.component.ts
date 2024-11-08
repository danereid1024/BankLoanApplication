import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { LoanBenefitsComponent } from './loan-benefits/loan-benefits.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    KeyFeaturesComponent,
    LoanBenefitsComponent,
    LoanCalculatorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
