import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-date-button',
  templateUrl: './sort-date-button.component.html'
,
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
