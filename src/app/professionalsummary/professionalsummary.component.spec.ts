import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsummaryComponent } from './professionalsummary.component';

describe('ProfessionalsummaryComponent', () => {
  let component: ProfessionalsummaryComponent;
  let fixture: ComponentFixture<ProfessionalsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalsummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
