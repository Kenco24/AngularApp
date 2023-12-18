import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private myApiService: MyApiService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.myApiService.getPersons().subscribe(
      (persons) => {
        this.persons = persons;
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }

  onSubmit(formValue: any) {
    const newTaskRequest = {
      task: formValue.task,
      description: formValue.description,
      dueDate: formValue.dueDate,
      name: formValue.personName
    };

    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }

    this.addTaskSubscription = this.myApiService.addTask(newTaskRequest).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
        this.showSnackbar('Task created successfully');
        this.formSubmitted.emit(formValue);
      },
      (error) => {
        console.error('Error creating task:', error);
        this.showSnackbar('Error creating task. Please try again.');
      }
    );
  }

  ngOnDestroy(): void {
    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
