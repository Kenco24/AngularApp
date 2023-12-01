// create-task-button.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskFormComponent } from '../create-task-form/create-task-form.component';

@Component({
  selector: 'app-create-task-button',
  templateUrl: './create-task-button.component.html',
  styleUrls: ['./create-task-button.component.css']
})
export class CreateTaskButtonComponent {
  constructor(private dialog: MatDialog) {}

  openCreateTaskForm(): void {
    const dialogRef = this.dialog.open(CreateTaskFormComponent, {
      width: '400px', // Set the desired width
      // You can add other MatDialogConfig properties here
    });
  }
}
