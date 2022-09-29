import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskInterface } from 'src/app/task';
import { TASKS_MOCKS } from 'src/app/mock-tasks';
import { HttpClient, HttpHandler } from '@angular/common/http';

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
}
