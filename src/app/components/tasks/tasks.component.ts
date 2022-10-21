import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { TaskInterface } from 'src/app/task';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  miListaDeTareas: TaskInterface[] = [];
  showError: boolean = false;
  task: TaskInterface | undefined;
  constructor(private myServicioDeTareas: TaskService) {}

  //_tasksDevueltas: son las tasks que devuelve el servicio
  //cuando ya las tiene disponibles para devolver.
  ngOnInit(): void {
    this.myServicioDeTareas.devolverTareas().subscribe(
      (_tasksDevueltas) => (this.miListaDeTareas = _tasksDevueltas),

      (_taskError) => (this.showError = true)
    );
  }

  deleteTask(task: TaskInterface) {
    this.myServicioDeTareas.deleteTask(task).subscribe(
      () =>
        (this.miListaDeTareas = this.miListaDeTareas.filter((t) => {
          return t.id !== task.id;
        }))
    );
  }

  addTask(task: TaskInterface) {
    this.myServicioDeTareas.addTask(task).subscribe((taskResult) => {

      this.miListaDeTareas.push(taskResult);

      swal.fire({
        title: '¡Excelente!',
        text: 'Se guardó la tarea correctamente',
        icon: 'success'
      });
    });
  }
}
