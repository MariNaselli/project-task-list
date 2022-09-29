import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TaskInterface } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  miListaDeTareas: TaskInterface[] = [];

  constructor(private myServicioDeTareas: TaskService) {}

  //_tasksDevueltas: son las tasks que devuelve el servicio
  //cuando ya las tiene disponibles para devolver.
  ngOnInit(): void {
    this.myServicioDeTareas
      .devolverTareas()
      .subscribe((_tasksDevueltas) => (this.miListaDeTareas = _tasksDevueltas));
  }

  deleteTask(task: TaskInterface) {
    this.myServicioDeTareas.deleteTask(task).subscribe(
      () =>
        (this.miListaDeTareas = this.miListaDeTareas.filter((t) => {
          return t.id !== task.id;
        }))
    );
  }
}
