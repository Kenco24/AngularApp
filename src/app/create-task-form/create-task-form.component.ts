// app-create-task-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyApiService } from '../my-api.service'; // Update the path based on your actual structure

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent {
  @Input() showForm: boolean = false;
  @Output() formSubmitted = new EventEmitter<any>();

  // Inject the MyApiService in the constructor
  constructor(private myApiService: MyApiService) {}

  onSubmit(formValue: any) {
    // Ensure that the keys in formValue match the expected properties in your Spring Boot controller
    const newTaskRequest = {
      task: formValue.task,
      name: formValue.name,
      description: formValue.description,
      dueDate: formValue.dueDate,
    };
  
    this.myApiService.addTask(newTaskRequest).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
        // Handle success
      },
      (error) => {
        console.error('Error creating task:', error);
        // Handle error
      }
    );
  }
  
}
