// create-person-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyApiService } from '../my-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-person-form',
  templateUrl: './create-person-form.component.html',
  styleUrls: ['./create-person-form.component.css']
})
export class CreatePersonFormComponent {
  @Input() showForm: boolean = false;
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() personCreated = new EventEmitter<any>();

  personFormData: any = {};

  constructor(private myApiService: MyApiService, private snackBar: MatSnackBar) {}
  
  onSubmit() {

    this.myApiService.addPerson(this.personFormData).subscribe(
      (response) => {
        console.log('Person created successfully:', response);
        this.showSnackbar('Person created successfully');
        this.formSubmitted.emit(this.personFormData);
        this.personCreated.emit();
        this.resetForm();
      },
      (error) => {
        console.error('Error creating person:', error);
        this.showSnackbar('Error creating person. Please try again.');
      }
    );
  }

 

  resetForm() {
      
    this.personFormData = {};
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
}
