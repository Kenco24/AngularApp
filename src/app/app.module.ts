
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlltasksComponent } from './alltasks/alltasks.component';

import { EditTaskButtonComponent } from './edit-task-button/edit-task-button.component';
import { SortDateButtonComponent } from './sort-date-button/sort-date-button.component';

import { MyApiService } from './my-api.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteTaskButtonComponent } from './delete-task-button/delete-task-button.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { CreateTaskButtonComponent } from './create-task-button/create-task-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  providers: [MyApiService],
  declarations: [
    
    AlltasksComponent,
    AppComponent,
    HomeComponent,
    EditTaskButtonComponent,
    SortDateButtonComponent,
    DeleteTaskButtonComponent,
    ButtonContainerComponent,
    CreateTaskButtonComponent,
    CreateTaskFormComponent,
    EditTaskFormComponent,
   

    
  ],
  imports: [
  
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    MatPaginatorModule
    
    
 
  
  ],
  bootstrap: [
   
    AppComponent
  ]
})

export class AppModule { }
