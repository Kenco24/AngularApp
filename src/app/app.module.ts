// Import Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlltasksComponent } from './alltasks/alltasks.component';

import { EditTaskButtonComponent } from './edit-task-button/edit-task-button.component';
import { SortDateButtonComponent } from './sort-date-button/sort-date-button.component';

import { MyApiService } from './my-api.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  providers: [MyApiService],
  declarations: [
    
    AlltasksComponent,
    AppComponent,
    HomeComponent,
    EditTaskButtonComponent,
    SortDateButtonComponent,
    
  ],
  imports: [
  
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
  ],
  bootstrap: [
   
    AppComponent
  ]
})

export class AppModule { }
