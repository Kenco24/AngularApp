import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-person-button',
  templateUrl: './create-person-button.component.html',
  styleUrl: './create-person-button.component.css'
})
export class CreatePersonButtonComponent {
  @Output() createPersonClick = new EventEmitter<void>();

  onClick() {
    this.createPersonClick.emit();
  }
}
