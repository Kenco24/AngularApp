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

  isCreateTaskFormVisible: boolean = false; 

  showCreateTaskForm() {
    this.isCreateTaskFormVisible = true;
    console.log("showcreatetaskform method called")
  }

  onTaskCreated() {
    this.refreshTaskList();
  }

  createTask(newTask: any) {
    this.isCreateTaskFormVisible = false; 
    this.refreshTaskList();
  }
  

  private refreshTaskList() {
 
    this.apiService.getTasks().subscribe(
      (tasks) => {
    
        console.log('Tasks updated:', tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }
}
