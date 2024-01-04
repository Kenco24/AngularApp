import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Observable, Subscription, throwError, of, Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Person } from '../models/person';

@Component({
  selector: 'app-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.css'],
})
export class AllPersonsComponent implements OnInit, OnDestroy {
  persons$: Observable<Person[]> = of([]);
  private personsSubscription: Subscription | undefined;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private myApiService: MyApiService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    if (this.personsSubscription) {
      this.personsSubscription.unsubscribe();
    }

    this.persons$ = this.myApiService.getPersons().pipe(
      catchError((error: any) => {
        console.error('Error loading persons:', error);
        this.showSnackbar('Error loading persons. Please try again.');
        return throwError(error);
      }),
      takeUntil(this.destroy$)
    );
  }

  deletePerson(person: Person): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });
  
    dialogRef.afterClosed().subscribe({
      next: (result: boolean) => {
        if (result) {
          this.myApiService
            .deletePerson(person.id ?? -1)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: () => {
                this.loadPersons();
                this.showSnackbar('Person deleted successfully.');
              },
              error: (error: any) => {
                console.error('Error deleting person:', error);
                this.showSnackbar('Error deleting person. Please try again.');
              },
            });
        }
      },
    });
  }

  reloadPersons(): void {
    this.loadPersons();
    this.showSnackbar('Persons reloaded successfully.');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.personsSubscription) {
      this.personsSubscription.unsubscribe();
    }
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
