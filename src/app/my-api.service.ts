// my-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private apiUrl = 'http://localhost:8080/myAPI'; // Update the base URL to match your Spring Boot API

  constructor(private http: HttpClient) {}

  // Get all tasks
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Add a new task
  addTask(request: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, request);
  }

  // Delete a task by ID
  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }

  // Update a task by ID
  editTask(taskId: number, request: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${taskId}`, request);
  }

  // Retrieve a task by ID
  retrieveTask(taskId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${taskId}`);
  }
}
