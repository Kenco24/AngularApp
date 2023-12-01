import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {
  tasks: any[] = [];
  private sortDirection: string = 'asc'; // Default sorting direction
 



  constructor(private myApiService: MyApiService) {}

  

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.myApiService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data;
      },
      (error: any) => {
        console.error('Error loading tasks:', error);
      }
    );
  }


    
  
  sortTasksByDueDate(): void {
    this.tasks.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
  
      if (this.sortDirection === 'asc') {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  }
  
  

  // Listen to the sortButtonClick event from SortDateButtonComponent
  handleSortButtonClick(direction: string): void {
    this.sortDirection = direction;
    this.sortTasksByDueDate();
  }
}
