import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-date-button',
  template: `
    <button (click)="toggleSortDirection()">
      Sort by Date
      <span [class]="sortDirection === 'asc' ? 'arrow-up' : 'arrow-down'"></span>
    </button>
  `,
  styleUrls: ['./sort-date-button.component.css']
})
export class SortDateButtonComponent {
  @Output() sortButtonClick: EventEmitter<string> = new EventEmitter<string>();
  private ascendingOrder = true;
  public sortDirection: string = 'asc';

  toggleSortDirection(): void {
    this.ascendingOrder = !this.ascendingOrder;
    this.sortDirection = this.ascendingOrder ? 'asc' : 'desc';
    this.sortButtonClick.emit(this.sortDirection);
  }
}
