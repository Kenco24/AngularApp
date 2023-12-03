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


  constructor(private myApiService: MyApiService) {}

  onSubmit(formValue: any) {
  
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
    this.formSubmitted.emit(formValue);
  }
  
}
