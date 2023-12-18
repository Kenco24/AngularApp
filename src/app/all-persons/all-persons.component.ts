import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrl: './all-persons.component.css'
})
export class AllPersonsComponent implements OnInit, OnDestroy {
  persons: any[] = [];
  private personsSubscription: Subscription | undefined;

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    // Unsubscribe from previous subscription to avoid memory leaks
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

  ngOnDestroy(): void {
    // Unsubscribe from the persons subscription when the component is destroyed
    if (this.personsSubscription) {
      this.personsSubscription.unsubscribe();
    }
  }
}
