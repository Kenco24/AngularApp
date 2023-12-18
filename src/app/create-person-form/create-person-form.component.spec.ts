import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonFormComponent } from './create-person-form.component';

describe('CreatePersonFormComponent', () => {
  let component: CreatePersonFormComponent;
  let fixture: ComponentFixture<CreatePersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
