import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDateButtonComponent } from './sort-date-button.component';

describe('SortDateButtonComponent', () => {
  let component: SortDateButtonComponent;
  let fixture: ComponentFixture<SortDateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortDateButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortDateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
