import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTemplateDetailComponent } from './email-template-detail.component';

describe('EmailTemplateDetailComponent', () => {
  let component: EmailTemplateDetailComponent;
  let fixture: ComponentFixture<EmailTemplateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailTemplateDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
