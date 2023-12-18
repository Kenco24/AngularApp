import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonButtonComponent } from './create-person-button.component';

describe('CreatePersonButtonComponent', () => {
  let component: CreatePersonButtonComponent;
  let fixture: ComponentFixture<CreatePersonButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePersonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
