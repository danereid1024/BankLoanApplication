import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBenefitsComponent } from './loan-benefits.component';

describe('LoanBenefitsComponent', () => {
  let component: LoanBenefitsComponent;
  let fixture: ComponentFixture<LoanBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
