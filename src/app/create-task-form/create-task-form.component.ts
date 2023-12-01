// create-task-form.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MyApiService } from '../my-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent {
  newTask: any = {}; // Update the type based on your Task model

  constructor(private myApiService: MyApiService, public dialogRef: MatDialogRef<CreateTaskFormComponent>) {}

  createTask(): void {
    this.myApiService.addTask(this.newTask).subscribe(
      (createdTask: any) => {
        console.log('New task created:', createdTask);
        this.dialogRef.close(); // Close the dialog after successful creation
      },
      (error: any) => {
        console.error('Error creating task:', error);
        // Handle error as needed
      }
    );
  }
}
