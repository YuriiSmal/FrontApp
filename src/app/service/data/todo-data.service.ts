import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) {
  }


  retrieveAllTodos(name: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  // updateTodo(username: string, id: number) {
  //   return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  // }
}
