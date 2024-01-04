import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { AppComponent } from './app.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CreatePersonButtonComponent } from './create-person-button/create-person-button.component';
import { CreatePersonFormComponent } from './create-person-form/create-person-form.component';
import { CreateTaskButtonComponent } from './create-task-button/create-task-button.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { HomeComponent } from './home/home.component';
import { SortDateButtonComponent } from './sort-date-button/sort-date-button.component';
import { MyApiService } from './my-api.service';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationVerifyApiService } from './location-verify-api.service';

@NgModule({
  providers: [MyApiService,LocationVerifyApiService],
  declarations: [
    AllPersonsComponent,
    AlltasksComponent,
    AppComponent,
    ButtonContainerComponent,
    ConfirmationDialogComponent,
    CreatePersonButtonComponent,
    CreatePersonFormComponent,
    CreateTaskButtonComponent,
    CreateTaskFormComponent,
    EditTaskDialogComponent,
    HomeComponent,
    SortDateButtonComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
