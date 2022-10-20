import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/task';
import { TASKS_MOCKS } from 'src/app/mock-tasks';
import { faSwatchbook, faTimes } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: TaskInterface = TASKS_MOCKS[0];
  @Output() OnDeleteTask: EventEmitter<TaskInterface> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: TaskInterface) {
    //MOSTRAMOS EL MENSAJE DE CONFIRMACIÓN
    swal
      .fire({
        title: '¡Atención!',
        text: '¿Estás seguro de que quieres eliminar esta tarea?',
        icon: 'warning',
        confirmButtonText: 'Sí, eliminar!',
        confirmButtonColor: 'red',
        showCancelButton: true,
        cancelButtonText: 'No, cancelar',
        cancelButtonColor: 'grey',
      })
      .then((swal_result) => {
        if (swal_result.isConfirmed) {

          //LLAMAMOS AL SERVICIO PARA ELIMINAR LA TAREA
          this.OnDeleteTask.emit(task);

          //MOSTRAMOS UN MENSAJE AL USUARIO INFORMANDO QUE SE ELIMINÓ CORRECTAMENTE
          swal.fire({
            title: '¡Información!',
            text: 'Se eliminó la tarea correctamente',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'green',
          });
        }
      });
  }
}
