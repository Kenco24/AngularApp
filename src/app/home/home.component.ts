// home.component.ts
import { Component } from '@angular/core';
import { MyApiService } from '../my-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private apiService: MyApiService) {}

  isCreateTaskFormVisible: boolean = false; // Make sure this is initially set to false

  showCreateTaskForm() {
    this.isCreateTaskFormVisible = true;
    console.log("showcreatetaskform method called")
  }

  onTaskCreated() {
    this.refreshTaskList();
  }

  createTask(newTask: any) {
    // Assuming you have a method in your MyApiService to create a new task
    this.apiService.addTask(newTask).subscribe(
      (response) => {
        console.log('Task created successfully:', response);
        this.isCreateTaskFormVisible = false; // Hide the form after creating the task
        this.refreshTaskList();
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
    this.isCreateTaskFormVisible = false;
  }

  private refreshTaskList() {
    // Call the method to fetch and update the tasks from the API service
    this.apiService.getTasks().subscribe(
      (tasks) => {
        // Update your tasks array or perform any necessary actions
        console.log('Tasks updated:', tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}
