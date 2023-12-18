// button-container.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent {
  @Output() createTaskClick = new EventEmitter<void>();
  @Output() createPersonClick = new EventEmitter<void>();

  isDropdownOpen = false;
  isIconExpanded = false;
  faBars = faBars;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isIconExpanded = !this.isIconExpanded;
    console.log(`button clicked ` + this.isDropdownOpen);
  }
}
