// my-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private tasksUrl = 'http://localhost:8080/myAPI/tasks'; 

  constructor(private http: HttpClient) {}

  // Get all tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.tasksUrl}`);
  }

  // Add a new task
  addTask(request: any): Observable<any> {
    return this.http.post<any>(`${this.tasksUrl}`, request);
  }

  // Delete a task by ID
  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.tasksUrl}/${taskId}`);
  }

  // Update a task by ID
  editTask(taskId: number, request: any): Observable<void> {
    return this.http.put<void>(`${this.tasksUrl}/${taskId}`, request);
  }

  // Retrieve a task by ID
  retrieveTask(taskId: number): Observable<any> {
    return this.http.get<any>(`${this.tasksUrl}/${taskId}`);
  }


  private personUrl = 'http://localhost:8080/myAPI/person'; 



  // Get all persons
  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.personUrl}`);
  }

  // Add a new person
  addPerson(request: any): Observable<any> {
    return this.http.post<any>(`${this.personUrl}`, request);
  }

  // Delete a person by ID
  deletePerson(personId: number): Observable<void> {
    return this.http.delete<void>(`${this.personUrl}/${personId}`);
  }

  // Update a person by ID
  editPerson(personId: number, request: any): Observable<void> {
    return this.http.put<void>(`${this.personUrl}/${personId}`, request);
  }

  // Retrieve a person by ID
  retrievePerson(personId: number): Observable<any> {
    return this.http.get<any>(`${this.personUrl}/${personId}`);
  }

}
