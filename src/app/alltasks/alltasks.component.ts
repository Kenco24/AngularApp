import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyApiService } from '../my-api.service';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrl: './alltasks.component.css'
})

export class AlltasksComponent implements OnInit {
  tasks: any[] = [];

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
}
