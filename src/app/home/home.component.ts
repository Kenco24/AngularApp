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
  isCreatePersonFormVisible: boolean = false;

  showCreateTaskForm() {
    this.isCreateTaskFormVisible = true;
    this.isCreatePersonFormVisible = false;
    console.log('showCreateTaskForm method called');
  }

  showCreatePersonForm() {
    this.isCreatePersonFormVisible = true;
    this.isCreateTaskFormVisible = false;
    console.log('showCreatePersonForm method called');
  }

  createTask() {
    this.isCreateTaskFormVisible = false; 
    this.refreshTaskList();
  }

  createPerson() {
    this.isCreatePersonFormVisible = false;
    this.refreshPersonList();
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

  private refreshPersonList() {
    this.apiService.getPersons().subscribe(
      (persons) => {
        console.log('Persons updated:', persons);
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }
}
