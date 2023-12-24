// all-persons.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.css']
})
export class AllPersonsComponent implements OnInit, OnDestroy {
  persons: any[] = [];
  private personsSubscription: Subscription | undefined;

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

    this.personsSubscription = this.myApiService.getPersons().subscribe(
      (data: any[]) => {
        this.persons = data;
      },
      (error: any) => {
        console.error('Error loading persons:', error);
      }
    );
  }

  deletePerson(person: any): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
      
        this.myApiService.deletePerson(person.id).subscribe(
          () => {
            
            this.persons = this.persons.filter(p => p.id !== person.id);
            this.showSnackbar('Person deleted successfully.');
          },
          (error: any) => {
            console.error('Error deleting person:', error);
            this.showSnackbar('Error deleting person. Please try again.');
          }
        );
      }
    });
  }

  reloadPersons(): void {
    this.loadPersons();
    this.showSnackbar('Persons reloaded successfully.');
  }
  ngOnDestroy(): void {
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
