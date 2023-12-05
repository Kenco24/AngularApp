// app-create-task-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyApiService } from '../my-api.service'; 

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
    
        
      },
      (error) => {
        console.error('Error creating task:', error);
        
      }
    );
    this.formSubmitted.emit(formValue);
  }
  
}
