import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Mi Lista de Tareas';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("toggleAddTask");
  }

}
