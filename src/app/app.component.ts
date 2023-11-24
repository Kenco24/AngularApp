import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';


  onTaskCreated() {
    // This function can be used to perform any action after a task is created
    console.log('Task created! Refresh or update task list.');
  }
}
