import {Component, OnInit} from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

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

  todos?: Todo[]
  message?: string
  // new Todo(1, 'Learn to Dance', false, new Date()),
  // new Todo(2, 'Learn to Fight', false, new Date()),
  // new Todo(3, 'Learn to Fly', false, new Date())

  constructor(
    private todoService: TodoDataService,
    private router: Router) {
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    this.refresh();
  }

  refresh() {
    this.todoService.retrieveAllTodos('yurii').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo("yurii", id).subscribe(
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
    // this.todoService.updateTodo("yurii", id).subscribe(
    //   response => {
    //     console.log(response)
    //     this.message = `Delete Successful of id ${id}`
    //     this.refresh();
    //   }
    //)
  }
}
