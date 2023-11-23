// Import Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AlltasksComponent } from './alltasks/alltasks.component';


// NgModule decorator to define the module
@NgModule({
  declarations: [
    // Declare all your components here
    AlltasksComponent,
    AppComponent,
    HomeComponent,
    
  ],
  imports: [
    // Import other Angular modules that your app depends on
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [
    // The main component that should be bootstrapped when the app starts
    AppComponent
  ]
})
// Export the module class
export class AppModule { }
