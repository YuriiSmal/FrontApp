import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[]
  message!: string

  constructor(
    private todoService: TodoDataService,
    private basicAuth: BasicAuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.todoService.retrieveAllTodos(<string>this.basicAuth.getAuthenticatedUser()).subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo(<string>this.basicAuth.getAuthenticatedUser(), id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete Successful of id ${id}`
        this.refresh();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['/todos', id]);
  }

  addTodo() {
    this.router.navigate(['/todos', -1]);
  }
}
