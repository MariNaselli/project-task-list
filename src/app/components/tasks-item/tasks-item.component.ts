import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/task';
import { TASKS_MOCKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task: TaskInterface = TASKS_MOCKS [0];
  @Output() OnDeleteTask : EventEmitter<TaskInterface> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task : TaskInterface) {
    this.OnDeleteTask.emit(task);
  }

}
