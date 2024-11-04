import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  id!: number;
  toDo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuth: BasicAuthenticationService
  ) {
  }


  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.toDo = new Todo(<number>this.id, '', false, new Date());

    if (this.id != -1)
      this.todoService.retrieveTodo(<string>this.basicAuth.getAuthenticatedUser(), <number>this.id)
        .subscribe(
          data => this.toDo = data
        )
  }

  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo(<string>this.basicAuth.getAuthenticatedUser(), <Todo>this.toDo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService.updateTodo(<string>this.basicAuth.getAuthenticatedUser(),
        <number>this.id, <Todo>this.toDo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
