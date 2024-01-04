import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from '../models/task'; 



@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit, OnDestroy {
  @Input() showForm: boolean = false;
  @Output() formSubmitted = new EventEmitter<any>();

  persons: any[] = [];
  private addTaskSubscription: Subscription | undefined;
  taskFormData: Task = { name: '', task: '', description: '', dueDate: '' };



  constructor(private myApiService: MyApiService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.myApiService.getPersons().subscribe({
      next: (persons) => {
        this.persons = persons;
      },
      error: (error) => {
        console.error('Error fetching persons:', error);
      }
    });
  }
  
  onSubmit() {
    const newTaskRequest = {
      task: this.taskFormData.task,
      description: this.taskFormData.description,
      dueDate: this.taskFormData.dueDate,
      name: this.taskFormData.name
    };
    console.log(newTaskRequest);
  
    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }
  
    this.addTaskSubscription = this.myApiService.addTask(newTaskRequest).subscribe({
      next: (response) => {
        console.log('Task created successfully:', response);
        this.showSnackbar('Task created successfully');
        this.formSubmitted.emit(this.taskFormData);
      },
      error: (error) => {
        console.error('Error creating task:', error);
        this.showSnackbar('Error creating task. Please try again.');
      }
    });
  }
  

  ngOnDestroy(): void {
    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

}
