// home.component.ts
import { Component } from '@angular/core';
import { MyApiService } from '../my-api.service'; // Update the path based on your actual structure

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private apiService: MyApiService) {}

  onTaskCreated() {
    // Optionally, you can refresh or update the task list
    // For example, you can call a method to fetch and update the tasks
    this.refreshTaskList();
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
