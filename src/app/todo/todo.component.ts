import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id?: number;
  toDo?: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todoService.retrieveTodo('yurii', <number>this.id)
      .subscribe(
        data => this.toDo = data
      )
  }

  saveTodo() {

  }
}
