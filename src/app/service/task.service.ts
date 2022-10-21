import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskInterface } from 'src/app/task';
import { TASKS_MOCKS } from 'src/app/mock-tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  devolverTareas(): Observable<TaskInterface[]> {
    const tasks = of(TASKS_MOCKS);
    return this.http.get<TaskInterface[]>(this.apiURL);
  }

  deleteTask(task: TaskInterface): Observable <TaskInterface> {
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<TaskInterface>(url);
  }

  addTask(task: TaskInterface): Observable<TaskInterface>{
    return this.http.post<TaskInterface>(this.apiURL, task, httpOptions);
  }
}
