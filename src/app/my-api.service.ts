// my-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './models/task';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private apiUrl = 'http://localhost:8080/myAPI';

  private tasksUrl = `${this.apiUrl}/tasks`;
  private personsUrl = `${this.apiUrl}/person`;

  constructor(private http: HttpClient) {}

  // Tasks

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  addTask(request: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, request);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.tasksUrl}/${taskId}`);
  }

  editTask(taskId: number, request: Task): Observable<void> {
    return this.http.put<void>(`${this.tasksUrl}/${taskId}`, request);
  }

  retrieveTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksUrl}/${taskId}`);
  }

  // Persons

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  addPerson(request: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, request);
  }

  deletePerson(personId: number): Observable<void> {
    return this.http.delete<void>(`${this.personsUrl}/${personId}`);
  }

  editPerson(personId: number, request: Person): Observable<void> {
    return this.http.put<void>(`${this.personsUrl}/${personId}`, request);
  }

  retrievePerson(personId: number): Observable<Person> {
    return this.http.get<Person>(`${this.personsUrl}/${personId}`);
  }
}
