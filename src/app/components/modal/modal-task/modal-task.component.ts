import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { faAslInterpreting } from '@fortawesome/free-solid-svg-icons';
import { TaskInterface } from 'src/app/task';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss'],
})
export class ModalTaskComponent implements OnInit {
  @Output() OnSaveTask: EventEmitter<TaskInterface> = new EventEmitter();

  text: string = '';
  date: string ='';
  hour: string ='';
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    const newTask = {
      text: this.text,
      day: this.date + ' ' + this.hour,
      reminder: this.reminder
    }
    this.OnSaveTask.emit(newTask);
  }
}
