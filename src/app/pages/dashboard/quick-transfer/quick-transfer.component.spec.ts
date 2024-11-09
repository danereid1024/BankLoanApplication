import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickTransferComponent } from './quick-transfer.component';

describe('QuickTransferComponent', () => {
  let component: QuickTransferComponent;
  let fixture: ComponentFixture<QuickTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickTransferComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuickTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have contacts', () => {
    expect(component.contacts.length).toBeGreaterThan(0);
  });
});