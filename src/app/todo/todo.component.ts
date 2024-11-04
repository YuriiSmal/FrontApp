import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Todo} from "../list-todos/list-todos.component";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.toDo = new Todo(this.id, '', false, new Date());

    if (this.id != -1)
      this.todoService.retrieveTodo('yurii', <number>this.id)
        .subscribe(
          data => this.toDo = data
        )
  }

  saveTodo() {

    if (this.id === -1) {
      this.todoService.createTodo("yurii", this.toDo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
        }
      )
    } else {
      this.todoService.updateTodo("yurii", this.id, this.toDo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
