import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Subscription } from 'rxjs';

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

  constructor(private myApiService: MyApiService) {}

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
      name: formValue.personName  // Use personName as specified in the form
    };

    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }

    this.addTaskSubscription = this.myApiService.addTask(newTaskRequest).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );

    this.formSubmitted.emit(formValue);
  }

  ngOnDestroy(): void {
    if (this.addTaskSubscription) {
      this.addTaskSubscription.unsubscribe();
    }
  }
}
