import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css'],
})
export class AlltasksComponent implements OnInit, OnDestroy {
  tasks: any[] = [];
  pagedTasks: any[] = [];
  private sortDirection: string = 'asc';
  currentPage = 1;
  itemsPerPage = 5;
  paginatorInfo: { startIndex: number; endIndex: number } = { startIndex: 0, endIndex: 0 };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private tasksSubscription: Subscription | undefined;

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    // Unsubscribe from previous subscription to avoid memory leaks
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }

    this.tasksSubscription = this.myApiService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data;
        this.sortTasksByDueDate();
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

    this.updatePagedTasks();
  }

  handleSortButtonClick(direction: string): void {
    this.sortDirection = direction;
    this.sortTasksByDueDate();
  }

  updatePagedTasks(event?: any): void {
    const pageIndex = event?.pageIndex || (this.paginator ? this.paginator.pageIndex : 0);
    const startIndex = pageIndex * this.itemsPerPage;
    this.pagedTasks = this.tasks.slice(startIndex, startIndex + this.itemsPerPage);

    this.paginatorInfo = {
      startIndex: startIndex,
      endIndex: Math.min(startIndex + this.itemsPerPage, this.tasks.length),
    };
  }

  ngOnDestroy(): void {
   
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }
}
