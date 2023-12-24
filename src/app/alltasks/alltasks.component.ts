import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';


@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css'],
})
export class AlltasksComponent implements OnInit, OnDestroy {
  tasks: any[] = [];
  pagedTasks: any[] = [];
  private sortDirection: string = 'asc';
  itemsPerPage = 3;
  paginatorInfo: { startIndex: number; endIndex: number } = { startIndex: 0, endIndex: 0 };


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private tasksSubscription: Subscription | undefined;

  constructor(
    private myApiService: MyApiService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog  
  ) {}

  ngOnInit(): void {
    this.loadTasks();
   
  }



  loadTasks(): void {
    
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }

    this.tasksSubscription = this.myApiService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data;
        this.sortTasksByDueDate();
        this.showSnackbar('Tasks reloaded successfully.');
        const noTasksPara=document.getElementById("notasksP")!;
        noTasksPara.innerHTML="Empty list , create some tasks";

      },
      (error: any) => {
        console.error('Error loading tasks:', error);
        this.showSnackbar('Error reloading tasks. Please try again.');
        const noTasksPara=document.getElementById("notasksP")!;
        noTasksPara.innerHTML="Error tasks not loaded";
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

  deleteTask(task: any): void {
    console.log('Deleting task:', task);
  
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        
        console.log('User clicked Yes');
        
      
        this.myApiService.deleteTask(task.id).subscribe(
          () => {
          
            this.loadTasks();
            this.showSnackbar('Task deleted successfully.');
          },
          (error) => {
            console.error('Error deleting task:', error);
            this.showSnackbar('Error deleting task. Please try again.');
          }
        );
      } else {
        console.log('User clicked No');
      }
    });

  }
  editTask(task: any): void {
    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '400px',
      data: { taskData: task },
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
     
        const taskId = task.id;
        const updatedTaskData = result;
  
     
        this.myApiService.editTask(taskId, updatedTaskData).subscribe(
          () => {
            this.showSnackbar('Task updated successfully');
            this.loadTasks();
          },
          (error: any) => {
            console.error('Error updating task:', error);
            this.showSnackbar('Error updating task. Please try again.');
          }
        );
      }
    });
  }
  

  reloadTasks(): void {
    this.loadTasks();
  }

  ngOnDestroy(): void {
    if (this.tasksSubscription) {
      this.tasksSubscription.unsubscribe();
    }
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
  
}
