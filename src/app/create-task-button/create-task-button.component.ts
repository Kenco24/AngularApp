import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-create-task-button',
  templateUrl: './create-task-button.component.html',
  styleUrls: ['./create-task-button.component.css']
})
export class CreateTaskButtonComponent {
 
  
  @Output() createTaskClick = new EventEmitter<void>();

  onClick() {
    this.createTaskClick.emit();
  }
}
